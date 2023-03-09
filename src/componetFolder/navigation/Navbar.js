import React, { useState, useEffect } from "react";
import { navList } from "../Data";
// Routes
// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars,faX} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [navber, setNavber] = useState(false);
  const [navData, setNavData] = useState(navList);
  // const user = useRef(null);
  const scrollHandle = () => {
    let scrollHeight = window.scrollY;
    if (scrollHeight > 80) {
      setNavber(true);
    } else {
      setNavber(false);
    }
  };

  const navClose = () => {
    if (window.innerWidth <= 768) {
      setToggle((prev) => !prev);
    }
  };

  const navUpdate = (id) => {
    const oke = navData.map((item) => {
      item.link_active = false;
      if (item.id === id) {
        return { ...item, link_active: true };
      } else return item;
    });
    setNavData(oke);
  };

  const ngs = () => {
    if (window.location.pathname == "/") {
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandle);

    return () => {
      window.removeEventListener("scroll", scrollHandle);
    };
  }, []);

  return (
    <nav
      className={`fixed z-50 w-full px-4 py-4 md:py-5 xl:py-6 sm:px-6 md:px-4 lg:px-2 border-0 border-solid border-nav_border duration-300 ease-linear overflow-hidden ${
        navber
          ? "bg-slate-900/60 shadow-2xl boder-0"
          : "bg-transparent border-b-[0.01rem]"
      } ${toggle && "bg-slate-900/50 md:bg-slate-900/60 border-none"}
      ${toggle ? "h-[280px] md:h-auto" : "h-[60px] md:h-auto"}
        `}
    >
      <div className="container flex xl:px-4 flex-col md:flex-row  justify-between mx-auto">
        <div className="flex justify-between items-center">
          <a
            href="#"
            className="text-lg xl:text-xl text-white font-semibold duration-300 ease-in text-show hover:shadow-hoverNeon hover:bg-green-400"
          >
            ROD <span className="text-yellow-400">SHOP</span>
          </a>
          <button
            className={`md:hidden bg-transparent w-[2rem] h-[1.8rem] border-0 text-logoColor cursor-pointer opacity-0 text-xl ${
              toggle ? "opacity-100" : "opacity-100"
            }`}
            onClick={() => navClose()}
          >
            {
              <FontAwesomeIcon icon={toggle ? faX :  faBars } />
            }
          </button>
        </div>
        <div
          className={`duration-300 mt-6 md:mt-0 grid place-items-center ease-linea`}
        >
          <ul className="flex gap-4 xl:gap-6 text-center flex-col md:flex-row  list-none">
            {navData?.map((links, index) => {
              return (
                <li
                  onClick={() => (navClose(), navUpdate(links.id))}
                  key={links.id}
                  className={`relative cursor-pointer before:absolute before:content-[''] before:-bottom-[0.3rem]      md:before:-bottom-[0.5rem] before:left-1/2 before:-translate-x-1/2 before:h-[0.11rem] before:border-0 before:border-solid before:border-b-[0.18rem] before:border-borderColor before:duration-200 before:ease-linear hover:before:shadow-hoverNeon before:w-0 hover:before:w-full ${
                    links.link_active &&
                    "before:shadow-hoverNeon before:w-[100%]"
                  }`}
                >
                  <a
                    href={`${links.href}`}
                    className={`font-poppins opacity-90 text-show text-md xl:text-lg duration-200 ease-in font-md hover:text-logoColor ${
                      links.link_active ? "text-[#ffc518]" : "text-typo"
                    }`}
                  >
                    {links.link}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
