import React, { useEffect } from 'react';
import TextTransition from './TextTransition';

const TEXTS = [
  'awesome',
  'coolguy',
  'crunner',
  'friendo',
];

export default function Themes() {
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    if (index !== TEXTS.length - 1) {
      const intervalId = setInterval(
        () => {
          setIndex((i) => i + 1);
          console.log(TEXTS[index % TEXTS.length]);
        },
        5000,
      );
      return () => clearTimeout(intervalId);
    }
    return () => {};
  }, [index]);

  return (
    <TextTransition>
      { TEXTS[index % TEXTS.length] }
    </TextTransition>
  );
}
