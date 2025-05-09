import { Outlet } from "react-router-dom";
import Navbar from "./../common/Navbar";
import Footer from "./../common/Footer";

const Root = () => {
  return (
    <div>
      <Navbar />
       <main className="min-h-screen">  <Outlet /></main>
      <Footer />
    </div>
  );
};

export default Root;
