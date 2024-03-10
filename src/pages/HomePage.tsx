import {  UpComingSlider } from "@/component";
import { ProductCarousel } from "@/container";
function HomePage() {
  return (
    <div className="px-2 bg-white">
      <UpComingSlider />
      <ProductCarousel/>
      {/* <ProductCard title={"Clothes Shirt"} description={"Now get more on this type of shirt of 5 pack"} image={IMG} price={200} quantity={5}/> */}
    </div>
  );
}

export default HomePage;
