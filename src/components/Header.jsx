import React, { useRef, useEffect } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import useMediaQuery from "@mui/material/useMediaQuery";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Typewriter from "typewriter-effect/dist/core";
import Fade from "react-reveal/Fade";

function Header() {
  const matches = useMediaQuery("(min-width:768px)");
  const text = useRef(null);

  useEffect(() => {
    let typewriter = new Typewriter(text.current, {
      loop: false,
      autoStart: true,
      delay: 90,
    });
    typewriter.pauseFor(1000).typeString("Full-Stack Web Developer").start();
  }, []);

  return (
    <section
      id="header"
      className="w-full flex justify-center items-center bg-gradient-to-tr from-black to-slate-900 h-screen relative"
    >
      <div className="text-center p-5 md:p-12 lg:p-20 mb-20">
        <Fade left cascade>
          <h1 className="text-4xl md:text-6xl lg:text-8xl text-white font-kaushan mb-10">
            I'm Monir Osmani
          </h1>
        </Fade>

        <p
          ref={text}
          className="text-base md:text-1xl lg:text-2xl font-stickNoBills text-gray-400 pb-3"
        ></p>
        <hr />
        <div>
          <Fade left cascade>
            <ul className="list-none flex justify-center items-center gap-10 mt-5">
              <li className="text-white transition-all duration-200  hover:text-blueSky">
                <a href="#">
                  {matches ? (
                    <LinkedInIcon sx={{ fontSize: 40 }} />
                  ) : (
                    <LinkedInIcon sx={{ fontSize: 30 }} />
                  )}
                </a>
              </li>
              <li className="text-white transition-all duration-200 hover:text-blueSky">
                <a href="#">
                  {matches ? (
                    <GitHubIcon sx={{ fontSize: 40 }} />
                  ) : (
                    <GitHubIcon sx={{ fontSize: 30 }} />
                  )}
                </a>
              </li>
              <li className="text-white transition-all duration-200 hover:text-blueSky">
                <a href="#">
                  {matches ? (
                    <TwitterIcon sx={{ fontSize: 40 }} />
                  ) : (
                    <TwitterIcon sx={{ fontSize: 30 }} />
                  )}
                </a>
              </li>
            </ul>
          </Fade>
        </div>
      </div>
      <span className="absolute bottom-6 animate-bounce">
        <a href="#">
          {matches ? (
            <KeyboardArrowDownIcon sx={{ fontSize: 50, color: "#00b1ec" }} />
          ) : (
            <KeyboardArrowDownIcon sx={{ fontSize: 40, color: "#00b1ec" }} />
          )}
        </a>
      </span>
    </section>
  );
}

export default Header;
