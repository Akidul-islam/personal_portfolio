import React from "react";

const CategoryButton = ({ button, filterCategory, buttonClassChange, valueClass }) => {
  return (
    <div className="flex gap-4 justify-center lg:gap-0 flex-wrap">
      {button.map((btn, index) => {
        return (
          <div className="overflow-hidden">
            <button
              type="button"
              className={`cursor-pointer text-[18px] uppercase rounded-sm border-[1px] border-transparent  outline-none bg-transparent hover:bg-green-500 hover:shadow-hoverNeon hover:border-white text-show text-white font-bold w-[10rem] py-2 font-serif  duration-300 ease-in-out shadow-neon ${valueClass === index && "shadow-hoverNeon bg-green-500 border-white"
                }`}
              key={index}
              onClick={() => (
                filterCategory(btn), buttonClassChange(index)
              )}
            >
              {btn}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryButton;
