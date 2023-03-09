import React from 'react'
import AccordionComponent from '../../shareComponet/Accordion'
import { Typography } from '@material-tailwind/react'
import SkillBar from '../../BarComponent/SkillBar'
const barComponent = [
  //this my array width
  { id: 1, title: 'Frontend', width: 40 },
  { id: 2, title: 'UI/UX', width: 70 },
  { id: 3, title: 'WEB DESIGN', width: 60 },
  { id: 4, title: 'GRAPHICE', width: 80 },
  { id: 5, title: 'VIDEO EDITING', width: 70 },
]

const Tab = ({ tab }) => {
  return (
    <div className="relative mt-8">
      {/* accordion Componet */}
      {tab === 'Hire' && (
        <article className={'block duration-700 ease-in opacity-100'}>
          <AccordionComponent />
        </article>
      )}

      {tab === 'Client' && (
        <article className={'block opacity-100 duration-500 ease-in'}>
          <Typography className="font-poppins font-semibold text-darkGray/80 text-lg">
            Our Happy Client
          </Typography>
          <Typography className="text-darkGray font-poppins text-md pt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            praesentium molestiae sint amet optio, quasi excepturi fugiat veniam
            architecto reprehenderit?
          </Typography>
        </article>
      )}

      {tab === 'Skills' && (
        <article className={'block opacity-100 duration-700  ease-in'}>
          <div className="skills__text">
            <Typography className="font-poppins font-semibold text-darkGray/80 text-lg">
              My Technology
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              praesentium molestiae sint amet optio, quasi excepturi fugiat
              veniam architecto reprehenderit?
            </Typography>
          </div>
          <div className="flex flex-col gap-3 mt-4">
            {barComponent.map((bar, i) => (
              <SkillBar skill={bar} key={i} />
            ))}
          </div>
        </article>
      )}
    </div>
  )
}

export default Tab
