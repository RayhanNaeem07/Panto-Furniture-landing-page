import LinkButton from "../../components/LinkButton";

const WhyChooseUs = () => {
  return (
    <section className="section-container ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-12">
        <div>
          <h1 className="text-2xl font-bold py-4">Why <br/> Choosing Us</h1>
        </div>
        <div>
          <div>
            <h5 className="font-semibold ">Luxury facilities</h5>
            <p className="text-gray-600 py-4 ">
              The advantage of hiring a workspace with us is that givees you
              comfortable service and all-around facilities.
            </p>
           <LinkButton text="More info"/>
          </div>
        </div>
        <div>
          <h5 className="font-semibold">Affordable Price</h5>
          <p className="text-gray-600 py-4">
            You can get a workspace of the highst quality at an affordable price
            and still enjoy the facilities that are oly here.
          </p>
           <LinkButton text="More info"/>
        </div>
        <div>
          <h5 className="font-semibold">Many Choices</h5>
          <p  className="text-gray-600 py-4 mr-4">
            We provide many unique work space choices so that you can choose the
            workspace to your liking.
          </p>
           <LinkButton text="More info"/>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
