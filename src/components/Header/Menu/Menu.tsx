import { FC } from "react";

import scss from "./Menu.module.scss";
import { Link } from "react-router-dom";
interface IModal {
  onClose: (newValue: boolean) => void;
}

const Menu: FC<IModal> = ({ onClose }) => {
  return (
    <>
      <div className={scss.menu_container}>
        <ul>
          <li className={scss.menu_item}>
            <Link
              to="#uberUns"
              className={scss.menu_link}
              onClick={() => onClose(false)}
            >
              Über uns
            </Link>
          </li>
          <li className={scss.menu_item}>
            <Link
              to="#leistungen"
              className={scss.menu_link}
              onClick={() => onClose(false)}
            >
              Leistungen
            </Link>
          </li>
          <li className={scss.menu_item}>
            <Link
              to="#projecte"
              className={scss.menu_link}
              onClick={() => onClose(false)}
            >
              Projekte
            </Link>
          </li>
          <li className={scss.menu_item}>
            <Link
              to="#Contacts"
              className={scss.menu_link}
              onClick={() => onClose(false)}
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
