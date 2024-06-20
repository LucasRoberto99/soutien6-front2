import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <p>Salut je suis Header</p>
      <div>
        <Link to={"/"}>Home</Link>
      </div>
      <Link to={"/signup"}>Signup</Link>
    </div>
  );
};

export default Header;
