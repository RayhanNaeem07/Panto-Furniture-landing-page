const Footer = () => {
  return (
    <footer className="bg-[#F7F7F7] section-container ">

     <div className="pt-10 px-30">
       <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="font-bold text-2xl mb-4">Panto</h3>
          <p className="md:w-1/2 text-[#1E1E1E]">
            The advantage of hiring a workspace with us is that gives you
            comfortable service and all-around facilities
          </p>
        </div>

        <div className="grid grid-cols-3 gap-12">
          <div>
            <h1 className="mb-2 text-primary">Services</h1>
            <ul className="text-[#1E1E1E] space-y-2">
                <li>Email Marketing</li>
                <li>Campaigns</li>
                <li>Branding</li>
            </ul>
          </div>
          <div>
            <h1 className="mb-2 text-primary">Furniture</h1>
            <ul className="text-[#1E1E1E] space-y-2">
                <li>Beds</li>
                <li>Chair</li>
                <li>All</li>
            </ul>
          </div>
          <div>
            <h1 className="mb-2 text-primary">Follow Us</h1>
            <ul className="text-[#1E1E1E] space-y-2">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center py-4">
        <p>Copyright 2021</p>
        <div className="flex gap-4">
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
        </div>
      </div>
      
     </div>
    </footer>
  );
};

export default Footer;
