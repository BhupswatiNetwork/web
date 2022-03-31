import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Bounce from "react-reveal/Bounce";
import firebase from "../config/firebase";
import {
  FaPhoneAlt,
  FaMailBulk,
  FaMapMarkerAlt,
  FaLocationArrow,
} from "react-icons/fa";

function Contacts() {
  const contactForm = firebase.database().ref("clients");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    msg: "",
  });

  const [errors, setErrors] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(formData));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmit) {
      const newContactFormRef = contactForm.push();
      newContactFormRef.set({ ...formData });

      setFormData({
        name: "",
        email: "",
        phone: "",
        msg: "",
      });
    }
  }, [errors, isSubmit]);

  const validate = (data) => {
    const error = {};
    const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i;
    const phone_regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (!data.name) {
      error.name = "Name field is required";
    } else if (data.name.length <= 3) {
      error.name = "Name should be atleast 4 characters";
    }
    if (!data.email) {
      error.email = "Email field is required";
    } else if (!regex.test(data.email)) {
      error.email = "Please enter a valid email";
    }
    if (!data.phone) {
      error.phone = "Phone field is required";
    } else if (!phone_regex.test(data.phone)) {
      error.phone = "Please enter a valid phone number";
    }
    if (!data.msg) {
      error.msg = "Message field is required";
    }

    return error;
  };

  return (
    <>
      <Header />
      <div className='section'>
        <div className='contacts'>
          <Bounce bottom>
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
            </div>
          </Bounce>
          <Bounce top>
            <div className='contacts_right'>
              <p className='text-md text-hglt'>Get In Touch With Us</p>
              <p
                className='text-xsm'
                style={{ color: "gray", margin: "0.8rem auto" }}
              >
                Write your query in the message and our team will get back to
                you.
              </p>
              <form className='form' onSubmit={handleSubmit}>
                <div className='form-group'>
                  <label htmlFor='name' className='label'>
                    Name &nbsp;{" "}
                    <small style={{ fontSize: "10px", color: "red" }}>
                      {errors.name}
                    </small>
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
                    Email &nbsp;{" "}
                    <small style={{ fontSize: "10px", color: "red" }}>
                      {errors.email}
                    </small>
                  </label>
                  <input
                    type='text'
                    id='email'
                    name='email'
                    placeholder='Enter your email'
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='phone' className='label'>
                    Phone No. &nbsp;{" "}
                    <small style={{ fontSize: "10px", color: "red" }}>
                      {errors.phone}
                    </small>
                  </label>
                  <input
                    type='tel'
                    pattern='[6-9]{1}[0-9]{9}'
                    id='phone'
                    name='phone'
                    placeholder='Enter Number (9876543210)'
                    maxLength={10}
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='msg' className='label'>
                    Your Message &nbsp;{" "}
                    <small style={{ fontSize: "10px", color: "red" }}>
                      {errors.msg}
                    </small>
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
          </Bounce>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contacts;
