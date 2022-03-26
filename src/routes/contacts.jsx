import { useState } from "react";
import Header from "../components/Header";
import {
  FaPhoneAlt,
  FaMailBulk,
  FaMapMarkerAlt,
  FaLocationArrow,
} from "react-icons/fa";
import MyMap from "../components/MyMap";
// import MapAddress from "../components/MapAddress";

function Contacts() {
  const locations = [
    {
      lat: 28.5005905,
      lng: 77.0372613,
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    msg: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='section'>
      <Header />
      <div className='contacts'>
        <div className='contacts_left'>
          <div className='contacts_left_info'>
            <div className='contacts_left_info_phone'>
              <FaPhoneAlt className='icon' />{" "}
              <p className='text-xsm'>95403 18192</p>
            </div>
            <div className='contacts_left_info_email'>
              <FaMailBulk className='icon' />{" "}
              <p className='text-xsm'>helpdesk@bhupswatinetwork.in</p>
            </div>
            <div className='contacts_left_info_address'>
              <FaMapMarkerAlt className='icon' />
              <p className='text-xsm'>
                Plot No. 2, Palam Vihar Extension Sec 23 A, Gurugram Haryana
                122017
              </p>
            </div>
          </div>
          <div className='contacts_left_map'>
            {/* <MapAddress /> */}
            <MyMap locations={locations} />
          </div>
        </div>

        <div className='contacts_right'>
          <p className='text-md'>Get In Touch With Us</p>
          <p
            className='text-xsm'
            style={{ color: "gray", margin: "0.8rem auto" }}
          >
            Write your query in the message and our team will get back to you.
          </p>
          <form className='form' onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='name' className='label'>
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                placeholder='Enter your name'
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='name' className='label'>
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                placeholder='Enter your email'
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='phone' className='label'>
                Phone No.
              </label>
              <input
                type='text'
                id='phone'
                name='phone'
                placeholder='Enter your phone number'
                maxLength={10}
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='msg' className='label'>
                Your Message
              </label>
              <textarea
                id='msg'
                name='msg'
                placeholder='Enter your Message'
                value={formData.msg}
                onChange={handleChange}
              />
            </div>
            <button className='btn btn-submit' type='submit'>
              <FaLocationArrow className='icon-sm' />
              <p className='text-xsm'>Send</p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
