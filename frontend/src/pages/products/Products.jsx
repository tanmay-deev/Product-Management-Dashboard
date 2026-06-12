
import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import ProductCard from "../../components/products/ProductCard";
import ProductCardSkeleton from "../../components/skeletons/ProductCardSkeleton";
import API from "../../api/axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import EmptyState from "../../components/ui/EmptyState";

function Products() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const navigate = useNavigate();
    const { user } = useAuth();

    useEffect(() => {

        const fetchProducts = async () => {

            try {

                setLoading(true);
                setError("");

                const response = await API.get(
                    `/products?search=${search}&page=${page}&limit=6`
                );

                setProducts(response.data.products);
                setTotalPages(response.data.totalPages);

            } catch (err) {

                setError(
                    err.response?.data?.message ||
                    "Failed to fetch products"
                );

            } finally {

                setLoading(false);

            }
        };

        fetchProducts();

    }, [search, page]);

    const handleDeleteProduct = (id) => {

        setProducts((prevProducts) =>
            prevProducts.filter(
                (product) => product._id !== id
            )
        );
    };

    return (

        <DashboardLayout>

            <div>

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

                    <h1 className="text-3xl font-bold text-gray-800">
                        Products
                    </h1>

                    {user?.role === "admin" && (

                        <button
                            onClick={() => navigate("/products/add")}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl transition-all duration-200 shadow-sm"
                        >
                            Add Product
                        </button>

                    )}

                </div>

                {/* Search */}
                <div className="mb-6">

                    <input
                        type="text"
                        placeholder="Search products..."
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            setPage(1);
                        }}
                        className="w-full md:w-80 bg-white border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                </div>

                {/* Error State */}
                {error && (

                    <div className="bg-red-100 text-red-600 px-4 py-3 rounded-xl mb-6">
                        {error}
                    </div>

                )}

                {/* Loading Skeleton */}
                {loading ? (

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                        {[...Array(6)].map((_, index) => (

                            <ProductCardSkeleton key={index} />

                        ))}

                    </div>

                ) : products.length === 0 ? (

                    /* Empty State */

                    <EmptyState
                        icon="📦"
                        title="No Products Found"
                        message="Try changing your search or add a new product."
                        buttonText={
                            user?.role === "admin"
                                ? "Add First Product"
                                : null
                        }
                        onButtonClick={() => navigate("/products/add")}
                    />



                ) : (

                    /* Products Grid */
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                        {products.map((product) => (

                            <ProductCard
                                key={product._id}
                                product={product}
                                onDelete={handleDeleteProduct}
                            />

                        ))}

                    </div>

                )}

                {/* Pagination */}
                {!loading && products.length > 0 && (

                    <div className="flex items-center justify-center gap-3 mt-10">

                        <button
                            disabled={page === 1}
                            onClick={() => setPage(page - 1)}
                            className="bg-white border border-gray-300 px-4 py-2 rounded-xl disabled:opacity-50 hover:bg-gray-100 transition-all"
                        >
                            Previous
                        </button>

                        <span className="font-medium text-gray-700">
                            Page {page} of {totalPages}
                        </span>

                        <button
                            disabled={page === totalPages}
                            onClick={() => setPage(page + 1)}
                            className="bg-white border border-gray-300 px-4 py-2 rounded-xl disabled:opacity-50 hover:bg-gray-100 transition-all"
                        >
                            Next
                        </button>

                    </div>

                )}

            </div>

        </DashboardLayout>
    );
}

export default Products;

