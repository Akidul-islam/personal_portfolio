import React, { useEffect, useState, useRef } from 'react'
import './skillBar.css'
import { styleWidth } from '../Data'

const Demo = ({ title, width }) => {

  const intervalId = useRef()
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count >= width) clearInterval(intervalId.current)
  }, [count]);

  useEffect(() => {
    intervalId.current = setInterval(() => { setCount((prev) => prev + 1) }, 30);
    return () => {
      clearInterval(intervalId.current);
    }
  }, []);
  return (
    <div className="">
      <h3>{title}</h3>
      <article className='skills__bar'>
        <div style={styleWidth(count)}
          className="inner__bar">
          <span>{`${count}%`}</span>
        </div>
      </article>
    </div>
  )
}

export default Demo;