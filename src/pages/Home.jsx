import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const Home = () => {
    const { user, setUser } = useUserContext();

    const navigate = useNavigate();

    const handleClickLogin = () => {
        setUser({ name: "John Doe" });
        navigate("/dashboard");
    };

    return (
        <>
            <h1>Home</h1>
            {!user && <button onClick={handleClickLogin}>Login</button>}
        </>
    );
};

export default Home;
