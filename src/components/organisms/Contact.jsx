import styled from 'styled-components';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons';

export const Contact = () => {
  const [contactVisible, setContactVisible] = useState(false);
  const contactRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: contactRef,
    offset: ['start end', ' 50% end '],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setContactVisible(latest !== 0 ? true : false);
  });

  return (
    <SectionContainer>
      <ContactReference ref={contactRef} />
      <ContactContainer
        className={`drop-anchor ${contactVisible ? 'show' : ''}`}
      >
        <h1
          className={`nodelay ${contactVisible ? 'visible' : 'invisible'}`}
        >
          Contact
        </h1>
        <LinksContainer>
          <p className={`delay1 ${contactVisible ? 'visible' : ''}`}>
            You can find me here:
          </p>
          <ul>
            <li className={`delay2 ${contactVisible ? 'visible' : ''}`}>
              <Link
                href="https://github.com/kryxeno"
                target="_blank"
              >
                <GitHubLogoIcon
                  width={'2rem'}
                  height={'2rem'}
                />{' '}
                GitHub
              </Link>
            </li>
            <li className={`delay3 ${contactVisible ? 'visible' : ''}`}>
              <Link
                href="https://www.linkedin.com/in/tim-van-ingen-1555bb25a/"
                target="_blank"
              >
                <LinkedInLogoIcon
                  width={'2rem'}
                  height={'2rem'}
                />{' '}
                LinkedIn
              </Link>
            </li>
            <li className={`delay4 ${contactVisible ? 'visible' : ''}`}>
              <EnvelopeClosedIcon
                width={'2rem'}
                height={'2rem'}
              />{' '}
              timvaningen63@gmail.com
            </li>
          </ul>
        </LinksContainer>
      </ContactContainer>
    </SectionContainer>
  );
};

const ContactContainer = styled.div`
  flex-direction: column;
  height: 100vh;
  display: none;

  &.show {
    display: flex;
  }

  .visible {
    animation: rise 300ms cubic-bezier(0.87, 0, 0.04, 1) 200ms 1 forwards;
  }

  .nodelay {
    opacity: 0;
    transform: translateY(10%);
  }
  .delay1 {
    opacity: 0;
    transform: translateY(10%);
    animation-delay: 300ms;
  }
  .delay2 {
    opacity: 0;
    transform: translateY(10%);
    animation-delay: 600ms;
  }
  .delay3 {
    opacity: 0;
    transform: translateY(10%);
    animation-delay: 900ms;
  }
  .delay4 {
    opacity: 0;
    transform: translateY(10%);
    animation-delay: 1200ms;
  }

  @keyframes rise {
    from {
      opacity: 0;
      transform: translateY(10%);
    }
    to {
      opacity: 1;
      transform: translateY(0%);
    }
  }

  h1 {
    position: relative;
    font-size: 15rem;
    font-family: 'acier-bat-noir', sans-serif;
    font-weight: 400;
    font-style: normal;
    color: var(--color-white);
    left: -5.3rem;
    top: 2rem;
  }
`;

const LinksContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 12rem;
  padding-left: var(--side-padding);

  font-size: var(--large-text);

  p {
    font-size: inherit;
  }

  ul {
    padding-left: 7.5rem;
    li,
    li a {
      color: var(--color-primary);
      font-weight: 700;
      color: var(--color-primary);
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
  }
`;

const SectionContainer = styled.section`
  height: 1px;
  position: relative;
  overflow: hidden;
`;

const ContactReference = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 1px;
  width: var(--side-padding);
`;
