import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="main__container header">
        <Link to="/">
          <img className="header__logo" src={logo} alt="Logo Around" />
        </Link>
        <nav className="header__nav">
          <Link to="/signin" className="header__auth">
            Log in
          </Link>
        </nav>
      </header>
      <div className="header__line"></div>
    </>
  );
}

export default Header;
