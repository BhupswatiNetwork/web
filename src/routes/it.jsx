import Header from "../components/Header";
import Footer from "../components/Footer";
import itImg from "../assets/it-services.jpeg";

function It() {
  return (
    <>
      <Header />
      <div className='section'>
        <div className='services' style={{ marginTop: "2rem" }}>
          <div className='d-service m-service'>
            <img src={itImg} alt='IT Vector art' />
            <div className='service_info'>
              <p className='service_info_title text-md text-hglt'>
                IT Services
              </p>
              <p className='service_info_desc text-sm'>Web Development</p>
              <p className='text-xsm'>
                We hate poor designs, & hence we are first following our passion
                then doing a business. We execute brilliant design ideas to get
                it all together in one beautiful experience.
              </p>
              <p className='service_info_desc text-sm'>App Development</p>
              <p className='text-xsm'>
                We are an experienced agency specializing in developing custom
                mobile apps for Android platforms for businesses of any size.
                Tell us your business idea
              </p>
              <p className='service_info_desc text-sm'>Game Development</p>
              <p className='text-xsm'>
                GAME DEVELOPMENT SERVICES Highly Engaging Game Design and
                Development Company END TO END GAME DESIGN, DEVELOPMENT,
                DEPLOYMENT.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default It;
