import withMT from "@material-tailwind/react/utils/withMT";
 
const inter = "tailwindcss-font-inter";
export default withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFeatureSettings: {
      numeric: ['tnum', 'salt', 'ss02']
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
    }
  },
    extend: {
      backgroundImage: {
        'home': "url('https://watermark.lovepik.com/photo/40083/2170.jpg_wh1200.jpg')",
    },
    backgroundVideo : {
      'video' : '/src/assets/video/bg-vid.mp4'
    },
    
  },
  plugins: [require('tailwindcss-font-inter','daisyui')]
});