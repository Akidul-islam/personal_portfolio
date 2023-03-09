import React from "react";
import { service } from "../../Data";
import Title from "../../Title";

const Service = () => {
  return (
    <section
      className="pt-6 min-h-[80vh] relative before:backdrop:blur-lg before:bg-rgb before:blur-[2px] before:brightness-110 before:saturate-110 overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-full lg:before:w-1/2  before:h-full"
    >
      <Title t1={"Price Plan"} t2Color="logoColor" t1Color={"typo"} />
      <div className="container mx-auto py-10 flex flex-wrap justify-center gap-4">
        {service.map((item) => {
          return (
            <article
              className="w-full overflow-hidden sm:w-[300px] p-4 rounded-md shadow-md relative z-[1] before:absolute before:content-[''] before:z-[-1] before:rounded-md before: border-te before:top-0 before:left-0  before:w-full before:h-full before:bg-gradient-to-tr before:from-teal-600 before:blur-[50px] before:contrast-[200]  before:to-fuchsia-400"
              key={item.id}
            >
              <h2 className="text-slate-800 text-center text-xl">
                {item.title} /{" "}
                <span className="text-white text-show">{item.price}$</span>
              </h2>
              <div className="mt-4 text-slate-900/80 font-sans sm:text-base text-show ">
                <h4 className="">{item.p1}</h4>
                <h4>{item.p2}</h4>
                <h4>{item.p3}</h4>
                <h4>{item.p4}</h4>
                <h4>{item.p5}</h4>
                <h4>{item.p6}</h4>
              </div>
            </article>
          );
        })}
      </div>
      <div className="absolute bottom-0 animate-ping sm:before:animate-rgbChg bg-rgb translate-x-20 translate-y-20  w-[20rem] h-[20rem] right-0 rounded-full before:content-[''] overflow-hidden before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-tr before:from-fuchsia-600  before:to-teal-400 before:bg-red-400 backdrop:blur-3xl before:blur-[60px] before:brightness-110 before:saturate-150"></div>
    </section>
  );
};

export default Service;
