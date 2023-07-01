import React from "react";
import Fade from "react-reveal/Fade";

function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-gradient-to-br from-black to-slate-900 flex justify-center items-center pt-10 pb-10"
    >
      <div className="w-11/12 md:w-8/12 flex justify-center items-center flex-col pt-20 pb-14">
        <Fade bottom cascade>
          <h1 className="text-slate-400 font-bold font-roboto text-5xl pb-8">I can help.</h1>
        </Fade>

        <p className="text-slate-400  text-base font-roboto text-center max-w-xl">
          If you have a project that you want to get start, need my help with something or just
          fancy saying hey, then get in touch.
        </p>
        <a
          href="mailto:abcdefgh@gmail.com"
          className="text-white bg-blueSky mt-10 pt-2 pb-2 pr-8 pl-8 rounded-sm hover:opacity-80 transition"
        >
          Message me
        </a>
      </div>
    </section>
  );
}

export default Contact;
