import footerLinks from "../data/footer_links";
import Foot from "./Foot";

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer'>
        {footerLinks.map((link) => (
          <Foot key={link.id} link={link} />
        ))}
      </div>
      <div className='social-links'>
        <div className='icons'>
          <img
            src={process.env.PUBLIC_URL + "/assets/facebook.svg"}
            alt='facebook logo'
          />
        </div>
        <div className='icons'>
          <img
            src={process.env.PUBLIC_URL + "/assets/instagram.svg"}
            alt='instagram logo'
          />
        </div>
        <div className='icons'>
          <img
            src={process.env.PUBLIC_URL + "/assets/twitter.svg"}
            alt='twitter logo'
          />
        </div>
      </div>
      <p className='footer-text'>
        &copy;{" "}
        <span className='text-highlight'>
          Bhupswati Network Private Limited
        </span>
        . All rights reserved
      </p>
    </div>
  );
}

export default Footer;
