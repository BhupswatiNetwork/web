import Header from "../components/Header";
import Footer from "../components/Footer";
import branches from "../data/branches";
import Fade from "react-reveal/Fade";

function Branches() {
  return (
    <>
      <Header />
      <div className='section intro'>
        <div class='container'>
          <h1>Our Branches &darr;</h1>
        </div>
      </div>

      <div class='timeline'>
        <ul>
          {branches.map((branch) => (
            <li key={branch.id}>
              <Fade left={branch.id % 2 === 0} right={branch.id % 2 === 1}>
                <div>
                  <h3>{branch.location}</h3>
                  <time>{branch.yearOfStart}</time>
                  {branch.desc}
                  <h4 style={{ marginTop: "0.6rem" }}>{branch.currentHead}</h4>
                </div>
              </Fade>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default Branches;
