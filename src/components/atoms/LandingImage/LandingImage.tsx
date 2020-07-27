import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
// @ts-ignore
import TextPlugin from 'gsap/TextPlugin.js';
import Scene from 'assets/icons/main.inline.svg';
import Text from 'assets/icons/text.inline.svg';
import htmlIcon from 'assets/icons/html.svg';
import cssIcon from 'assets/icons/css.svg';
import sassIcon from 'assets/icons/sass.svg';
import jsIcon from 'assets/icons/javascript.svg';
import tsIcon from 'assets/icons/typescript.svg';
import reactIcon from 'assets/icons/react.svg';
import reduxIcon from 'assets/icons/redux.svg';
import gatsbyIcon from 'assets/icons/gatsby.svg';
import gitIcon from 'assets/icons/git.svg';

TextPlugin.registerPlugin(TextPlugin);

const Wrapper = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
`;

const TextWrapper = styled.div`
  position: absolute;
  top: 172px;
  left: 170px;
`;

const Image = styled.img`
  position: absolute;
  display: block;
  width: 110px;
  height: 110px;
  top: 80px;
  left: 200px;
`;

const technologies = [
  { name: 'HTML5', icon: htmlIcon },
  { name: 'CSS3', icon: cssIcon },
  { name: 'Sass/SCSS', icon: sassIcon },
  { name: 'JavaScript', icon: jsIcon },
  { name: 'TypeScript', icon: tsIcon },
  { name: 'React', icon: reactIcon },
  { name: 'Redux', icon: reduxIcon },
  { name: 'Gatsby', icon: gatsbyIcon },
  { name: 'Git', icon: gitIcon },
];

const LandingImage = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (wrapper) {
      const [elements, textSvg] = wrapper.children;

      const technologyImg = imageRef.current;
      const text = textSvg.querySelector('#text');
      const monitor = elements.querySelector('#monitor');
      const screen = elements.querySelector('#screen');
      const keyboard = elements.querySelector('#keyboard');
      const cup = elements.querySelector('#cup');
      const plant = elements.querySelector('#plant');

      gsap.set([monitor, cup, plant, keyboard, technologyImg], {
        autoAlpha: 0,
      });

      const master = gsap.timeline({ defaults: { ease: 'power3.inOut' } });
      const tl = gsap.timeline({ repeat: -1, ease: 'power3.inOut' });

      master.fromTo(
        [monitor, keyboard, cup, plant],
        { y: '-100' },
        { duration: 1, y: '0', autoAlpha: 1, stagger: 0.3 }
      );
      master.to(screen, { duration: 0.5, fill: 'rgba(255,255,255, 0.8)' });
      master.add(tl);
      technologies.map(({ name, icon }) => {
        tl.set(technologyImg, { attr: { src: icon } });
        tl.addLabel('show');
        tl.to(technologyImg, { duration: 1, autoAlpha: 1 }, 'show');
        tl.to(text, { duration: 1, text: name }, 'show');
        tl.addLabel('hide');
        tl.to(text, { duration: 1, text: ' ', delay: 2 }, 'hide');
        tl.to(technologyImg, { duration: 1, autoAlpha: 0, delay: 2 }, 'hide');
      });
    }
  }, []);

  return (
    <Wrapper ref={wrapperRef}>
      <Scene />
      <TextWrapper>
        <Text />
      </TextWrapper>
      <Image ref={imageRef} src={htmlIcon} />
    </Wrapper>
  );
};

export default LandingImage;
