import React from "react";
import childPicture from "../../Assets/child.png";

const Quote = () => {
    return (
        <>
            <section className="relative w-full md:py-32">
                <h1 className="pt-20 text-center text-gray-900">Childhood</h1>
                <div className="container h-full mx-auto text-center font-text ">
                    <p className="px-5 mx-auto mt-10 text-xl text-orange-600 rounded-lg shadow-lg md:w-3/5 w-96 md:text-2xl py-7 backdrop-blur-2xl bg-white/10">
                        Children must think be taught how to think not what to think. <br /> - Margaret Mead
                    </p>
                    <img src={childPicture} className="w-[30rem] pt-12 relative md:left-[3rem] mx-auto" alt="" />
                    <span className="block w-full h-1 bg-gray-900"></span>
                </div>
            </section>
        </>
    );
};

export default Quote;
