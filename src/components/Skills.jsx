import React from "react";
import Fade from "react-reveal/Fade";

function Skills() {
  return (
    <section
      id="skills"
      className="w-full flex justify-center items-center bg-gradient-to-tr from-black to-slate-900 pt-16 pb-10"
    >
      <div
        className="w-11/12 md:w-7/12 flex justify-around
       items-start flex-col md:flex-row"
      >
        <div className="w-full text-center mr-10 md:w-auto mb-16">
          <Fade bottom cascade>
            <h2 className="text-white text-3xl inline font-roboto border-b-2 border-blueSky">
              Skills
            </h2>
          </Fade>
        </div>
        <div className="flex-1 w-full flex justify-start items-start flex-col pr-2 pl-2 md:pr-10 md:pl-10">
          <h1 className="text-base font-roboto text-slate-400">
            My programming languages proficiency
          </h1>
          <div className="w-full pt-10">
            <div className="pb-8">
              <Fade bottom cascade>
                <span className="text-white font-kalam text-2xl">HTML</span>
              </Fade>
              <div className="w-full overflow-hidden h-10 bg-slate-800 rounded-sm relative before:absolute before:top-0 before:bottom-0 before:left-0 before:h-full before:w-11/12 before:bg-blueSky"></div>
            </div>

            <div className="pb-10">
              <Fade bottom cascade>
                <span className="text-white font-kalam text-2xl">CSS</span>
              </Fade>
              <div className="w-full overflow-hidden h-10 bg-slate-800 rounded-sm relative before:absolute before:top-0 before:bottom-0 before:left-0 before:h-full before:w-11/12 before:bg-blueSky"></div>
            </div>

            <div className="pb-10">
              <Fade bottom cascade>
                <span className="text-white font-kalam text-2xl">JavaScript</span>
              </Fade>
              <div className="w-full overflow-hidden h-10 bg-slate-800 rounded-sm relative before:absolute before:top-0 before:bottom-0 before:left-0 before:h-full before:w-10/12 before:bg-blueSky"></div>
            </div>

            <div className="pb-10">
              <Fade bottom cascade>
                <span className="text-white font-kalam text-2xl">ReactJS</span>
              </Fade>
              <div className="w-full overflow-hidden h-10 bg-slate-800 rounded-sm relative before:absolute before:top-0 before:bottom-0 before:left-0 before:h-full before:w-9/12 before:bg-blueSky"></div>
            </div>

            <div className="pb-10">
              <Fade bottom cascade>
                <span className="text-white font-kalam text-2xl">NextJS</span>
              </Fade>
              <div className="w-full overflow-hidden h-10 bg-slate-800 rounded-sm relative before:absolute before:top-0 before:bottom-0 before:left-0 before:h-full before:w-9/12 before:bg-blueSky"></div>
            </div>

            <div className="pb-10">
              <Fade bottom cascade>
                <span className="text-white font-kalam text-2xl">SQL</span>
              </Fade>
              <div className="w-full overflow-hidden h-10 bg-slate-800 rounded-sm relative before:absolute before:top-0 before:bottom-0 before:left-0 before:h-full before:w-11/12 before:bg-blueSky"></div>
            </div>

            <div className="pb-10">
              <Fade bottom cascade>
                <span className="text-white font-kalam text-2xl">Git&GitHub</span>
              </Fade>
              <div className="w-full overflow-hidden h-10 bg-slate-800 rounded-sm relative before:absolute before:top-0 before:bottom-0 before:left-0 before:h-full before:w-11/12 before:bg-blueSky"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
