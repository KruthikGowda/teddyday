import "./App.css";
import KoalaImage from "./koala/koala";
import PandaImage from "./panda/panda";
import Image from "./dibujo-24_119884.png";

function App() {
  return (
    <div className="content">
      <div className="title-container">
        <h1 className="title">Happy Teddy Day</h1>
        <img
          src={Image}
          alt="panda"
          style={{ width: "30px", height: "40px", alignContent: "flex-end" }}
        />
      </div>
      <div className="element-container">
        <div className="panda-container">
          <KoalaImage />
        </div>
        <div className="koala-container">
          <PandaImage />
        </div>
      </div>
      <div className="copy-container">
        <h3>Copyright &copy; 2022. By: K</h3>
      </div>
    </div>
  );
}

export default App;
