import { Outlet, Navigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const LayoutPrivate = () => {
    const { user } = useUserContext();

    return <>{user ? <Outlet /> : <Navigate to="/" />}</>;
};

export default LayoutPrivate;
