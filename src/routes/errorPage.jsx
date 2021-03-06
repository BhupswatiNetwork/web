import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import errorImg from "../assets/errorImage.jpg";

function ErrorPage() {
  return (
    <>
      <Header />
      <div className='errorPage'>
        <img
          style={{ width: "100%", height: "85vh" }}
          src={errorImg}
          alt='Error 404, Page Not Found!'
        />
      </div>
      <Footer />
    </>
  );
}

export default ErrorPage;
