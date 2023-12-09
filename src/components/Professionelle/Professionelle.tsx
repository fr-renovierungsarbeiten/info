import Leistungen from "../Leistungen/Leistungen";
import scss from "./Professionelle.module.scss";
import { FaCheck } from "react-icons/fa6";

import Statistics from "../Statistics/Statistics";
import Feedback from "../Feedback/Feedback";

export default function Professionelle() {
  return (
    <div className={scss.gradient}>
      <section className={`${scss.container} + container`} id="uberUns">
        <h2 className={scss.title}> PROFESSIONELLE ALTBAUSANIERUNG</h2>
        <p className={scss.punkt_text}>
          <FaCheck className={scss.check} /> Für Sie realisieren wir Wohnungen
          und Altbauten mit hoher Qualität und Zuverlässigkeit
        </p>
        <p className={scss.punkt_text}>
          <FaCheck className={scss.check} /> Sanierungen von Altbauwohnungen in
          Berlin{" "}
        </p>
        <p className={scss.punkt_text}>
          <FaCheck className={scss.check} /> Alle Leistungen aus einer Hand
        </p>
        <p className={scss.punkt_text}>
          <FaCheck className={scss.check} /> Professionelle Ausführung der
          Handwerksgewerke von erfahrenen und festangestellten Mitarbeitern
        </p>

        <Statistics />
        <Feedback />
        <Leistungen />
      </section>
    </div>
  );
}
