import { useEffect, useState } from "react";
import css from "./Header.module.css";
import logo from "/logo.png";
import { Link } from "react-router-dom";

export default function Header(): JSX.Element {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 800) {
        setScrollPosition(window.scrollY);
      } else {setScrollPosition(900)}
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerHeight = Math.max(16 - (scrollPosition/50), 8);

  return (
    <div
      className={css.headerContainer}
      style={{ height: `${headerHeight}vh` }}
    >
      <img
        className={css.logo}
        style={{ height: `${headerHeight-1}vh` }}
        src={logo}
        alt="logo"
      />

      <nav>
        <ul className={css.navigate}>
          <li className={css.link}>
            <Link to="#uberUns">Über uns</Link>
          </li>
          <li className={css.link}>
            <Link to="#leistungen">Leistungen</Link>
          </li>          
          <li className={css.link}>
            <Link to="#projecte">Projekte</Link>
          </li>
          <li className={css.link}>
            <Link to="#Contacts">Kontakt</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
