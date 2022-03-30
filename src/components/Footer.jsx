import footerLinks from "../data/footer_links";
import Foot from "./Foot";
import fb from "../assets/facebook.svg";
import insta from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";

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
          <img src={fb} alt='facebook logo' />
        </div>
        <div className='icons'>
          <img src={insta} alt='instagram logo' />
        </div>
        <div className='icons'>
          <img src={twitter} alt='twitter logo' />
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
