import { Link } from "react-router-dom";
import Logo from "../../logo.svg";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="HomeWrap">
        <div>
          <img src={Logo} alt="react-svg" className="react-logo" />
          <div className="LinkContainer">
            <Link to={"/count"} className="Link">
              Count
            </Link>
            <Link to={"/info"} className="Link">
              Info
            </Link>
            <Link to={"/visible"} className="Link">
              Visible
            </Link>
            <Link to={"/contextsample"} className="Link">
              ContextSample
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
