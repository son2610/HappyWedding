/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                wrap: "rgba(0, 0, 0, 0.5) 0 1rem 3rem",
            },
            keyframes: {
                "horizontal-shaking": {
                    "0%": { transform: "translateX(0)" },
                    "  25%": { transform: "translateX(1px)" },
                    "50%": { transform: "translateX(-1px)" },
                    "75%": { transform: "translateX(1px)" },
                    "100%": { transform: "translateX(0)" },
                },
            },
            animation: {
                shake: "horizontal-shaking .5s ease-in-out infinite",
            },
        },
        fontFamily: {
            weddingFont: ["wedding-font-vni", "sans-serif"],
            poppins: ["Poppins", "sans-serif"],
        },
        container: {
            center: true,
        },
    },
    plugins: [],
    // corePlugins: {
    //     preflight: false,
    // },
};
