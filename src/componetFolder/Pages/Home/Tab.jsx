import React from "react";
import AccordionComponent from "../../shareComponet/Accordion";
import { Typography } from "@material-tailwind/react";
import SkillBar from "../../BarComponent/SkillBar";
const barComponent = [
  //this my array width
  { id: 1, title: "Frontend", width: 40 },
  { id: 2, title: "UI/UX", width: 70 },
  { id: 3, title: "WEB DESIGN", width: 60 },
  { id: 4, title: "GRAPHICE", width: 80 },
  { id: 5, title: "VIDEO EDITING", width: 70 },
];
const Tab = ({ tab }) => {
  return (
    <div className="relative mt-8">
      {/* accordion Componet */}
      <article
        className={
          tab === "Hire"
            ? " block duration-700 ease-in opacity-100"
            : "hidden opacity-0"
        }
      >
        <AccordionComponent />
      </article>

      <article
        className={
          tab === "Client"
            ? "block opacity-100 duration-500 ease-in"
            : "opacity-0 hidden"
        }
      >
        <Typography className="font-poppins font-semibold text-darkGray/80 text-lg">Our Happy Client</Typography>
        <Typography className="text-darkGray font-poppins text-md pt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          praesentium molestiae sint amet optio, quasi excepturi fugiat veniam
          architecto reprehenderit?
        </Typography>
      </article>

      <article
        className={
          tab === 'Skills'
            ? "block opacity-100 duration-700  ease-in"
            : "opacity-0 hidden"
        }
      >
        <div className="skills__text">
          <Typography className="font-poppins font-semibold text-darkGray/80 text-lg">My Technology</Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            praesentium molestiae sint amet optio, quasi excepturi fugiat veniam
            architecto reprehenderit?
          </Typography>
        </div>
        <div className="flex flex-col gap-3 mt-4">
          <SkillBar data={barComponent} limit={40} />
        </div>
      </article>
    </div>
  );
};

export default Tab;
