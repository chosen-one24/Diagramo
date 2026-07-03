/**
 * Checks if two axis-aligned boxes overlap.
 */
function boxesOverlap(a, b) {
  return !(
    a.x2 < b.x1 ||
    a.x1 > b.x2 ||
    a.y2 < b.y1 ||
    a.y1 > b.y2
  );
}

/**
 * Estimates a bounding box for a text element based on
 * character count (rough monospace-ish estimate).
 */
function textBounds(el) {
  const charWidth = (el.strokeWidth || 2) * 5;
  const w = (el.text?.length || 1) * charWidth;
  const h = (el.strokeWidth || 2) * 12;
  return { x1: el.x, y1: el.y - h, x2: el.x + w, y2: el.y };
}

/**
 * Estimates a bounding box for rectangle/circle elements.
 */
function shapeBounds(el) {
  if (el.type === "rectangle") {
    const [p1, p2] = el.points;
    return {
      x1: Math.min(p1.x, p2.x),
      y1: Math.min(p1.y, p2.y),
      x2: Math.max(p1.x, p2.x),
      y2: Math.max(p1.y, p2.y),
    };
  }
  if (el.type === "circle") {
    const [center, edge] = el.points;
    const r = Math.hypot(edge.x - center.x, edge.y - center.y);
    return {
      x1: center.x - r,
      y1: center.y - r,
      x2: center.x + r,
      y2: center.y + r,
    };
  }
  return null;
}

/**
 * Pushes overlapping text elements downward (in 14px steps) until
 * they no longer collide with any previously-checked element.
 * Runs after Gemini's response — guarantees no two labels stack.
 */
export function fixOverlaps(elements) {
  const fixed = [...elements];
  const textElements = fixed.filter((el) => el.type === "text");
  const shapeElements = fixed.filter((el) => el.type !== "text");

  const placedBounds = shapeElements
    .map(shapeBounds)
    .filter(Boolean);

  textElements.forEach((textEl) => {
    let bounds = textBounds(textEl);
    let attempts = 0;

    while (
      placedBounds.some((b) => boxesOverlap(bounds, b)) &&
      attempts < 8
    ) {
      textEl.y += 14;
      bounds = textBounds(textEl);
      attempts += 1;
    }

    placedBounds.push(bounds);
  });

  return fixed;
}
