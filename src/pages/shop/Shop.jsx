import bannerImg from "../../assets/banner.png";
import Products from "./Products";

const Shop = () => {
  return (
    <section className="min-h-screen">
      {/* Banner */}
      <div
        className="w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <h1 className="text-4xl font-semibold">Shop Our Products</h1>
      </div>
      <Products headLine="What's your choice"/>
    </section>
  );
};

export default Shop;
