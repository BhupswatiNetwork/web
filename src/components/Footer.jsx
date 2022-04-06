import fb from "../assets/facebook.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import whatsapp from "../assets/whatsapp.svg";

function Footer() {
  return (
    <>
      <a
        style={{
          position: "fixed",
          right: "20px",
          bottom: "20px",
          zIndex: "15",
          fontWeight: "600",
          fontSize: "1.2rem",
          backgroundColor: "#25D366",
        }}
        className='btn whatsapp'
        href='https://api.whatsapp.com/send?phone=+919540318192'
        target='_blank'
        rel='noreferrer'
      >
        <span>
          <img className='icon' src={whatsapp} alt='whatsapp icon' />
        </span>
      </a>
      <div className='footer-container'>
        <p className='text-xsm'>helpdesk@bhupswatinetwork.in</p>
        <p className='footer-text' style={{ marginTop: "1rem" }}>
          &copy;{" "}
          <span className='text-hglt'>Bhupswati Network Private Limited</span>.
          <p style={{ textAlign: "center" }}>All rights reserved</p>
        </p>
        <div className='social-links'>
          <div className='icons'>
            <a
              href='https://www.facebook.com/BhupswatiNetwork/?msclkid=487b484cafe611ecafaa2da6fa67cfb1'
              target='_blank'
              rel='noreferrer'
            >
              <img src={fb} alt='facebook logo' />
            </a>
          </div>
          <div className='icons'>
            <a
              href='https://in.linkedin.com/in/bhupswati-network-private-limited-366592223?msclkid=f5648b8dafe611ecb71727bfc4756de3'
              target='_blank'
              rel='noreferrer'
            >
              <img src={linkedin} alt='instagram logo' />
            </a>
          </div>
          <div className='icons'>
            <img src={twitter} alt='twitter logo' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
