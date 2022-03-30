import Header from "../components/Header";
import Fade from "react-reveal/Fade";
import services from "../data/services";

function Services() {
  return (
    <>
      <Header />
      <div className='section'>
        <div className='services'>
          {services.map((service) => (
            <div
              key={service.id}
              className={`service ${service.id % 2 === 0 ? "right" : "left"}`}
            >
              <Fade left={service.id % 2 === 1} right={service.id % 2 === 0}>
                <img src={`../assets/${service.img}`} alt={service.title} />
              </Fade>
              <Fade left={service.id % 2 === 0} right={service.id % 2 === 1}>
                <div className='service_info'>
                  <p className='service_info_title text-md text-hglt'>
                    {service.title}
                  </p>
                  <p className='service_info_desc text-sm'>
                    {service.desc.map((service_name, index) => (
                      <div key={index}>
                        <p className='text-sm'>{service_name.name}</p>
                        <p className='text-xsm'>{service_name.text}</p>
                      </div>
                    ))}
                  </p>
                </div>
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;
