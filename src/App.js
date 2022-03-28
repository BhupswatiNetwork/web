import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Teams from "./components/Teams";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className='app'>
        <Home />
      </div>
      <div className='section'>
        <Services />
      </div>
      <div className='section'>
        <Teams />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
