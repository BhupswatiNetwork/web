import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1500} style={{ position: "relative" }}>
          <img
            className='d-block w-100'
            src={process.env.PUBLIC_URL + "/assets/slide1.png"}
            alt='Slider One'
          />
          <button className='btn app-btn primary-btn'>Know More</button>
        </Carousel.Item>
        <Carousel.Item interval={1000} style={{ position: "relative" }}>
          <img
            className='d-block w-100'
            src={process.env.PUBLIC_URL + "/assets/slide2.jpeg"}
            alt='Slider Two'
          />
          <button className='btn app-btn primary-btn'>Know More</button>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Home;
