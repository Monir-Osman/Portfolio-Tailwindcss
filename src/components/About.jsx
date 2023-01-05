import React from "react";
import Fade from "react-reveal/Fade";

function About() {
  return (
    <section
      id="about"
      className="w-full flex justify-center items-center bg-gradient-to-br from-black to-slate-900 h-screen relative"
    >
      <div className="w-11/12 md:w-8/12 flex gap-20 flex-col">
        <div className="">
          <Fade bottom cascade>
            <h1 className="text-white uppercase font-medium text-4xl md:text-5xl mb-6">about me</h1>
          </Fade>
          <p className="text-white font-roboto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
        <div>
          <Fade bottom cascade>
            <h2 className="text-white text-3xl font-medium mb-5">Contact Details</h2>
          </Fade>
          <p className="text-white pb-1 font-roboto font-thin">Phone Number:</p>
          <p className="text-white pb-1 font-roboto font-thin">Email:</p>
          <p className="text-white pb-1 font-roboto font-thin">Address</p>
        </div>
      </div>
    </section>
  );
}

export default About;
