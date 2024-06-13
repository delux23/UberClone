/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',       // Include .js, .jsx, .ts, and .tsx files in the pages directory
    './components/**/*.{js,jsx,ts,tsx}',  // Include .js, .jsx, .ts, and .tsx files in the components directory
    './app/**/*.{js,jsx,ts,tsx}',         // Include .js, .jsx, .ts, and .tsx files in the app directory
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Add custom colors
        primary: '#FF7A00',
        secondary: '#007BFF',
      },
      fontFamily: {
        // Add custom fonts
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      // Add more customizations as needed
    },
  },
  plugins: [],
};

