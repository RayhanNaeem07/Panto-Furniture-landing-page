import LinkButton from "../../components/LinkButton";
import Products from "../shop/Products";
import Experiences from "./Experiences";
import Hero from "./Hero";
import Materials from "./Materials";
import Testimonials from "./Testimonials";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Products headLine="Best Selling Products" />
      <Experiences/>
      <Materials/>
      <Testimonials/>
    </>
  );
};

export default Home;
