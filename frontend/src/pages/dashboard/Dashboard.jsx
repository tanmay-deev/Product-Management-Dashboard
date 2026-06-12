import { useEffect, useState } from "react";

import {
    FaBox,
    FaLayerGroup,
    FaUserShield,
    FaClock,
} from "react-icons/fa";

import DashboardLayout from "../../components/layout/DashboardLayout";
import StatCard from "../../components/ui/StatCard";
import DashboardSkeleton from "../../components/skeletons/DashboardSkeleton";

import API from "../../api/axios";

import { useAuth } from "../../context/AuthContext";

function Dashboard() {

    const { user } = useAuth();

    const [loading, setLoading] = useState(true);

    const [dashboardData, setDashboardData] = useState({
        totalProducts: 0,
        totalCategories: 0,
        latestProduct: "N/A",
    });

    useEffect(() => {

        const fetchDashboardData = async () => {

            try {

                setLoading(true);

                const response = await API.get("/products?limit=100");

                const products = response.data.products;

                const categories = [
                    ...new Set(
                        products.map(
                            (product) => product.category
                        )
                    ),
                ];

                setDashboardData({
                    totalProducts: response.data.totalProducts,
                    totalCategories: categories.length,
                    latestProduct:
                        products.length > 0
                            ? products[0].name
                            : "N/A",
                });

            } catch (error) {

                console.log(error);

            } finally {

                setLoading(false);

            }
        };

        fetchDashboardData();

    }, []);

    return (

        <DashboardLayout>

            <div>

                {/* Heading */}
                <div className="mb-8">

                    <h1 className="text-3xl font-bold text-gray-800">
                        Dashboard Overview
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Welcome back, {user?.username}
                    </p>

                </div>

                {/* Loading */}
                {loading ? (

                    <DashboardSkeleton />

                ) : (

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

                        {/* Total Products */}
                        <StatCard
                            title="Total Products"
                            value={dashboardData.totalProducts}
                            icon={<FaBox className="text-blue-600" />}
                        />

                        {/* Categories */}
                        <StatCard
                            title="Categories"
                            value={dashboardData.totalCategories}
                            icon={<FaLayerGroup className="text-purple-600" />}
                        />

                        {/* User Role */}
                        <StatCard
                            title="User Role"
                            value={user?.role}
                            icon={<FaUserShield className="text-red-500" />}
                        />

                        {/* Latest Product */}
                        <StatCard
                            title="Latest Product"
                            value={dashboardData.latestProduct}
                            icon={<FaClock className="text-green-600" />}
                        />

                    </div>

                )}

                {/* Recent Activity Section */}
                <div className="mt-10 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">

                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Recent Activity
                    </h2>

                    <div className="space-y-4">

                        <div className="flex items-center justify-between border-b pb-3">

                            <div>

                                <p className="font-medium text-gray-700">
                                    Logged in as
                                </p>

                                <p className="text-sm text-gray-500">
                                    {user?.username}
                                </p>

                            </div>

                            <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full capitalize">
                                {user?.role}
                            </span>

                        </div>

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="font-medium text-gray-700">
                                    Latest Product Added
                                </p>

                                <p className="text-sm text-gray-500">
                                    {dashboardData.latestProduct}
                                </p>

                            </div>

                            <span className="text-sm bg-green-100 text-green-600 px-3 py-1 rounded-full">
                                Active
                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </DashboardLayout>
    );
}

export default Dashboard;
