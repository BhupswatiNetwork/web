import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Services from "./routes/services";
import ErrorPage from "./routes/errorPage";
import About from "./routes/about";
import Branches from "./routes/branches";
import Contacts from "./routes/contacts";
import It from "./routes/it";
import B2b from "./routes/b2b";
import Finance from "./routes/finance";
import OutSourcing from "./routes/outsourcing";
import Bpo from "./routes/bpo";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/about' element={<About />} />
      <Route path='/services' element={<Services />} />
      <Route path='/it' element={<It />} />
      <Route path='/b2b' element={<B2b />} />
      <Route path='/bpo' element={<Bpo />} />
      <Route path='/finance' element={<Finance />} />
      <Route path='/outsourcing' element={<OutSourcing />} />
      <Route path='/branches' element={<Branches />} />
      <Route path='/contacts' element={<Contacts />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
