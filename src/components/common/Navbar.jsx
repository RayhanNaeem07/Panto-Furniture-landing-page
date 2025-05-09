import { Link, NavLink } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiCancel } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
  const [isNavBtnPressed, setIsNavBtnPressed] = useState(false);

  const toggleMenu = () => {
    setIsNavBtnPressed(!isNavBtnPressed);
  };

  return (
    <header className="py-4  fixed w-full text-white top-0 transition duration-300 ease-in-out">
      <nav className="container mx-auto max-w-screen-2xl flex items-center justify-between py-4 px-4">
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
