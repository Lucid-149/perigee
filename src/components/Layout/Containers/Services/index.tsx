
import AppInfo from "../../../../data/content/info";
import ServiceCard from "./utils/Card";

const Services = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full pt-10">
            <h2 className="text-4xl font-bold text-center text-gray-800">
                Our Services
            </h2>
            <p>
            We offer full support on all our Services 
            </p>
            
            <div className=" flex  items-center justify-center w-full glass p-2 place-content-center place-items-center  gap-1 h-[80vh] mt-6 overflow-auto">
                {AppInfo.Services.map((card) => (
                    <ServiceCard
                        title={card.title}
                        description={card.description}
                        image={card.image}
                        link={card.Link.url}
                    />
                ))}
            </div>
        </div>
    );
};

export default Services;