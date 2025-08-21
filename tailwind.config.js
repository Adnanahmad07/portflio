
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",// adjust path as needed
    ],
    darkMode: 'class',
    theme: {
        extend: {
            animation: {
                backgroundBlur: "bgPulse 10s ease-in-out infinite",
            },
            keyframes: {
                bgPulse: {
                    "0%, 100%": { transform: "scale(1)" },
                    "50%": { transform: "scale(1.1)" },
                },
            },
        },
    },
    plugins: [],
};
