import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../components/layout/DashboardLayout";
import API from "../../api/axios";
import toast from "react-hot-toast";

function AddProduct() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        price: "",
        category: "",
    });

    const [image, setImage] = useState(null);

    const [preview, setPreview] = useState("");

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleImageChange = (e) => {

        const file = e.target.files[0];

        setImage(file);

        setPreview(URL.createObjectURL(file));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            setLoading(true);
            setError("");

            const productData = new FormData();

            productData.append("name", formData.name);
            productData.append("price", formData.price);
            productData.append("category", formData.category);

            if (image) {
                productData.append("image", image);
            }

            await API.post(
                "/products",
                productData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            toast.success("Product added successfully");

            navigate("/products");

        } catch (err) {

            toast.error(
                err.response?.data?.message ||
                "Failed to add product"
            );

        } finally {

            setLoading(false);

        }
    };

    return (
        <DashboardLayout>

            <div className="max-w-3xl mx-auto">

                <div className="bg-white rounded-2xl shadow-sm p-8">

                    <h1 className="text-3xl font-bold text-gray-800 mb-8">
                        Add Product
                    </h1>

                    {error && (
                        <div className="bg-red-100 text-red-600 p-4 rounded-xl mb-6">
                            {error}
                        </div>
                    )}

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >

                        {/* Product Name */}
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Product Name
                            </label>

                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Price */}
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Price
                            </label>

                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Category */}
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Category
                            </label>

                            <input
                                type="text"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Image Upload */}
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Product Image
                            </label>

                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="w-full border border-gray-300 rounded-xl px-4 py-3"
                            />
                        </div>

                        {/* Preview */}
                        {preview && (
                            <div>
                                <img
                                    src={preview}
                                    alt="Preview"
                                    className="w-64 h-64 object-cover rounded-2xl border"
                                />
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-all duration-200 disabled:bg-blue-400"
                        >
                            {loading
                                ? "Adding Product..."
                                : "Add Product"}
                        </button>

                    </form>

                </div>

            </div>

        </DashboardLayout>
    );
}

export default AddProduct;