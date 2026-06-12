
function ConfirmModal({
    isOpen,
    title,
    message,
    confirmText = "Confirm",
    cancelText = "Cancel",
    onConfirm,
    onCancel,
    loading = false,
}) {

    if (!isOpen) return null;

    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">

            <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 animate-fadeIn">

                <h2 className="text-2xl font-bold text-gray-800">
                    {title}
                </h2>

                <p className="text-gray-600 mt-3">
                    {message}
                </p>

                <div className="flex justify-end gap-3 mt-8">

                    <button
                        onClick={onCancel}
                        disabled={loading}
                        className="px-5 py-2 rounded-xl border border-gray-300 hover:bg-gray-100 transition-all"
                    >
                        {cancelText}
                    </button>

                    <button
                        onClick={onConfirm}
                        disabled={loading}
                        className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-xl transition-all disabled:opacity-50"
                    >
                        {loading ? "Please wait..." : confirmText}
                    </button>

                </div>

            </div>

        </div>

    );
}

export default ConfirmModal;

