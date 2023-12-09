import { useSpring, animated } from "react-spring";
import scss from "./Statistics.module.scss";
import { useInView } from "react-intersection-observer";
interface IProcent {
  value: number;
}

const maxCount = 80;

const AnimatedCounter: React.FC<IProcent> = ({ value }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const { number } = useSpring({
    from: { number: 1 },
    to: { number: inView ? (value / maxCount) * 100 : 0 },
    config: { duration: 4000 },
  });

  return (
    <animated.span
      ref={ref}
      className={scss.card_line}
      style={{ width: number.to((val) => `${val.toFixed(2)}%`) }}
    />
  );
};
export default AnimatedCounter;
