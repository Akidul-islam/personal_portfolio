import React from "react";

const ProjectList = ({ menuItem }) => {
    return (
        <article className="flex flex-wrap gap-4 justify-center">
            {menuItem.map((item) => {
                return (
                    <div
                        key={item.id}
                        className={`relative cursor-pointer overflow-hidden rounded-sm shadow-lg w-[18.5rem] before:absolute before:content-[''] before:left-0 before:bottom-0 before:w-[70%] before:rounded-tr-full before:h-[0rem] before:duration-500 ease-linear hover:before:w-[0] hover:before:h-[0] before:shadow-hoverNeon group`}
                    >
                        <img alt={item.title} src={item.img} />
                        <div className=" absolute top-0 left-0 bg-slate-900/50 w-full h-full scale-0 grid place-items-center  before:absolute before:content-[''] before:right-0 before:top-0 before:w-0 before:rounded-bl-[0] before:h-[0] before:shadow-hoverNeon before:duration-500 ease-linear hover:before:w-[90%] hover:before:h-[84%] before:z-[-1] group-hover:scale-100">
                            <div className="">
                                <h3 className="text-white text-md font-semibold capitalize font-sans">
                                    {item.title}
                                </h3>
                                <span
                                    className={`absolute bottom-4 left-4 cursor-pointer rounded-sm border-[1px] border-transparent  outline-none bg-transparent hover:bg-green-500 hover:border-white text-show text-white font-bold px-3 py-1 font-serif text-base shadow-neon duration-300 ease-in-out hover:shadow-hoverNeon`}
                                >
                                    Demo
                                </span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </article>
    );
};

export default ProjectList;