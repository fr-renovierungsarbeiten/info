import { useEffect, useState } from "react";
import css from "./Header.module.css";
import logo from "/logo.png";
import { Link } from "react-router-dom";

export default function Header(): JSX.Element {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const windowHeight = window.innerHeight - 80;
  const [filterBrightness, setFilterBrightness] = useState(0);
  const [filterInvert, setFilterInvert] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < windowHeight) {
        setScrollPosition(window.scrollY);
        setFilterBrightness(0);
        setFilterInvert(1);
      } else {
        setScrollPosition(windowHeight);
        setFilterBrightness(1);
        setFilterInvert(0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [windowHeight]);

  const headerHeight = Math.max(20 - scrollPosition / 100, 8);

  return (
    <div
      className={css.headerContainer}
      style={{ height: `${headerHeight}vh` }}
    >
      <img
        className={css.logo}
        style={{
          height: `${headerHeight - 1}vh`,
          filter: `brightness(${filterBrightness}) invert(${filterInvert})`,
        }}
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
