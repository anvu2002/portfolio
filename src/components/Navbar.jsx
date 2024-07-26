import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close, rbc_head, rbc } from '../assets';

const ResumeButton = () => {
  return (
    <a
      href="https://cyberanvu.co/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between bg-gray-800 px-3 py-2 rounded-full text-white tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 font-mono w-[150px]"
    >
      Resume
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-5 h-5 animate-bounce"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
        ></path>
      </svg>
    </a>
  );
};


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex-items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link 
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0,0);
          }}
        >
          {/* <img src={logo} alt ="logo" className="w-9 h-9 object-contain" /> */}
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Alex Vu &nbsp;
            <span className="sm:block hidden">| &nbsp; Former Developer @</span>
          </p>
          <img 
            src={rbc_head}
            alt="rbc header"
            className='w-90 h-10 object-contain'
          />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? "text-white"
                  : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer flex items-center gap-2`}
              onClick={() => setActive(link.title)}
            >
              {link.title === "Resume" ? (
                <ResumeButton />
              ) : (
                <>
                  <a href={`${link.id}`}>{link.title}</a>
                </>
              )}
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? "text-white"
                      : "text-secondary"
                  }  hover:text-white font-poopins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
