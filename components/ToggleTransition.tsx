import React, { useEffect, useRef, useState } from 'react';
import {
  animated,
  useTransition,
  config,
} from 'react-spring';

const ToggleTransition: React.FC<ToggleTransitionProps> = ({ children }) => {
  const [toggle, set] = useState(false);
  const currentRef = React.useRef<HTMLDivElement>(null);
  const heightRef = React.useRef<number | string>('auto');

  const initialRun = useRef(true);

  const transitions = useTransition(toggle, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0, position: 'absolute' },
    reverse: toggle,
    config: config.molasses,
    immediate: initialRun.current,
    onRest: () => set(!toggle),
  });

  useEffect(() => {
    initialRun.current = false;

    const elem = currentRef.current;

    if (!elem) {
      return;
    }

    const { height: elHeight } = elem.getBoundingClientRect();
    heightRef.current = elHeight;
  }, [children, currentRef]);

  return (
    <animated.div
      className="text-transition"
      style={{
        whiteSpace: 'nowrap',
        display: 'inline-flex',
        height: heightRef.current,
      }}>
      {transitions((styles, item) => (item ? (
        <animated.div
          style={{
            ...styles,
          }}>
          {children}
        </animated.div>
      ) : (
        <animated.div
          style={{
            ...styles,
          }}>
          {children}
        </animated.div>
      )))}
    </animated.div>
  );
};

type ToggleTransitionProps = {
  readonly children: React.ReactNode;
};

export default ToggleTransition;
