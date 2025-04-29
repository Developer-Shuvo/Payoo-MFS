// tailwind.config.js
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}", // For Next.js
        "./components/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{html,js}", // For general HTML/JS projects
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}