import { Fragment, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
const accrodionData = [
    {
        id: 1,
        label: 'What is Material Tailwind ??',
        desc: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem expedita veritatis enim minus molestiae impedit nobis at nesciunt voluptas doloribus!'
    },
    {
        id: 2,
        label: 'how to use Material Tailwind ??',
        desc: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem expedita veritatis enim minus molestiae impedit nobis at nesciunt voluptas doloribus!'
    },
    {
        id: 3,
        label: 'previously use it Material Tailwind ??',
        desc: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem expedita veritatis enim minus molestiae impedit nobis at nesciunt voluptas doloribus!'
    }
]

function Icon({ id, open }) {
    return <span className='px-2 py-1 text-sm border-solid border-0.14 bg-none cursor-pointer rounded-md shadow-darkGray outline-none'>
        <FontAwesomeIcon icon={id === open ? faMinus : faPlus} className={`${id === open ? "rotate-180" : ""
            } text-bgColor opacity-90 transition-transform`} />
    </span>

}

export default function AccordionComponent() {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <Fragment>
            {
                accrodionData.map(({ id, label, desc }) => {
                    return (
                        <Accordion open={open === id} key={id} icon={<Icon id={id} open={open} />}>
                            <AccordionHeader className="bg-transparent border-none text-md text-darkGray/80 py-2 font-poppins" onClick={() => handleOpen(id)}>
                                {label}
                            </AccordionHeader>
                            <AccordionBody className="py-2">
                                {desc}
                            </AccordionBody>
                        </Accordion>
                    )
                })
            }
        </Fragment>
    );
}