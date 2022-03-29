import React from "react";
import Header from "../components/Header";

function About() {
  return (
    <>
      <Header />
      <div className='section about'>
        <p className='text-lg'>About Us</p>
        <div className='about-container'>
          <div className='who-we-are'>
            <p>
              <span className='text-md'>We are </span>
              one of the fastest growing Startup in Gurugram. simply dummy text
              of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book.
            </p>
          </div>
          <div className='our-mission'>
            <p>
              <span className='text-md'>Our Mission </span>
              is to one of the fastest growing Startup in Gurugram. simply dummy
              text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s, when
              an unknown printer took a galley of type and scrambled it to make
              a type specimen book.
            </p>
          </div>
          <div className='what-we-do'>
            <p>
              <span className='text-md'>We Provide </span>
              Services Like one of the fastest growing Startup in Gurugram.
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the type specimen book.
            </p>
          </div>
          <div className='our-history'>
            <p>
              <span className='text-md'>Our History </span>
              one of the fastest growing Startup in Gurugram. simply dummy text
              of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
