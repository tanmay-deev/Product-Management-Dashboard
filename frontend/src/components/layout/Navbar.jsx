import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">

            <div>
                <h2 className="text-xl font-semibold text-gray-800">
                    Welcome, {user?.username}
                </h2>
            </div>

            <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition-all duration-200"
            >
                Logout
            </button>
        </div>
    );
}

export default Navbar;