import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import aboutImg from "../assets/about.png";

function About() {
  return (
    <>
      <Header />
      <div className='section about'>
        <img
          src={aboutImg}
          alt='About us'
          style={{
            width: "100%",
            height: "400px",
            objectFit: "contain",
            marginBottom: "1rem",
          }}
        />
        <div className='about-container'>
          <div className='who-we-are'>
            <p>
              <span className='text-md'>We are </span>
              Bhupswati Network Private Limited (BNPL) a leading business
              service provider company, that offers comprehensive strategies &
              solutions for Business ventures to grow by reaching to the true
              potential customers.Almost every startup or growing company faces
              hard times in generating information of the customers who are
              interested in their offerings.
            </p>
          </div>
          <div className='our-mission'>
            <p>
              <span className='text-md'>Our Vision </span>& focus is to generate
              immense results for our client’s business in growing, by achieving
              the major aim of lead generation & trust building.
            </p>
          </div>
          <div className='what-we-do'>
            <p>
              <span className='text-md'>The areas </span>
              of our expertise lies in the domain of creating a customer
              friendly & engaging environment via Web Development & Designing ,
              App Designing , Logo Designing, Search Engine Optimization ,
              outsourcing, B2B, finance support & Digital marketing.
            </p>
          </div>
          <div className='our-history'>
            <p>
              <span className='text-md'>We are </span>a team of dedicated
              individuals contributing whole-heartedly to bring the vision we
              have set onto the tables, on a daily basis..
            </p>
            <strong>
              <p>Ready to grow your business by 360? Then Contact Us now!</p>
            </strong>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
