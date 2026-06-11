import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

import { HiMenu } from "react-icons/hi";

function Navbar({ setSidebarOpen }) {

    const { user, logout } = useAuth();

    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4 flex items-center justify-between">

            <div className="flex items-center gap-4">

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setSidebarOpen(true)}
                    className="lg:hidden text-3xl text-gray-700"
                >
                    <HiMenu />
                </button>

                <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                    Welcome, {user?.username}
                </h2>

            </div>

            <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition-all duration-200 text-sm sm:text-base"
            >
                Logout
            </button>

        </div>
    );
}

export default Navbar;