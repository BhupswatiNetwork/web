import Header from "../components/Header";
import Footer from "../components/Footer";
import outSourcingImg from "../assets/outSouring.png";

function OutSourcing() {
  return (
    <>
      <Header />
      <div className='section'>
        <div className='services' style={{ marginTop: "2rem" }}>
          <div className='d-service m-service'>
            <img src={outSourcingImg} alt='out sourcing Vector art' />
            <div className='service_info'>
              <p className='service_info_title text-md text-hglt'>
                Outsourcing Services
              </p>
              <p className='service_info_desc text-sm'>
                We deal in multiple streams like KPO that includes data entry
                projects and BPO i.e call center services projects. Also provide
                voice and on-voice projects.We make us diffrent by handling bulk
                projects with consistent accuracy and time duration.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default OutSourcing;
