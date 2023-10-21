import withMT from "@material-tailwind/react/utils/withMT";
 
const inter = "tailwindcss-font-inter";
export default withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('src/assets/images/Carousel/img2.jpg')"
    },
  },
  plugins: [require(inter), require("daisyui") ]
}});