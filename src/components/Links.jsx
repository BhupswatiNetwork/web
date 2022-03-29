import { Link } from "react-router-dom";

function Links() {
  return (
    <nav className='header_nav text-xsm'>
      <Link className='header_nav_link' to='/'>
        Home
      </Link>
      <Link className='header_nav_link' to='/about'>
        About
      </Link>
      <Link className='header_nav_link' to='/services'>
        Services
      </Link>
      <Link className='header_nav_link' to='/branches'>
        Branches
      </Link>
      <Link className='header_nav_link' to='/contacts'>
        Contact Us
      </Link>
    </nav>
  );
}

export default Links;
