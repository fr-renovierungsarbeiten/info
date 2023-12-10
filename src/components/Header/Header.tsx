import { useEffect, useState } from "react";
import scss from "./Header.module.scss";
import logo from "/logo.png";
import { VscMenu } from "react-icons/vsc";
import { Link } from "react-router-dom";
import ModalMenu from "./Modal/Modal";

export default function Header(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
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

  const headerHeight = Math.max(15 - scrollPosition / 100, 8);

  return (
    <header
      className={`${scss.headerContainer} + container`}
      style={{ height: `${headerHeight}vh` }}
    >
      <img
        className={scss.logo}
        style={{
          height: `${headerHeight - 1}vh`,
          filter: `brightness(${filterBrightness}) invert(${filterInvert})`,
        }}
        src={logo}
        alt="logo"
      />

      <nav>
        <ul className={scss.navigate}>
          <li className={scss.link}>
            <Link to="#uberUns">Über uns</Link>
          </li>
          <li className={scss.link}>
            <Link to="#leistungen">Leistungen</Link>
          </li>
          <li className={scss.link}>
            <Link to="#projecte">Projekte</Link>
          </li>
          <li className={scss.link}>
            <Link to="#Contacts">Kontakt</Link>
          </li>
        </ul>
        <button type="button" className={scss.burger_btn} onClick={onOpen}>
          <VscMenu color={{ color: "black" }} size={24} />
        </button>
      </nav>

      {isOpen && <ModalMenu onClose={onClose} />}
    </header>
  );
}
