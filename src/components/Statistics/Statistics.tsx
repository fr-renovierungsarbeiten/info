import { FC } from "react";
import scss from "./Statistics.module.scss";
import CountUpAnimation from "./CountUpAnimation";
import AnimatedCounter from "./AnimatedCounter";
import AnimatedCounter2 from "./AnimatedCounter2";

const Statistics: FC = () => {
  const one = 42;
  const two = 3;

  return (
    <div className={scss.statistic}>
      <div className={scss.card}>
        <div className={scss.card_top}>
          <p className={scss.card_number}>
            <CountUpAnimation endValue={one} />+
          </p>
          <span className={scss.card_title}>
            <strong>Abgeschlossene Projekte </strong>{" "}
          </span>
        </div>
        <AnimatedCounter value={one} />
      </div>

      <div className={scss.card}>
        <div className={scss.card_top}>
          <p className={scss.card_number}>
            <CountUpAnimation endValue={two} />
          </p>
          <span className={scss.card_title}>
            <strong>Jahre Erfahrung</strong>{" "}
          </span>
        </div>
        <AnimatedCounter2 value={two} />
      </div>
    </div>
  );
};

export default Statistics;
