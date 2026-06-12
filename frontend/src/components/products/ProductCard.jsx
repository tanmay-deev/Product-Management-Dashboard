
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import API from "../../api/axios";
import { useAuth } from "../../context/AuthContext";

import ConfirmModal from "../ui/ConfirmModal";

function ProductCard({ product, onDelete }) {

    const navigate = useNavigate();
    const { user } = useAuth();

    const [showModal, setShowModal] = useState(false);
    const [deleteLoading, setDeleteLoading] = useState(false);

    const handleDelete = async () => {

        try {

            setDeleteLoading(true);

            await API.delete(`/products/${product._id}`);

            toast.success("Product deleted successfully");

            if (onDelete) {
                onDelete(product._id);
            }

            setShowModal(false);

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to delete product"
            );

        } finally {

            setDeleteLoading(false);

        }
    };

    return (

        <>
        
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-200">

                {/* Product Image */}
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 sm:h-52 object-cover"
                />

                <div className="p-5">

                    {/* Product Name */}
                    <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-1">
                        {product.name}
                    </h2>

                    {/* Category */}
                    <p className="text-gray-500 mb-3">
                        {product.category}
                    </p>

                    {/* Price */}
                    <div className="flex items-center justify-between mb-4">

                        <span className="text-2xl font-bold text-blue-600">
                            ₹{product.price}
                        </span>

                    </div>

                    {/* Admin Controls */}
                    {user?.role === "admin" && (

                        <div className="flex gap-3">

                            {/* Edit Button */}
                            <button
                                onClick={() =>
                                    navigate(`/products/edit/${product._id}`)
                                }
                                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl transition-all duration-200"
                            >
                                Edit
                            </button>

                            {/* Delete Button */}
                            <button
                                onClick={() => setShowModal(true)}
                                className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl transition-all duration-200"
                            >
                                Delete
                            </button>

                        </div>

                    )}

                </div>

            </div>

            {/* Confirm Delete Modal */}
            <ConfirmModal
                isOpen={showModal}
                title="Delete Product"
                message={`Are you sure you want to delete "${product.name}"? This action cannot be undone.`}
                confirmText="Delete"
                cancelText="Cancel"
                onConfirm={handleDelete}
                onCancel={() => setShowModal(false)}
                loading={deleteLoading}
            />

        </>

    );
}

export default ProductCard;

