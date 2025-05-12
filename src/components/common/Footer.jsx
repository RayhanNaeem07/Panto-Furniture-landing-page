import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <footer className="bg-[#F7F7F7] section-container ">

     <div className="pt-10 md:px-30">
       <div className="flex flex-col md:flex-row justify-between  mb-8">
        <div className='md:w-1/2'>
          <h3 className="font-bold text-2xl mb-4"><Link to="/">Panto</Link></h3>
          <p className="pb-4 md:w-1/2 text-[#1E1E1E]">
            The advantage of hiring a workspace with us is that gives you
            comfortable service and all-around facilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h1 className="mb-2 text-primary">Services</h1>
            <ul className="text-[#1E1E1E] space-y-2">
                <li><Link to="/">Email Marketing</Link></li>
                <li><Link to="/">Campaigns</Link></li>
                <li> <Link to="/">Branding</Link></li>
            </ul>
          </div>
          <div>
            <h1 className="mb-2 text-primary">Furniture</h1>
            <ul className="text-[#1E1E1E] space-y-2">
                <li><Link to="/">Beds</Link></li>
                <li><Link to="/">Chairs</Link></li>
                <li><Link to="/">All</Link></li>
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
        <p>Copyright &copy; 2021</p>
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
