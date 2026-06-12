
import { FaMoon, FaSun } from "react-icons/fa";

import { useTheme } from "../../context/ThemeContext";

function ThemeToggle() {

    const {
        darkMode,
        toggleTheme,
    } = useTheme();

    return (

        <button
            onClick={toggleTheme}
            className="bg-gray-200 dark:bg-gray-700 p-3 rounded-xl transition-all duration-200 hover:scale-105"
        >

            {darkMode ? (

                <FaSun className="text-yellow-400" />

            ) : (

                <FaMoon className="text-gray-700" />

            )}

        </button>
    );
}

export default ThemeToggle;

