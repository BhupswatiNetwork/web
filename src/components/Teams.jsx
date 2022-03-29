import members from "../data/teams";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Team from "./Team";
import Fade from "react-reveal";

const Teams = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 490 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 490, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <Fade center>
      <div className='team'>
        <h1 className='text-lg'>
          Our <span className='bb'>Team</span>{" "}
        </h1>
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          keyBoardControl={true}
          customTransition='all .25'
          transitionDuration={250}
          containerClass='carousel-container'
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass='custom-dot-list-style'
          itemClass='carousel-item-padding-40-px'
        >
          {members.map((member) => (
            <Team key={member.id} member={member} />
          ))}
        </Carousel>
      </div>
    </Fade>
  );
};

export default Teams;
