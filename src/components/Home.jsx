import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import slider1 from "../assets/slide1.png";
import slider2 from "../assets/slide2.jpeg";
import slider3 from "../assets/slide3.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1500} style={{ position: "relative" }}>
          <img className='d-block w-100' src={slider1} alt='Slider One' />
          <Link to='/services'>
            <button className='btn app-btn primary-btn'>Know More</button>
          </Link>
        </Carousel.Item>
        <Carousel.Item interval={1000} style={{ position: "relative" }}>
          <img className='d-block w-100' src={slider2} alt='Slider Two' />
          <Link to='/services'>
            <button className='btn app-btn primary-btn'>Know More</button>
          </Link>
        </Carousel.Item>
        <Carousel.Item interval={1000} style={{ position: "relative" }}>
          <img className='d-block w-100' src={slider2} alt='Slider Two' />
          <Link to='/services'>
            <button className='btn app-btn primary-btn'>Know More</button>
          </Link>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Home;
