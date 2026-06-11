import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <div className="w-64 bg-white border-r border-gray-200 min-h-screen p-5">

            <h1 className="text-2xl font-bold text-blue-600 mb-10">
                ProductDash
            </h1>

            <nav className="space-y-2">

                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        `block px-4 py-3 rounded-xl transition-all duration-200 ${
                            isActive
                                ? "bg-blue-600 text-white"
                                : "text-gray-700 hover:bg-gray-100"
                        }`
                    }
                >
                    Dashboard
                </NavLink>

                <NavLink
                    to="/products"
                    className={({ isActive }) =>
                        `block px-4 py-3 rounded-xl transition-all duration-200 ${
                            isActive
                                ? "bg-blue-600 text-white"
                                : "text-gray-700 hover:bg-gray-100"
                        }`
                    }
                >
                    Products
                </NavLink>

            </nav>
        </div>
    );
}

export default Sidebar;