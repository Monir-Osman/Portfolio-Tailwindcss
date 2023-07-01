import React from "react";

import Fade from "react-reveal/Fade";

function Footer() {
  return (
    <section className="w-full pt-8 pb-8 relative bg-gradient-to-tr from-black to-slate-900 border-t border-slate-600">
      <div className="pt-5 pb-2 flex justify-center items-center gap-12 flex-col">
        <ul className="list-none flex justify-center items-center gap-6 md:gap-14 mt-5">
          <li className="text-white transition-all duration-200  hover:text-blueSky">
            <a href="#" className="font-serif text-xl md:text-2xl">
              GitHub
            </a>
          </li>
          <li className="text-white transition-all duration-200 hover:text-blueSky">
            <a href="#" className="font-serif text-xl  md:text-2xl">
              LinkedIn
            </a>
          </li>
          <li className="text-white transition-all duration-200 hover:text-blueSky">
            <a href="#" className="font-serif text-xl md:text-2xl">
              Twitter
            </a>
          </li>
        </ul>
        <div>
          <p className="text-white font-roboto font-thin inline">Made by</p>

          <Fade bottom cascade>
            <span className="text-white font-roboto pl-1">Monir</span>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default Footer;
