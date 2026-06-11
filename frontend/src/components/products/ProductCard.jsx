import { useNavigate } from "react-router-dom";
import API from "../../api/axios";
import toast from "react-hot-toast";

function ProductCard({ product, onDelete }) {

    const navigate = useNavigate();

    const handleDelete = async () => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this product?"
        );

        if (!confirmDelete) return;

        try {

            await API.delete(`/products/${product._id}`);

            onDelete(product._id);

            toast.success("Product deleted successfully");

        } catch (error) {

            console.log(error);

            toast.error("Failed to delete product");
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-200">

            <img
                src={product.image}
                alt={product.name}
                className="w-full h-52 object-cover"
            />

            <div className="p-5">

                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {product.name}
                </h2>

                <p className="text-gray-500 mb-3">
                    {product.category}
                </p>

                <div className="flex items-center justify-between mb-4">

                    <span className="text-2xl font-bold text-blue-600">
                        ₹{product.price}
                    </span>

                </div>

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
                        onClick={handleDelete}
                        className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl transition-all duration-200"
                    >
                        Delete
                    </button>

                </div>

            </div>
        </div>
    );
}

export default ProductCard;