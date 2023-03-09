import CardComponet from "../../shareComponet/CardComponet"
import Title from "../../Title"
import { featuresInfo } from "../../Data"

export default function ServiceFeatures() {
    return <section id="service"
        className="bg-typo  bg-gradient-to-t from-green-100/80 to-green-50  overflow-hidden py-2 pb-10 px-2 lg:px-0">
        <div className="container mx-auto flex flex-col gap-y-8">
            <h1 className="font-cursive text-center text-darkGray text-lg xl:text-[3rem] font-medium">Features Service</h1>
            <div className="grid place-items-center gap-y-4 sm:grid-cols-2 sm:gap-x-2 lg:grid-cols-3 md:gap-x-4 lg:gap-x-8">
                {
                    featuresInfo.map(item => <CardComponet key={item.id}  {...item} />)
                }
            </div>
        </div>
    </section>
}