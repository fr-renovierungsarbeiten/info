import scss from "./Hero.module.scss";
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
      <div id="main" className={scss.main}>
        <div className={scss.whiteBlock}></div>
        <div className={scss.blueBlock}></div>
        <div className={scss.blockContainer}>
          <div className={scss.upperBlock}>
            <div className={scss.phonesBlock}>
              <a href="tel:01631288635" className={scss.phone}>
                <MdPhoneIphone className={scss.iconPhone} />
                01631288635
              </a>
              <a href="tel:01775729872" className={scss.phone}>
                <MdPhoneIphone className={scss.iconPhone} />
                01775729872
              </a>
            </div>
          </div>

          <div className={scss.bottomBlock}>
            <p className={scss.pofText}>Professionelle Sanierung</p>
          </div>

          <div className={scss.darkLine}>
            <div style={{ display: "flex" }}>
              <p className={scss.altNew}>AUS ALT</p>
              <p className={scss.altNew}>WIRD NEU</p>
            </div>
            <div className={scss.address}>
              <Link to="#Contacts">
                <p className={scss.addressText}>14480 Potsdam,</p>
                <p className={scss.addressText}>Hans-Grade-Ring 36</p>
              </Link>
            </div>
          </div>

          <div className={scss.mailBlock}>
            <a
              href="mailto:rostyslav.felyshchuk@gmail.com"
              className={scss.mail}
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
