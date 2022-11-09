import { useUserContext } from "../context/UserContext";

const Dashboard = () => {
    const { user } = useUserContext();

    return (
        <>
            <h1>Dashboard</h1>
            <p>{user?.name}</p>
        </>
    );
};

export default Dashboard;
