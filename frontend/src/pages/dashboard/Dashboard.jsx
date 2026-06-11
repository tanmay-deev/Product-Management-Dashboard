import DashboardLayout from "../../components/layout/DashboardLayout";

function Dashboard() {
    return (
        <DashboardLayout>

            <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-6">
                    Dashboard Overview
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                        <h2 className="text-gray-500 text-sm mb-2">
                            Total Products
                        </h2>

                        <p className="text-3xl font-bold text-blue-600">
                            0
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                        <h2 className="text-gray-500 text-sm mb-2">
                            Total Users
                        </h2>

                        <p className="text-3xl font-bold text-green-600">
                            0
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                        <h2 className="text-gray-500 text-sm mb-2">
                            Admin Role
                        </h2>

                        <p className="text-3xl font-bold text-red-500">
                            Active
                        </p>
                    </div>

                </div>
            </div>

        </DashboardLayout>
    );
}

export default Dashboard;