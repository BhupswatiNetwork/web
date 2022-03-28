import React from "react";
import Header from "../components/Header";

function ErrorPage() {
  return (
    <>
      <Header />
      <div className='errorPage'>
        <img
          style={{ width: "100%", height: "85vh" }}
          src={process.env.PUBLIC_URL + "/assets/errorImage.jpg"}
          alt='Error 404, Page Not Found!'
        />
      </div>
    </>
  );
}

export default ErrorPage;
