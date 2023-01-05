import { projectAuth } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


function Logout(){
    const navigate = useNavigate();
    useEffect(() => {
        projectAuth.signOut();
        console.log("User logged out...");
        navigate("/");
    });
}

export default Logout;