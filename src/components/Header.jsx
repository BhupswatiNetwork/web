import { useState, useEffect } from "react";
import Links from "./Links";
import { FaHamburger, FaPhone } from "react-icons/fa";
import logo from "../assets/web-logo.png";

function Header({ app }) {
  const [width, SetWidth] = useState(window.innerWidth);

  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      SetWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, [width]);

  return (
    <>
      {width > 768 ? (
        <div className={`header  ${app ? "" : "header-dark"}`}>
          {/* <p className='header_logo text-sm'>Logo</p> */}
          <img className='logo' src={logo} alt='Logo of the website' />
          <Links />
          <p
            className='header_call text-sm btn call-btn'
            style={{ marginTop: "1rem" }}
          >
            <a href='tel:+919540318192'>
              <FaPhone /> 95403 18192
            </a>
          </p>
        </div>
      ) : (
        <>
          <div className='m-header'>
            <img className='logo' src={logo} alt='Logo of the website' />
            <div className='m-menu'>
              <div
                className='m-menu_icon'
                onClick={() => setShowMenu(!showMenu)}
              >
                <FaHamburger />
              </div>
              {showMenu && <Links />}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Header;
