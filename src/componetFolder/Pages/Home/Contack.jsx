import React, { useState } from "react";
// libary of tailwind
import { Typography, Tooltip } from '@material-tailwind/react'
// data
import { categories } from "../../Data";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationPin } from "@fortawesome/free-solid-svg-icons"
const contackData = [
  {
    id: 1,
    label: 'Address',
    desc: 'Dhaka, Live In Bangladesh',
    Icon: faLocationPin
  },
  {
    id: 2,
    label: 'Social Media',
    desc: 'Dhaka, Live In Bangladesh',
  },
  {
    id: 1,
    label: 'Address',
    desc: 'Dhaka, Live In Bangladesh'
  }
]

const Contack = () => {
  const [neon, setNeon] = useState(0);
  const initialCls = (index) => {
    setNeon(index);
  };
  return (
    <section
      id="contack"
      className="bg-gradient-to-b from-transparent overflow-hidden p-4 flex flex-col gap-10 "
    >
      <h2 className="text-center text-typo text-xl font-bold font-cursive ">Contack</h2>
      <div className="container mx-auto shadow-lg border-solid border border-white/30 md:flex">
        <div className="flex-1">
          <form className="p-4 pb-6 flex flex-col gap-6 relative order-1 md:order-none">
            <div className="">
              <p className="py-4  text-white font-semibold font-sans">
                I am interesting in....
              </p>
              <div className="flex gap-y-4 gap-x-2 flex-wrap">
                {categories.map((item, index) => {
                  return (
                    <span
                      key={item.category}
                      className={`cursor-pointer rounded-sm border-[1px] border-transparent overflow-hidden outline-none bg-transparent hover:bg-green-500 hover:border-white text-show text-white font-bold px-3 py-1 font-serif text-base shadow-neon duration-300 ease-in-out hover:shadow-hoverNeon ${neon == index &&
                        "border-white bg-green-500 shadow-hoverNeon"
                        }`}
                      onClick={() => initialCls(index)}
                    >
                      {item.category}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="relative mt-4">
              <label
                htmlFor="name"
                className="block absolute z-10 text-white bg-rgb font-sans border-solid border-0 border-l-2 border-r-2 px-2 border-borderColor -translate-y-3 translate-x-4"
              >
                Name
              </label>
              <input
                type="text"
                className="border-0 outline-none w-full py-3 rounded-sm bg-rgb shadow-sm text-color-smokey font-sans"
                name="name"
              />
            </div>
            <div className="relative">
              <label
                htmlFor="Email"
                className="block absolute z-10 text-white bg-rgb font-sans border-solid border-0 border-l-2 border-r-2 px-2 border-borderColor -translate-y-3 cursor-pointer translate-x-4"
                name="email"
              >
                Email
              </label>
              <input
                type="text"
                className="border-0 outline-none w-full py-3 rounded-sm bg-rgb shadow-sm text-color-smokey font-sans"
                name="Email"
              />
            </div>
            <div>
              <label
                htmlFor="describe"
                className=" absolute z-10 text-white bg-rgb font-sans border-solid border-0 border-l-2 border-r-2 px-2 border-borderColor -translate-y-3 cursor-pointer translate-x-4"
              >
                Describation
              </label>
              <textarea
                name="desc"
                className="bg-rgb resize-none border-none focus:border-solid focus:border-teal-400 focus:border-2 focus:outline-none w-full h-[100px]  px-1 py-2 text-color-smokey font-sans rounded shadow-md"
                cols="30"
                rows="10"

              ></textarea>
            </div>
            <div className="flex justify-center">
              <input
                type="submit"
                value="Submit"
                className=" w-[8rem] h-[2rem] text-darkGray text-md  font-bold rounded-tl-full rounded-tr-full border-0 outline-none text-show bg-green-400 hover:bg-green-600 duration-500 hover:text-white cursor-pointer shadow-neon hover:shadow-hoverNeon"
              />
            </div>
          </form>
        </div>

        <article className="flex-1 overflow-hidden">
          <div className="bg-typo h-[76%]">
          </div>
          <article className="bg-green-100 h-full text-center grid grid-cols-2 gap-3">
            <div className="bg-typo bg-gradient-to-tr from-green-100/80 to-green-200 rounded-md shadow-md backdrop-blur-md bg-opacity-100 py-2">
              <Typography variant="h5" className="flex justify-evenly text-darkGray font-poppins">
                Address
                <FontAwesomeIcon className="text-lg" icon={faLocationPin} />
              </Typography>
              <Typography variant='h6' className="font-sans text-darkGray font-medium  mt-2">
                DHAKA, Live In Bangladesh
              </Typography>
            </div>

            <div className="bg-typo bg-gradient-to-tr from-green-100/80 to-green-200 rounded-md shadow-md backdrop-blur-md bg-opacity-100 py-2">
              <Typography variant="h5" className="flex justify-evenly text-darkGray font-poppins">
                Social Media
              </Typography>
              <Typography variant='h6' className="font-sans justify-center text-darkGray flex gap-x-4 font-medium  mt-2">
                <Tooltip content="Facebook" placement="bottom-end">
                  <a href="https://www.facebook.com/akidul.islam.3304">
                    <svg xmlns="http://www.w3.org/2000/svg" width='20' height="20" viewBox="0 0 512 512">
                      <path color="" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>
                  </a>

                </Tooltip>
                <Tooltip content='Instagram' placement="bottom-end" className="p-1 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={'20'} height="20"><path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z" /></svg>

                </Tooltip>
                <Tooltip content={'GitHub'} placement={"bottom-end"}>
                  <a href="https://github.com/Akidul-islam">
                    <svg xmlns="http://www.w3.org/2000/svg" width={'20'} height={"20"} viewBox="0 0 496 512">
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
                  </a>
                </Tooltip>
                <Tooltip placement="bottom-end" content="LinkdIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width={'20'} height={"20"} viewBox="0 0 448 512">
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                </Tooltip>
              </Typography>
            </div>
          </article>
        </article>
      </div>
    </section>
  );
};

export default Contack;
