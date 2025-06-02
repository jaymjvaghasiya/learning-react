import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom";
import { Login } from "../components/Login";

const useAuth = () => {
    const [authState, setAuthState] = useState({isLogedin: false, role: ""});
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        const id = localStorage.getItem("id");
        
        if(id) {
            setAuthState({isLogedin: true, role: ""});
        }
        setLoading(false);
        
    }, []);

    return {...authState, loading};
}

const ProtectedRoutes = () => {
    const auth = useAuth();
    if(auth.loading) {
        return <h2>LOADING</h2>
    }
    return auth.isLogedin ? <Outlet/> : <Login/>;
}

export default ProtectedRoutes;