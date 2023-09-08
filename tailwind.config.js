/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        'skills': 'repeat( auto-fit, minmax(350px, 1fr))',
        'card-bene': 'repeat( auto-fit, minmax(200px, 1fr))',
        'skills-sm': 'repeat( auto-fit, minmax(300px, 1fr))'
      },
    },
  },
  plugins: [],
}

