export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#1A1A1A',
        orange: '#FF6B00',
        amber: '#FFC107',
        light: '#FFFFFF',
      },
      boxShadow: {
        soft: '0 4px 12px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
