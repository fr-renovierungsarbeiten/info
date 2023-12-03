import { FC } from "react";
import css from "./Statistics.module.css";
import CountUpAnimation from "./CountUpAnimation";
import AnimatedCounter from "./AnimatedCounter";
import AnimatedCounter2 from "./AnimatedCounter2";

const Statistics: FC = () => {
  const one = 42;
  const two = 3;

  return (
    <div className={css.statistic}>
      
      <div className={css.card}>
        <div className={css.cardTop}>
          <p className={css.card_number}>
            <CountUpAnimation endValue={one} />+
          </p>
          <p className={css.card_title}> Abgeschlossene Projekte </p>
        </div>
        <AnimatedCounter value={one} />
      </div>
      
      <div className={css.card}>
        <div className={css.cardTop}>
          <p className={css.card_number}>
            <CountUpAnimation endValue={two} />
          </p>
          <span className={css.card_title}> Jahre Erfahrung</span>
        </div>
        <AnimatedCounter2 value={two} />
      </div>
    </div>
  );
};

export default Statistics;
