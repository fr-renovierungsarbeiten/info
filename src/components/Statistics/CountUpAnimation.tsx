import { useInView } from "react-intersection-observer";
import scss from "./Statistics.module.scss";
import { useSpring, animated } from "react-spring";
interface IStat {
  endValue: number;
}

const CountUpAnimation = ({ endValue }: IStat) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const { number } = useSpring({
    from: { number: 1 },
    to: { number: inView ? endValue : 0 },
    config: { duration: 4000 },
  });

  return (
    <animated.span ref={ref} className={scss.circle}>
      {number.to((val) => Math.floor(val))}
    </animated.span>
  );
};

export default CountUpAnimation;
