import { Link, NavLink } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiCancel } from "react-icons/gi";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isNavBtnPressed, setIsNavBtnPressed] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsNavBtnPressed(!isNavBtnPressed);
  };

  //Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <header
      className={` fixed  top-0 left-0 right-0 transition duration-300 ease-in-out z-50 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent text-white"
      }`}
    >
      <nav className="section-container  flex items-center justify-between ">
        {/* Logo */}

        <div>
          <Link to="/" className="font-bold text-2xl">
            Panto{" "}
          </Link>
        </div>

        {/* Hamburger menu*/}
        <div className="md:hidden text-2xl ">
          <button onClick={toggleMenu} className="cursor-pointer">
            {isNavBtnPressed ? <GiCancel /> : <GiHamburgerMenu />}
          </button>
        </div>

        {/* Desktop menu item */}
        <div className="hidden md:block">
          <ul className="flex space-x-8 ">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "text-primary" : "hover: #fff"
                }
              >
                Furniture
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/shop"}
                className={({ isActive }) =>
                  isActive ? "text-primary" : "hover: #fff"
                }
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive ? "text-primary" : "hover: #fff"
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  isActive ? "text-primary" : "hover: #fff"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Mobile menu */}

        <div
          className={`md:hidden w-full absolute top-full left-0 bg-black  ${
            isNavBtnPressed ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col items-center  gap-4 py-4">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "text-primary" : "hover: #fff"
                }
              >
                Furniture
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/shop"}
                className={({ isActive }) =>
                  isActive ? "text-primary" : "hover: #fff"
                }
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive ? "text-primary" : "hover: #fff"
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  isActive ? "text-primary" : "hover: #fff"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Cart icon*/}
        <div className="hidden md:block cursor-pointer relative">
          <FaShoppingBag className="text-xl" />
          <sup className="absolute top-0 -right-2 text-white bg-orange-400 w-4 h-4 rounded-full flex items-center justify-center text-xs">
            0
          </sup>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
