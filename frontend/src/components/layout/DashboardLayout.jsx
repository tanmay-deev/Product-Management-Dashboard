import { useState } from "react";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function DashboardLayout({ children }) {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex bg-gray-100 min-h-screen relative">

            {/* Mobile Overlay */}
            {sidebarOpen && (
                <div
                    onClick={() => setSidebarOpen(false)}
                    className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                />
            )}

            {/* Sidebar */}
            <div
                className={`
                    fixed lg:static top-0 left-0 z-50
                    h-full transition-transform duration-300
                    ${sidebarOpen
                        ? "translate-x-0"
                        : "-translate-x-full lg:translate-x-0"
                    }
                `}
            >
                <Sidebar setSidebarOpen={setSidebarOpen} />
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0">

                <Navbar setSidebarOpen={setSidebarOpen} />

                <main className="p-4 sm:p-6">
                    {children}
                </main>

            </div>

        </div>
    );
}

export default DashboardLayout;