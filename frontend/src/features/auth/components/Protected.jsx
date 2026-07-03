// import { Navigate } from "react-router";
// import { useAuth } from "../hooks/useAuth.js";




// // import React from 'react'

// const Protected = ({children}) => {
//     const {loading,user}=useAuth();
    
//     if(loading){
//         return <h1>Loading...</h1>
//     }

//     if(!user){
//         return <Navigate to={'/login'}/>
//     }



//   return children;
// }

// export default Protected


import { Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth.js";
import Loader from "../../../components/layout/Loader.jsx";

const Protected = ({ children }) => {
    const { loading, user } = useAuth();

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-canvas dark:bg-canvas-dark">
                <Loader size={56} />
                <p className="text-sm font-medium text-ink-500 dark:text-ink-400">
                    Loading Diagramo...
                </p>
            </div>
        );
    }

    if (!user) {
        return <Navigate to={'/login'} />;
    }

    return children;
};

export default Protected;

