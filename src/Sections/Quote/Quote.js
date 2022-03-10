import React from "react";
import childPicture from "../../Assets/child.png";

const Quote = () => {
  return (
    <>
      <section className="relative md:py-32 w-full">
        <h1 className="text-center text-gray-900 pt-20">Childhood</h1>
        <div className="container h-full mx-auto text-center font-text ">
          <p className="md:w-3/5 w-96 px-5 mx-auto md:text-2xl text-xl mt-10 text-orange-600 shadow-lg rounded-lg py-7 backdrop-blur-2xl bg-white/10">
            Children must think be taught how to think not what to think. <br /> - Megaret Mead
          </p>
          <img src={childPicture} className="w-[30rem] pt-12 relative md:left-[3rem] mx-auto" alt="" />
          <span className="h-1 bg-gray-900 block w-full"></span>
        </div>
      </section>
    </>
  );
};

export default Quote;
