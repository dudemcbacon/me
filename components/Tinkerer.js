import React, { useEffect } from 'react';
import ToggleTransition from './ToggleTransition';

const TEXTS = [
  'tinkerer',
  'tinker3r',
];

export default function Themes() {
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => {
        setIndex((i) => i + 1);
        console.log(TEXTS[index % TEXTS.length]);
      },
      3000,
    );
    return () => clearTimeout(intervalId);
  }, [index]);

  const item = TEXTS[index % TEXTS.length];
  return (
    <>
      {item.split('').map((n) => (
        <ToggleTransition key={n}>
          {n}
        </ToggleTransition>
      ))}
    </>
  );
}
