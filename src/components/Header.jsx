import { useState, useEffect } from "react";
import Links from "./Links";
import { FaHamburger, FaPhone } from "react-icons/fa";

function Header() {
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
        <div className='header'>
          <p className='header_logo text-sm'>Logo</p>
          <Links />
          <p className='header_call text-sm btn call-btn'>
            <a href='tel:+919876543210'>
              <FaPhone /> 9876543210
            </a>
          </p>
        </div>
      ) : (
        <>
          <div className='m-header'>
            <p className='header_logo text-sm'>Logo</p>
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
          <a href='tel:+919876543210'>
            <div className='m-call'>
              <FaPhone />
            </div>
          </a>
        </>
      )}
    </>
  );
}

export default Header;
