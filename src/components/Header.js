import { Link as LinkRouter } from "react-router-dom";
import "../styles/Header.css";
import acceso from "../img/acceso.png";
import logo3 from "../img/logo3.png";
import lista from "../img/lista.png";
import { useState } from "react";
import { usePostUserSingOutMutation } from "../features/userApi";

const pages = [
  { name: "Home", to: "/" },
  { name: "Cities", to: "/cities" },
  { name: "New City", to: "/newcity" },
];

export default function Header() {


  const [menu, setMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const [singOut] = usePostUserSingOutMutation()


  const toggleMenu = () => {
    setMenu(!menu);
  };
  const link = (page) => (
    <li onClick={toggleMenu}>
      <LinkRouter className="Header-link" to={page.to}>{page.name}</LinkRouter>
    </li>
  );

  const HandleOpen = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);

    }
  };

  let User = JSON.parse(localStorage.getItem("useriInfo"));
  // console.log(User.mail)

  const userlogged = (usuario) => {
    if (!usuario) {
      return (
        <div>
          <div className="Header-menu">
            {open ? (
              <ul className="Header-profileMenu">
                <LinkRouter to="/singup"><li className="Header-li" onClick={HandleOpen}>Sign up</li></LinkRouter>

                <LinkRouter to="/singin"><li className="Header-li" onClick={HandleOpen}>Sign in</li></LinkRouter>
              </ul>
            ) : null}
          </div>
          <button className="Header-button" onClick={HandleOpen}>
            <img className="Header-login" src={acceso} alt="acceso" />
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <div className="Header-menu">
            {open && User.role === 'admin' ? (
              <ul className="Header-profileMenu">
                <button onClick={clearlocal} className="Header-signOut">
                  <li className="Header-li" onClick={HandleOpen}>Sign Out</li>
                </button>
                <LinkRouter to={'/newadmin'}> <li className="Header-li" onClick={HandleOpen}>New Admin</li> </LinkRouter>
              </ul>
            ) : open && User.role === 'user' ? (
                <ul className="Header-profileMenu">
                <button onClick={clearlocal} className="Header-signOut">
                  <li className="Header-li" onClick={HandleOpen}>Sign Out</li>
                </button>
              </ul>
            ) : null}
          </div>
          <button className="Header-button" onClick={HandleOpen}>
            <img className="Header-loginphoto" src={usuario.photo} alt="acceso"/>
          </button>
        </div>
      );
    }
  };

  const clearlocal = () => {
    singOut(User.mail)
    // .then( response => console.log(response))
    localStorage.clear();
  };

  return (
    <header className={`${menu ? "HeaderisActive" : ""} `}>
      
      <LinkRouter to="/"><img className="Header-logo" src={logo3} alt="logo" /></LinkRouter>
      
      <div className="Header-NavContainer">
        <nav className={`Header-nav ${menu ? "isActive" : ""} `}>
          <div className="Header-Backgound">&nbsp;</div>
          <ul className="Header-LinksContainer">{pages.map(link)}</ul>
        </nav>
        {userlogged(User)}
        <button className="Header-NavMenuButton" onClick={toggleMenu}>
          <img className="Header-NavMenuIcon" src={lista} alt="logo" />
        </button>
      </div>
    </header>
  );
}
