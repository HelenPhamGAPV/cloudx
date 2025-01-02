import * as React from "react";
// import Image from 'next/image';
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Introduction = ({ intro, className }) => {
  return (
    <section className={className ? className : "realtive w-full md:h-[550px] max-h-[800px]"}>
      {intro ? (
        <>
          <div className="absolute inset-0 w-full h-full">
            <img
              src={intro.img}
              className="w-full object-cover md:h-[550px] max-h-[800px]"
            />
            <div class="absolute inset-0 h-[550px] w-full rotate-[-180deg] bg-hero-pattern-mobile-diag from-[#A1B3B3] to-[#303C42] mix-blend-multiply"></div>
          </div>
          <div className="mx-auto w-full h-full pt-20 sm:pb-24 lg:px-20 md:px-10 px-6 flex justify-between items-center">
            <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1 text-white">
              <div className="col-span-8 flex flex-col justify-center">
                <Fade
                  direction={"up"}
                  delay={400}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <h1 className="text-4xl lg:text-5xl font-semibold mb-5 text-lightgrey md:4px lg:text-start text-center">
                    {intro.title}
                  </h1>
                </Fade>
                <Fade
                  direction={"up"}
                  delay={800}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <p className="text-white font-montserrat tracking-tight text-3xl md:text-4xl leading-8 md:leading-normal mt-7 max-w-2xl">
                    {intro.desc}
                  </p>
                </Fade>
              </div>

              {/* <div className="col-span-8 flex justify-center relative">
            <img src={banner} alt="logo" width={1000} height={600} />
          </div> */}
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </section>
  );
};

export default Introduction;
