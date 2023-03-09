import { Typography } from '@material-tailwind/react';
import React, { useEffect, useState, useRef } from 'react';
import './skillBar.css';
const barComponent = [
  //this my array width
  { id: 1, title: "Frontend", width: 40 },
  { id: 2, title: "UI/UX", width: 70 },
  { id: 3, title: "WEB DESIGN", width: 60 },
  { id: 4, title: "GRAPHICE", width: 80 },
  { id: 5, title: "VIDEO EDITING", width: 70 },
];
const SkillBar = () => {
  const [skillData, setSkillData] = useState(barComponent);
  const [counter, setCounter] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  // MY ARRAY
  const time = 200
  useEffect(() => {
    const id = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, time);
    setIntervalId(id);

    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    skillData.some((item) => {
      if (item.width === counter) {
        clearInterval(intervalId);
        setIntervalId(null);
      }
    });

  }, [counter, skillData]);
  return (
    skillData.map(bar => {
      return <div key={bar.id} className="w-[70%]">
        <div className="flex justify-between mb-1">
          <Typography className="font-poppins font-semibold text-darkGray/80 text-base">{bar.title}</Typography>
          <span className="text-base font-bold font-poppins text-darkGray">{counter}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div className="bg-green-500 h-2.5 font-poppins font-bold rounded-full" style={{ width: `${bar.width}%` }}></div>
        </div>
      </div>

    })
  )
}

export default SkillBar;
