import { Link } from "react-router-dom";
import "./style.scss";

const Button = ({ buttonLink, children }) => {
  return (
    <>
      <Link to={buttonLink} className="Btn">
        {children}
      </Link>
    </>
  );
};
export default Button;
