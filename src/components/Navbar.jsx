import { NavLink } from "react-router-dom";

import { useUserContext } from "../context/UserContext";

const Navbar = () => {
    const { user, setUser } = useUserContext();

    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            {user && (
                <>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                    <button onClick={() => setUser(null)}>Logout</button>
                </>
            )}
        </nav>
    );
};

export default Navbar;
