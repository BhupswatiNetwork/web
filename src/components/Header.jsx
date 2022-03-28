import { Link } from "react-router-dom";

function Header() {
  return (
    <div className='header'>
      <p className='header_logo text-sm'>Logo</p>

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

      <p className='header_call text-sm'>9876543210</p>
    </div>
  );
}

export default Header;
