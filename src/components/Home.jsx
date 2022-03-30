import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import slider1 from "../assets/slide1.png";
import slider2 from "../assets/slide2.jpeg";

function Home() {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1500} style={{ position: "relative" }}>
          <img className='d-block w-100' src={slider1} alt='Slider One' />
          <button className='btn app-btn primary-btn'>Know More</button>
        </Carousel.Item>
        <Carousel.Item interval={1000} style={{ position: "relative" }}>
          <img className='d-block w-100' src={slider2} alt='Slider Two' />
          <button className='btn app-btn primary-btn'>Know More</button>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Home;
