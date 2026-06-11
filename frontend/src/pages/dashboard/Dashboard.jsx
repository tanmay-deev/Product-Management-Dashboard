import { useEffect, useState } from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";

import API from "../../api/axios";

import { useAuth } from "../../context/AuthContext";

function Dashboard() {

    const { user } = useAuth();

    const [totalProducts, setTotalProducts] = useState(0);

    useEffect(() => {

        const fetchDashboardData = async () => {

            try {

                const response = await API.get("/products");

                setTotalProducts(
                    response.data.totalProducts
                );

            } catch (error) {

                console.log(error);
            }
        };

        fetchDashboardData();

    }, []);

    return (
        <DashboardLayout>

            <div>

                <h1 className="text-3xl font-bold text-gray-800 mb-6">
                    Dashboard Overview
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                    {/* Total Products */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm">

                        <h2 className="text-gray-500 text-sm mb-2">
                            Total Products
                        </h2>

                        <p className="text-3xl font-bold text-blue-600">
                            {totalProducts}
                        </p>

                    </div>

                    {/* Current User */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm">

                        <h2 className="text-gray-500 text-sm mb-2">
                            Current User
                        </h2>

                        <p className="text-3xl font-bold text-green-600 capitalize">
                            {user?.username}
                        </p>

                    </div>

                    {/* User Role */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm">

                        <h2 className="text-gray-500 text-sm mb-2">
                            User Role
                        </h2>

                        <p
                            className={`
                                text-3xl font-bold capitalize
                                ${
                                    user?.role === "admin"
                                        ? "text-red-500"
                                        : "text-blue-600"
                                }
                            `}
                        >
                            {user?.role}
                        </p>

                    </div>

                </div>

            </div>

        </DashboardLayout>
    );
}

export default Dashboard;