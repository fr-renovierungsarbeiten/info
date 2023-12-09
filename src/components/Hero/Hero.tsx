import css from "./Hero.module.css";
import Header from "../Header/Header";
import Gallery from "../Gallery/Gallery";
import Contacts from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";

import { MdPhoneIphone } from "react-icons/md";

import { Link } from "react-router-dom";
import Professionelle from "../Professionelle/Professionelle";

export default function Hero(): JSX.Element {
  return (
    <>
      <Header />
      <div id="main" className={css.main}>
        <div className={css.whiteBlock}></div>
        <div className={css.blueBlock}></div>
        <div className={css.blockContainer}>
          <div className={css.upperBlock}>
            <div className={css.phonesBlock}>
              <a href="tel:01631288635" className={css.phone}>
                <MdPhoneIphone className={css.iconPhone} />
                01631288635
              </a>
              <a href="tel:01775729872" className={css.phone}>
                <MdPhoneIphone className={css.iconPhone} />
                01775729872
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
              <Link to="#Contacts">
                <p className={css.addressText}>14480 Potsdam,</p>
                <p className={css.addressText}>Hans-Grade-Ring 36</p>
              </Link>
            </div>
          </div>

          <div className={css.mailBlock}>
            <a
              href="mailto:rostyslav.felyshchuk@gmail.com"
              className={css.mail}
            >
              rostyslav.felyshchuk@gmail.com
            </a>
          </div>
        </div>
      </div>

      <Professionelle />
      <Gallery />
      <Contacts />
      <Footer />
    </>
  );
}
