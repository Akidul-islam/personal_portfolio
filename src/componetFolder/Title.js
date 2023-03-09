import React from "react";

function Title({ t1, t2, t1Color, t2Color }) {
  const psudeo =
    "before:absolute before:content-[''] before:bottom-1 xl:before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2  before:border-0 before:h-0.01 before:border-b-[0.14rem] before:border-borderColor before:border-solid before:animate-barBorder before:shadow-hoverNeon before:z-0";

  const h2Style = `relative inline-block text-${t2Color} text-xl xl:text-[3rem] font-bold pb-4`;
  return (
    <div className="text-center font-poppins">
      <h2 className={`${h2Style} text-show ${psudeo}`}>
        {t1} <span className={t1Color}>{t2}</span>
      </h2>
    </div>
  );
}

export default Title;
