import css from "./Professionelle.module.css";
import { FaCheck } from "react-icons/fa6";
import Statistics from "../Statistics/Statistics";
import { GoDotFill } from "react-icons/go";
import Feedback from "../Feedback/Feedback";

export default function Professionelle() {
  return (
    <div className={css.gradient}>
      <div className={css.container} id="uberUns">
        <h2 className={css.title}> PROFESSIONELLE ALTBAUSANIERUNG</h2>
        <p className={css.punktText}>
          <FaCheck className={css.check} /> Für Sie realisieren wir Wohnungen
          und Altbauten mit hoher Qualität und Zuverlässigkeit
        </p>
        <p className={css.punktText}>
          <FaCheck className={css.check} /> Sanierungen von Altbauwohnungen in
          Berlin{" "}
        </p>
        <p className={css.punktText}>
          <FaCheck className={css.check} /> Alle Leistungen aus einer Hand
        </p>
        <p className={css.punktText}>
          <FaCheck className={css.check} /> Professionelle Ausführung der
          Handwerksgewerke von erfahrenen und festangestellten Mitarbeitern
        </p>

        <Statistics />
        <Feedback />

        <div className={css.Leistungen} id="leistungen">
          <h2 className={css.title}> UNSERE LEISTUNGEN</h2>

          <div className={css.leistungenContainer}>
            <div className={css.leistungenLeft}>
              <p className={css.leistungenText}>
                <GoDotFill className={css.iconDot} />
                Trockenbau
              </p>
              <p className={css.leistungenText}>
                <GoDotFill className={css.iconDot} />
                Malerarbeiten
              </p>
              <p className={css.leistungenText}>
                <GoDotFill className={css.iconDot} />
                Abrissarbeiten
              </p>
              <p className={css.leistungenText}>
                <GoDotFill className={css.iconDot} />
                Maurer / Putzarbeiten
              </p>
            </div>

            <div className={css.leistungenRight}>
              <p className={css.leistungenText}>
                <GoDotFill className={css.iconDot} />
                Fliesenverlegung
              </p>
              <p className={css.leistungenText}>
                <GoDotFill className={css.iconDot} />
                Altbausanierung
              </p>
              <p className={css.leistungenText}>
                <GoDotFill className={css.iconDot} />
                Fußboden-Sanierung
              </p>
              <p className={css.leistungenText}>
                <GoDotFill className={css.iconDot} />
                Bodenlegearbeiten
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
