import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="main__container header">
        <img className="header__logo" src={logo} alt="Logo Around" />
        <Link to="/signin" className="header__auth">
          Log in
        </Link>
      </header>
      <div className="header__line"></div>
    </>
  );
}

export default Header;
