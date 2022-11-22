import React, { useEffect } from 'react';
import Typed from 'typed.js';

const Title: React.FC<TitleProps> = ({ el, setLinkTransition }) => {
  useEffect(() => {
    const options = {
      stringsElement: '#title-text',
      typeSpeed: 50,
      backSpeed: 50,
      cursorChar: '_',
      onComplete: () => setLinkTransition(true),
    };

    if (el.current) {
      const typed = new Typed(el.current, options);

      return () => {
        // Make sure to destroy Typed instance during cleanup
        // to prevent memory leaks
        typed.destroy();
      };
    }
    return () => {};
  }, [el, setLinkTransition]);

  return (
    <div id="title-text">
      <span>
        <span className="name"> brandon burnett </span>
        <span className="curlies"> &#123; </span>
        <span className="themes">
          <span className="hacker" data-text="hacker">hacker</span>
          ^300,&nbsp;
          <span className="tinkerer">tinkerer</span>
          ^300,&nbsp;
          <span className="awesome">awesome</span>
        </span>
        <span className="curlies"> &#125; </span>
      </span>
    </div>
  );
};

interface Ref {
  readonly current: string | Element | null;
}

type TitleProps = {
  readonly el: Ref;
  readonly setLinkTransition: Function;
};

export default Title;
