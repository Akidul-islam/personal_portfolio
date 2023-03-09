import React, { useState } from "react";
import CategoryButton from "./CategoryButton";
import ProjectList from "./ProjectList";
import { data } from "../../Data";

const categoryBtn = ["all", ...new Set(data.map((item) => item.category))];
const Project = ({ Title }) => {
  const [menuItem, setMenuItem] = useState(data);
  const [buttons, setButtons] = useState(categoryBtn);
  const [valueClass, setValueClass] = useState(0);

  //   fiterfunction
  const filterCategory = (category) => {
    if (category === "all") {
      setMenuItem(data);
      return;
    }
    const getCategory = data.filter((item) => item.category === category);
    setMenuItem(getCategory);
  };

  const buttonClassChange = (index) => {
    setValueClass(index);
  };

  return (
    <section className="py-8 bg-typo " id="project">
      <div className="container mx-auto">
        <Title
          t1={"MY"}
          t2={"Project"}
          t1Color="text-white"
          t2Color="logoColor"
        />
        <div className="grid gap-10 mt-4">
          <CategoryButton
            filterCategory={filterCategory}
            button={buttons}
            valueClass={valueClass}
            buttonClassChange={buttonClassChange}
          />
          <ProjectList menuItem={menuItem} />
        </div>
      </div>
    </section>
  );
};
export default Project;

// MENU COMPONENT

