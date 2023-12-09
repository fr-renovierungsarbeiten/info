import { FaPhoneVolume } from "react-icons/fa6";
import logo2 from "/logo2.png";
import scss from "./Footer.module.scss";
import { GoDotFill } from "react-icons/go";

const Footer = (): JSX.Element => {
  return (
    <footer className={`${scss.footer} + container`}>
      <div className={scss.footer_wrap}>
        <div className={scss.footer_container}>
          <div className={scss.footer_logo_container}>
            <img src={logo2} alt="logo" className={scss.footer_logo} />
          </div>
          <div className={scss.footer_list_container}>
            <ul className={scss.footer_list1}>
              <li>
                <p className={`${scss.footer_text} ${scss.line1}`}>
                  <GoDotFill className={scss.icon_dot} />
                  Trockenbau
                </p>
              </li>
              <li>
                <p className={`${scss.footer_text} ${scss.line1}`}>
                  <GoDotFill className={scss.icon_dot} />
                  Malerarbeiten
                </p>
              </li>
              <li>
                <p className={`${scss.footer_text} ${scss.line1}`}>
                  <GoDotFill className={scss.icon_dot} />
                  Abrissarbeiten
                </p>
              </li>
              <li>
                <p className={`${scss.footer_text} ${scss.line1}`}>
                  <GoDotFill className={scss.icon_dot} />
                  Maurer / Putzarbeiten
                </p>
              </li>
            </ul>
            <ul className={scss.footer_list2}>
              <li>
                <p className={`${scss.footer_text} ${scss.line2}`}>
                  <GoDotFill className={scss.icon_dot} />
                  Altbausanierung
                </p>
              </li>
              <li>
                <p className={`${scss.footer_text} ${scss.line2}`}>
                  <GoDotFill className={scss.icon_dot} />
                  Fliesenverlegung
                </p>
              </li>
              <li>
                <p className={`${scss.footer_text} ${scss.line2}`}>
                  <GoDotFill className={scss.icon_dot} />
                  Bodenlegearbeiten
                </p>
              </li>
              <li>
                <p className={`${scss.footer_text} ${scss.line2}`}>
                  <GoDotFill className={scss.icon_dot} />
                  Fußboden-Sanierung
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className={scss.footer_button_container}>
          <button type="button" className={scss.footer_button}>
            <a href="tel:01775729872" className={scss.phone_call}>
              <FaPhoneVolume className={scss.icon_button} /> <br />
              <p className={scss.footer_button_text}>Jetzt kontaktieren</p>
            </a>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
