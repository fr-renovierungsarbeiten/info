import scss from "./Leistungen.module.scss";
import { GoDotFill } from "react-icons/go";

const Leistungen = (): JSX.Element => {
  return (
    <section className={scss.leistungen} id="leistungen">
      <h2 className={scss.title}> UNSERE LEISTUNGEN</h2>

      <div className={scss.leistungen_container}>
        <div className={scss.leistungen_left}>
          <p className={scss.leistungen_text}>
            <GoDotFill className={scss.icon_dot} />
            Trockenbau
          </p>
          <p className={scss.leistungen_text}>
            <GoDotFill className={scss.icon_dot} />
            Malerarbeiten
          </p>
          <p className={scss.leistungen_text}>
            <GoDotFill className={scss.icon_dot} />
            Abrissarbeiten
          </p>
          <p className={scss.leistungen_text}>
            <GoDotFill className={scss.icon_dot} />
            Maurer / Putzarbeiten
          </p>
        </div>

        <div className={scss.leistungen_right}>
          <p className={scss.leistungen_text}>
            <GoDotFill className={scss.icon_dot} />
            Fliesenverlegung
          </p>
          <p className={scss.leistungen_text}>
            <GoDotFill className={scss.icon_dot} />
            Altbausanierung
          </p>
          <p className={scss.leistungen_text}>
            <GoDotFill className={scss.icon_dot} />
            Fußboden-Sanierung
          </p>
          <p className={scss.leistungen_text}>
            <GoDotFill className={scss.icon_dot} />
            Bodenlegearbeiten
          </p>
        </div>
      </div>
    </section>
  );
};

export default Leistungen;
