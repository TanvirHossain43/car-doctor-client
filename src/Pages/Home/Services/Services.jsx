import { useEffect, useState } from "react";
import ServiceCart from "./ServiceCart";


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="mt-4">
            <div className="text-center ">
                <h3 className="text-3xl text-orange-600">Our services</h3>
                <h3 className="text-5xl">Our service Area</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sunt <br /> ipsum atque vero incidunt laudantium minus corrupti aliquam, pariatur error!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    services.map(service => <ServiceCart key={service._id} service={service}></ServiceCart>)
                }
            </div>
        </div>
    );
};

export default Services;