function Service({ service }) {
  return (
    <div className='service-home'>
      <div className='service-home_card'>
        <div className='service-home_card_img'>
          <img
            src={process.env.PUBLIC_URL + `/assets/${service.img}`}
            alt={service.title}
          />
        </div>
        <div className='service-home_card_info'>
          <h2>{service.title}</h2>
          <p className='desc'>{service.desc}</p>
          <button className='btn service-home-btn primary-btn'>
            Know More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Service;
