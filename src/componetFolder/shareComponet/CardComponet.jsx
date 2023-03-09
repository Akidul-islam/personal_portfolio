import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function CardComponet({ label, hover, desc, id, Icon }) {
    return (
        <Card key={id} className="max-w-96 border-solid border-[1px] border-green-500/20 p-4">
            <CardBody className="text-center">
                <h1 className=""><FontAwesomeIcon className="text-green-500  font-poppins text-[3rem]" icon={Icon} /></h1>
                <Typography variant="h5" className="mb-2 text-darkGray font-poppins">
                    {label}
                </Typography>
                <Typography className="font-poppins font-medium text-justify">
                    {desc}
                </Typography>
            </CardBody>
        </Card>
    );
}