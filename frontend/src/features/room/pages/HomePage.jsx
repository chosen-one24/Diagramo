import CreateRoomForm from "../components/CreateRoomForm";
import JoinRoomForm from "../components/JoinRoomForm";

const HomePage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center gap-32 bg-gray-100">
      <CreateRoomForm />
      <JoinRoomForm />
    </div>
  );
};

export default HomePage;