import Header from "../components/Header";
import Footer from "../components/Footer";

function B2b() {
  return (
    <>
      <Header />
      <div className='section'>
        <div className='services' style={{ marginTop: "4rem" }}>
          <div
            className='service'
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={process.env.PUBLIC_URL + `/assets/about.png`}
              alt='B2B Vector art'
            />
            <div className='service_info'>
              <p className='service_info_title text-md text-hglt'>B2B</p>
              <p className='service_info_desc text-sm'>
                We help buisnesses in growing and connecting with their
                potential customers by generating leads for their buisness as
                per requirments.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default B2b;
