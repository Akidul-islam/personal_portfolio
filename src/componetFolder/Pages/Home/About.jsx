import React, { useState } from 'react'
import Tab from './Tab'
import Title from '../../Title'
const tabList = [
  {
    label: 'Hire',
    tab_active: true,
  },
  {
    label: 'Client',
    tab_active: false,
  },
  {
    label: 'Skills',
    tab_active: false,
  },
]

const About = () => {
  const [tabData, setTabData] = useState(tabList)
  const [tab, setTab] = useState('Hire')

  const TabHandle = (label) => {
    const update = tabData.map((item) => {
      item.tab_active = false
      if (item.label === label) {
        setTab(item.label)
        return { ...item, tab_active: true }
      } else return item
    })
    setTabData(update)
  }

  return (
    <section
      className="relative bg-typo  overflow-hidden py-8 px-4 lg:px-2"
      id="about"
    >
      <div className="container mx-auto">
        {/* component calling */}
        <Title
          t1={'ABOUT'}
          t2={'ME'}
          t1Color={'text-logoColor'}
          t2Color={'typo'}
        />

        <article className="relative flex justify-center flex-col md:flex-row mt-8">
          <div className="flex-1">
            <div className="flex gap-4 justify-center flex-wrap lg:gap-0">
              {tabData.map(({ label, tab_active }) => {
                const buttonCss = `cursor-pointer text-md uppercase rounded-tl-[2rem] rounded-br-[2rem] border-0 border-l-2 border-white outline-none hover:bg-green-500 shadow-neon hover:shadow-hoverNeon hover:border-white text-show text-white font-bold w-[10rem] py-2 font-serif duration-300 ease-in-out ${
                  tab_active
                    ? 'shadow-hoverNeon bg-black border-white'
                    : 'border-green-500 bg-transparent'
                }`

                return (
                  <button
                    key={label}
                    className={`${buttonCss}`}
                    onClick={() => TabHandle(label)}
                  >
                    {label}
                  </button>
                )
              })}
            </div>

            {/* tab */}
            <Tab tab={tab} />
          </div>
          <div className="md:flex-1 md:w-auto">
            <div>
              <img src="/img__item/about.png" alt="vector__png" />
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default About
