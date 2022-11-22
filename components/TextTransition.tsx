import React, { useEffect, useRef } from 'react';
import {
  animated,
  useTransition,
  config,
} from 'react-spring';

const TextTransition: React.FC<TextTransitionProps> = ({ children }) => {
  const currentRef = React.useRef<HTMLDivElement>(null);
  const heightRef = React.useRef<number | string>('auto');

  const initialRun = useRef(true);

  const transitions = useTransition([children], {
    from: {
      opacity: 0,
      transform: 'translateY(100%)',
    },
    enter: { opacity: 1, transform: 'translateY(0%)' },
    leave: {
      opacity: 0,
      transform: 'translateY(-100%)',
      position: 'absolute',
    },
    config: config.default,
    immediate: initialRun.current,
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
      {transitions((styles) => (
        <animated.div
          style={{ ...styles }}>
          {children}
        </animated.div>
      ))}
    </animated.div>
  );
};

type TextTransitionProps = {
  readonly children: React.ReactNode;
};

export default TextTransition;
