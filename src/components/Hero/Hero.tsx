import Contacts from "../ContactUs/ContactUs";
import Gallery from "../Gallery/Gallery";
import Header from "../Header/Header";
import logo2 from "/logo2.png";
import css from "./Hero.module.css";

import { MdPhoneIphone } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";
import Professionelle from "../Professionelle/Professionelle";

export default function Hero(): JSX.Element {
  return (
    <>
      <Header />
      <div id="main" className={css.main}>
        <div className={css.blueBlock}></div>
        <div className={css.blockContainer}>
          <div className={css.upperBlock}>
            <div className={css.phonesBlock}>
              <a href="tel:01775729872" className={css.phone}>
                <MdPhoneIphone className={css.iconPhone} />
                01775729872
              </a>
              <a href="tel:01631288635" className={css.phone}>
                <MdPhoneIphone className={css.iconPhone} />
                01631288635
              </a>
            </div>
          </div>

          <div className={css.bottomBlock}>
              <p className={css.pofText}>Professionelle Sanierung</p>

          </div>

          <div className={css.darkLine}>
            <div style={{ display: "flex" }}>
              <p className={css.altNew}>AUS ALT</p>
              <p className={css.altNew}>WIRD NEU</p>
            </div>
            <div className={css.address}>
              <Link to="#Contacts" className={css.addressText}>
                14480 Potsdam, <br />
                Hans-Grade-Ring 36
              </Link>
            </div>
          </div>

          <div className={css.mailBlock}>
                <a
                  href="mailto:rostyslav.felyshchuk@gmail.com"
                  className={css.mail}
                >
                  <MdAlternateEmail className={css.iconMail} />
                  rostyslav.felyshchuk@gmail.com
                </a>
              </div>
        </div>
      </div>

      <Professionelle />
      <Gallery />
      <Contacts />

      <div className={css.footer}>
        <div className={css.footerContainer}>
          <div className={css.footerLeft}>
            <img src={logo2} alt="logo" className={css.footerLogo} />
            <p className={css.footerLeftText}>
              <GoDotFill className={css.iconDot} />
              Trockenbau
            </p>
            <p className={css.footerLeftText}>
              <GoDotFill className={css.iconDot} />
              Malerarbeiten
            </p>
            <p className={css.footerLeftText}>
              <GoDotFill className={css.iconDot} />
              Abrissarbeiten
            </p>
            <p className={css.footerLeftText}>
              <GoDotFill className={css.iconDot} />
              Maurer / Putzarbeiten
            </p>
          </div>

          <div className={css.footerRight}>
            <p className={css.footerLeftText}>
              <GoDotFill className={css.iconDot} />
              Fliesenverlegung
            </p>
            <p className={css.footerLeftText}>
              <GoDotFill className={css.iconDot} />
              Altbausanierung
            </p>
            <p className={css.footerLeftText}>
              <GoDotFill className={css.iconDot} />
              Fußboden-Sanierung
            </p>
            <p className={css.footerLeftText}>
              <GoDotFill className={css.iconDot} />
              Bodenlegearbeiten
            </p>
          </div>
          <a href="tel:01775729872" className={css.footerButton}>
            <FaPhoneVolume className={css.iconButton} /> <br />
            <p className={css.footerButtonText}>Jetzt kontaktieren</p>
          </a>
        </div>
      </div>
    </>
  );
}
