import Header from "../components/Header";
import Footer from "../components/Footer";
import financeImg from "../assets/finance.jpeg";

function Finance() {
  return (
    <>
      <Header />
      <div className='section'>
        <div className='services' style={{ marginTop: "2rem" }}>
          <div className='d-service m-service'>
            <img src={financeImg} alt='Finance Vector art' />
            <div className='service_info'>
              <p className='service_info_title text-md text-hglt'>
                Finance Services
              </p>
              <p className='service_info_desc text-sm'>Business Growth Loan</p>
              <p className='text-xsm'>
                We provide BGL to help your business start and grow in the
                market with minimum interest rate. We welcome all the
                startups/growing businesses to connect with us and begin your
                wonderful journey.
              </p>
              <p className='service_info_desc text-sm'>Emergency Loan</p>
              <p className='text-xsm'>
                We give emergency loans for people experiencing shortterm
                financial emergencies.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Finance;
