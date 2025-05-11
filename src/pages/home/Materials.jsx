
import LinkButton from "../../components/LinkButton";
import materialImg1 from "../../assets/material1.png"
import materialImg2 from "../../assets/material2.png"
import materialImg3 from "../../assets/material3.png"


const Materials = () => {
  return (
    <section className="section-container my-24 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-20 ">
      <div className="md:w-1/2 mx-auto md:mb-12 ">
        <h3 className="text-lg font-semibold text-primary mb-4 tracking-widest">
          MATERIALS
        </h3>
        <h2 className="capitalize text-4xl font-bold leading-11 md:w-1/2">
          Very serious materials for making furniture
        </h2>
        <p className="text-[#1E1E1E] py-6 lg:w-1/2">
         Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price
        </p>
        <LinkButton text="More info" />
      </div>

      <div className="md:w-1/2 grid grid-cols-2 md:grid-cols-3 md:items-end items-center">
        <div>
            <img src={materialImg1} alt="" />
             <img src={materialImg2} alt="" />
        </div>
        <div className="col-span-1 md:col-span-2 ">
            <img src={materialImg3} alt="" className="w-full md:h-[541px]"/>
        </div>
      </div>
    </section>
  );
};

export default Materials;
