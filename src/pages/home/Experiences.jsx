import experiencesImg from "../../assets/experience.png";
import LinkButton from "../../components/LinkButton";
const Experiences = () => {
  return (
    <section className="section-container my-24 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-20 ">
      <div className="md:w-1/2 md:h-[541px]">
        <img src={experiencesImg} alt="" className="h-full w-full " />
      </div>

      <div className="md:w-1/2 mx-auto md:mb-12 ">
        <h3 className="text-lg font-semibold text-primary mb-4 tracking-widest">
          EXPERIENCES
        </h3>
        <h2 className="capitalize text-4xl font-bold md:w-1/2">
          We provide you the best experience
        </h2>
        <p className="text-[#1E1E1E] py-6 lg:w-3/4">
          You don’t have to worry about the result because all of these
          interiors are made by people who are professionals in their fields
          with an elegant and lucurious style and with premium quality materials
        </p>
        <LinkButton text="More info"/>
      </div>
    </section>
  );
};

export default Experiences;
