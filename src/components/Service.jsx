import { Link } from "react-router-dom";

function Service({ service }) {
  return (
    <div className='service-home'>
      <div className='service-home_card'>
        <div className='service-home_card_img'>
          <img src={`../assets/${service.img}`} alt={service.title} />
        </div>
        <div className='service-home_card_info'>
          <h2>{service.title}</h2>
          <p className='desc'>{service.desc}</p>
          <Link to={service.link}>
            <button className='btn service-home-btn primary-btn'>
              Know More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Service;
