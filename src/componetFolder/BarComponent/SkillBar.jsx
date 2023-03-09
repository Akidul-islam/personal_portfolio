import { Typography } from '@material-tailwind/react'
import React, { useEffect, useState, useRef } from 'react'
import './skillBar.css'

const SkillBar = ({ skill }) => {
  const [counter, setCounter] = useState(0)
  const intervalRef = useRef()

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCounter((num) => {
        if (num === skill.width) {
          clearInterval(intervalRef.current)
          return num
        }

        return num + 1
      })
    }, 25)
    return () => clearInterval(intervalRef.current)
  }, [])

  return (
    <div key={skill.id} className="w-[70%]">
      <div className="flex justify-between mb-1">
        <Typography className="font-poppins font-semibold text-darkGray/80 text-base">
          {skill.title}
        </Typography>
        <span className="text-base font-bold font-poppins text-darkGray">
          {counter}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-green-500 h-2.5 font-poppins font-bold rounded-full"
          style={{ width: `${counter}%` }}
        ></div>
      </div>
    </div>
  )
}

export default SkillBar
