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
  const [filterBrightness, setFilterBrightness] = useState(0);
  const [filterInvert, setFilterInvert] = useState(1);

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const heroHeight = window.innerWidth / 1.95 - 50;
  const headerHeight = heroHeight / 3 - scrollPosition / 5;
  const max = heroHeight / 3;
  let min = windowHeight / 20;
  if (windowWidth < 500) {
    min = windowHeight / 15;
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < heroHeight) {
        setScrollPosition(window.scrollY);
        setFilterBrightness(0);
        setFilterInvert(1);
      } else {
        setScrollPosition(heroHeight);
        setFilterBrightness(1);
        setFilterInvert(0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [heroHeight]);

  return (
    <header
      className={`${scss.headerContainer} + container`}
      style={{ height: `clamp(${min}px, ${headerHeight}px, ${max}px)` }}
    >
      <img
        className={scss.logo}
        style={{
          height: `clamp(${min}px, ${headerHeight - 10}px, ${max}px)`,
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
          <VscMenu color={{ color: "black" }} size={25} />
        </button>
      </nav>

      {isOpen && <ModalMenu onClose={onClose} />}
    </header>
  );
}
