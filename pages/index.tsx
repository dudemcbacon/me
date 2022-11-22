import React, { useState, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { CSSTransition } from 'react-transition-group';
import {
  FiFacebook,
  FiGithub,
  FiTwitter,
  FiLinkedin,
} from 'react-icons/fi';
import { BsFileEarmarkPdf } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import Awesome from '../components/Awesome';
import Title from '../components/Title';
// import Tinkerer from '../components/Tinkerer';
import '../styles/Home.module.css';

function replaceNodeWithReactComponent(element: Element, reactComponent: any) {
  const parent = createRoot(element);
  parent.render(reactComponent);
}

export default function Home() {
  const [linkTransition, setLinkTransition] = useState(false);
  const [centerTransition, setCenterTransition] = useState(false);
  const nodeRef = useRef(null);
  const centerRef = useRef(null);
  const el = useRef(null);

  return (
    <>
      <Title
        el={el}
        setLinkTransition={setLinkTransition} />

      <CSSTransition
        nodeRef={centerRef}
        in={centerTransition}
        timeout={1000}
        onEntered={() => {
          // const tinkerer = document.querySelector('#title-text-span .tinkerer');
          const awesome = document.querySelector('#title-text-span .awesome');
          // if (tinkerer && awesome) {
          if (awesome) {
            // replaceNodeWithReactComponent(tinkerer, <Tinkerer />);
            replaceNodeWithReactComponent(awesome, <Awesome />);
          }
        }}
        className="center header"
        classNames="header">
        <div ref={centerRef}>
          <div className="centerer">
            <h2>
              <span id="title-text-span" ref={el} />
            </h2>
            <div className="break" />
            <CSSTransition
              nodeRef={nodeRef}
              in={linkTransition}
              timeout={500}
              onEntered={() => setTimeout(() => {
                setCenterTransition(true);
                const element = document.querySelector('#title-text-span .hacker');
                if (element) element.classList.add('glitch');
              }, 1000)}
              className="links"
              classNames="links">
              <div ref={nodeRef}>
                <h2>
                  <a aria-label="email" href="mailto:brandon@awesomeindustries.net"><HiOutlineMail /></a>
                  <a aria-label="pdf resume" href="resume.pdf"><BsFileEarmarkPdf /></a>
                  <a aria-label="github" href="https://github.com/dudemcbacon"><FiGithub /></a>
                  <a aria-label="facebook" href="https://www.facebook.com/brandon.burnett"><FiFacebook /></a>
                  <a aria-label="twitter" href="https://twitter.com/brandon_burnett"><FiTwitter /></a>
                  <a aria-label="linkedin" href="https://www.linkedin.com/in/brandon-burnett-b2034914/"><FiLinkedin /></a>
                </h2>
              </div>
            </CSSTransition>
          </div>
        </div>
      </CSSTransition>
      <div className="center footer">
        <div className="resume">
          <iframe id="iframe-resume" src="resume.html" title="Brandon Burnett's Awesome Resume" />
        </div>
      </div>
    </>
  );
}
