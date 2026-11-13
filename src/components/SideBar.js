import pizza from "../assets/pizza.jpg";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <img src={pizza} alt="Hamdan's logo" width="2000" height="500"/>
      </Link>
      <h2>Hamdan's Table</h2>
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart"> Cart </Link>
      </div>
    </div>
  );
};

export default SideBar;