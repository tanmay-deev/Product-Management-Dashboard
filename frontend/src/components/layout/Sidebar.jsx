import { NavLink } from "react-router-dom";

import { HiX } from "react-icons/hi";

function Sidebar({ setSidebarOpen }) {

    return (
        <div className="w-64 bg-white border-r border-gray-200 min-h-screen p-5">

            {/* Top */}
            <div className="flex items-center justify-between mb-10">

                <h1 className="text-2xl font-bold text-blue-600">
                    ProductDash
                </h1>

                {/* Mobile Close Button */}
                <button
                    onClick={() => setSidebarOpen(false)}
                    className="lg:hidden text-3xl text-gray-700"
                >
                    <HiX />
                </button>

            </div>

            {/* Navigation */}
            <nav className="space-y-2">

                <NavLink
                    to="/dashboard"
                    onClick={() => setSidebarOpen(false)}
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
                    onClick={() => setSidebarOpen(false)}
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