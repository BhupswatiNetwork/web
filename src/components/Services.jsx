import services from "../data/service_home";
import Service from "./Service";
import Zoom from "react-reveal/Zoom";

function Services() {
  return (
    <div className='services-home'>
      <h1 className='text-lg'>
        Our <span className='bb'>Services</span>
      </h1>
      <Zoom center>
        <div className='services-home_grid'>
          {services.map((service) => (
            <Service key={service.id} service={service} />
          ))}
        </div>
      </Zoom>
    </div>
  );
}

export default Services;
