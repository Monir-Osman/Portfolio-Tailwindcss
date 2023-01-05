import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";
import Fade from "react-reveal/Fade";
// i start here
function Navbar() {
  const matches = useMediaQuery("(min-width:768px)");
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div>
      {matches ? (
        <nav className="fixed z-50 top-0 h-16 w-full flex justify-center items-center">
          <ul className="list-none ">
            <li className="inline mr-2 ml-2">
              <a
                href="#home"
                className="text-white font-roboto font-thin border border-transparent transition-all duration-300 rounded-3xl hover:text-blueSky hover:border-blueSky pt-1 pb-1 pr-3 pl-3"
              >
                Home
              </a>
            </li>
            <li className="inline  mr-2 ml-2 ">
              <a
                href="#about"
                className="text-white font-roboto font-thin border border-transparent transition-all duration-300 rounded-3xl hover:text-blueSky hover:border-blueSky pt-1 pb-1 pr-3 pl-3"
              >
                About
              </a>
            </li>
            <li className="inline  mr-2 ml-2 ">
              <a
                href="#skills"
                className="text-white font-roboto font-thin border border-transparent transition-all duration-300 rounded-3xl hover:text-blueSky hover:border-blueSky pt-1 pb-1 pr-3 pl-3"
              >
                Skills
              </a>
            </li>
            <li className="inline  mr-2 ml-2">
              <a
                href="#works"
                className="text-white font-roboto font-thin border border-transparent transition-all duration-300 rounded-3xl hover:text-blueSky hover:border-blueSky pt-1 pb-1 pr-3 pl-3"
              >
                Works
              </a>
            </li>
            <li className="inline mr-2 ml-2">
              <a
                href="#contact"
                className="text-white font-roboto font-thin border border-transparent transition-all duration-300 rounded-3xl hover:text-blueSky hover:border-blueSky pt-1 pb-1 pr-3 pl-3"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="fixed z-40 top-0  w-screen">
          {!isClicked ? (
            <MenuIcon
              className="fixed top-2 right-2 z-50"
              sx={{ fontSize: 40, color: "white" }}
              onClick={() => setIsClicked(() => !isClicked)}
            />
          ) : (
            <CloseIcon
              className="fixed top-2 right-2 z-50"
              sx={{ fontSize: 40, color: "white" }}
              onClick={() => setIsClicked(() => !isClicked)}
            />
          )}
          {isClicked && (
            <Fade left>
              <div
                onClick={() => setIsClicked(false)}
                className="z-50 flex justify-center items-start  w-full h-screen bg-white/0 backdrop-blur"
              >
                <ul className="list-none w-4/5 text-center mt-8">
                  <li className="text-white p-4 font-roboto text-xl border-b border-slate-500">
                    <a href="#home">Home</a>
                  </li>
                  <li className="text-white p-4 font-roboto text-xl border-b border-slate-500">
                    <a href="#about">About</a>
                  </li>
                  <li className="text-white p-4 font-roboto text-xl border-b border-slate-500">
                    <a href="#skills">Skills</a>
                  </li>
                  <li className="text-white p-4 font-roboto text-xl border-b border-slate-500">
                    <a href="#works">Works</a>
                  </li>
                  <li className="text-white p-4 font-roboto text-xl border-b border-slate-500">
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </Fade>
          )}
        </nav>
      )}
    </div>
  );
}

export default Navbar;
