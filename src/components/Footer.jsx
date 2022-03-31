import footerLinks from "../data/footer_links";
import fb from "../assets/facebook.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";

function Footer() {
  return (
    <div className='footer-container'>
      <p className='text-sm'>helpdesk@bhupswatinetwork.in</p>
      <p className='footer-text'>
        &copy;{" "}
        <span className='text-hglt'>Bhupswati Network Private Limited</span>.
        All rights reserved
      </p>
      <div className='social-links'>
        <div className='icons'>
          <a
            href='https://www.facebook.com/BhupswatiNetwork/?msclkid=487b484cafe611ecafaa2da6fa67cfb1'
            target='_blank'
          >
            <img src={fb} alt='facebook logo' />
          </a>
        </div>
        <div className='icons'>
          <a
            href='https://in.linkedin.com/in/bhupswati-network-private-limited-366592223?msclkid=f5648b8dafe611ecb71727bfc4756de3'
            target='_blank'
          >
            <img src={linkedin} alt='instagram logo' />
          </a>
        </div>
        <div className='icons'>
          <img src={twitter} alt='twitter logo' />
        </div>
      </div>
    </div>
  );
}

export default Footer;
