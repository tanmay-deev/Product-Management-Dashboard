
function EmptyState({
    icon = "📦",
    title = "No Data Found",
    message = "There is nothing to display right now.",
    buttonText,
    onButtonClick,
}) {

    return (

        <div className="bg-white rounded-2xl p-10 text-center shadow-sm border border-gray-100">

            <div className="text-6xl mb-4">
                {icon}
            </div>

            <h2 className="text-2xl font-semibold text-gray-700">
                {title}
            </h2>

            <p className="text-gray-500 mt-2">
                {message}
            </p>

            {buttonText && (

                <button
                    onClick={onButtonClick}
                    className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl transition-all duration-200"
                >
                    {buttonText}
                </button>

            )}

        </div>
    );
}

export default EmptyState;

