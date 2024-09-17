import { useState } from "react";
import "./style.css";
import Logo from "../../../logo.svg";
import Button from "../../../components/Button/Button";

const Home = ({ buttonLink }) => {
  const [openToggle, setOpenToggle] = useState(false);

  const onToggleChange = () => {
    setOpenToggle(!openToggle);
  };

  return (
    <>
      <div className="HomeWrap">
        <div>
          <img src={Logo} alt="react-svg" className="react-logo" />
          <div className="LinkContainer">
            <div className="toggleContainer">
              <button onClick={onToggleChange} className="toggleBtn">
                {openToggle ? <p>Close</p> : <p>Count</p>}
              </button>
              <div className={`countContainer ${openToggle ? "open" : ""}`}>
                <Button buttonLink={"/stateCount"}>useState</Button>
                <Button buttonLink={"/reducerCount"}>useReducer</Button>
              </div>
            </div>
            <Button buttonLink={"/info"}>Info</Button>
            <Button buttonLink={"/visible"}>Visible</Button>
            <Button buttonLink={"/contextsample"}>ContextSample</Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
