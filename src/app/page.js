'use client';
import Slider from '@/components/organisms/slider';
import { Contact } from '@/components/organisms/Contact';
import DetailPage from '@/components/organisms/DetailPage';
import styled from 'styled-components';
import { useEffect, useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Nextjs from '@/components/icons/Nextjs';
import { CursorArrowIcon, PersonIcon } from '@radix-ui/react-icons';
import { useFollowPointer } from '@/utils/useFollowPointer';
import TypescriptIcon from '@/components/icons/TypescriptIcon';
import MongoIcon from '@/components/icons/MongoIcon';
import SvelteIcon from '@/components/icons/SvelteIcon';
import CsharpIcon from '@/components/icons/CsharpIcon';
import PythonIcon from '@/components/icons/PythonIcon';
import BrushIcon from '@/components/icons/BrushIcon';
import Image from 'next/image';

const projectData = [
  {
    id: '1',
    title: 'Maps.amsterdam proposal',
    date: new Date('2024-01-25'),
    technology: ['SvelteKit', 'Leaflet'],
    description:
      'This school project was made for the bike traffic visualisation of Amsterdam. The proposal was for a route planner with in-depth detail for all the obstacles on that route.',
    images: [
      '/fietskruispunten.jpg',
      '/fietskruispunten2.jpg',
      '/fietskruispunten3.jpg',
    ],
    external: 'https://fietskruispunten.vercel.app/',
  },
  {
    id: '2',
    title: 'Spacex launch timeline',
    date: new Date('2023-11-30'),
    technology: ['NextJS', 'D3'],
    description:
      'This school project was made to visualise the launch timeline of SpaceX. The timeline is interactive and shows interesting figures in graphs.',
    images: ['/spacex.jpg', '/spacex2.jpg', '/spacex3.jpg'],
    external: 'https://tech-track-23-24-nine.vercel.app/ ',
  },
  {
    id: '3',
    title: 'Chess.com clone',
    date: new Date('2022-12-16'),
    technology: ['Vanilla JS'],
    description:
      'This school project was made to clone the chess.com website. It features a chess board (working for singleplayer), as well as the front page of the website.',
    images: ['/chess.jpg', '/chess2.jpg', '/chess3.jpg'],
    external: 'https://kryxeno.github.io/fakesite/chess.html',
  },
  {
    id: '4',
    title: 'EAL Esports',
    date: new Date('2021-01-25'),
    technology: ['Illustrator', 'Photoshop', 'Vanilla JS', 'OBS'],
    description:
      'I made the branding for an amateur league of legends esports competition (which I also hosted). This includes the design and development of a website, the design of all the overlays and branding material, as well as the managing of a team of staff.',
    images: ['/eal2.jpg', '/eal.jpg', '/eal3.jpg'],
    external: 'https://kryxeno.github.io/Eal-website/',
  },
  {
    id: '5',
    title: 'Music studio app prototype',
    date: new Date('2023-01-23'),
    technology: ['Adobe XD', 'Illustrator'],
    description:
      'This school project was made to prototype a music studio app. The app has a desktop version and a mobile version, both with a different layout and function. The desktop is made to manage the studio session, while the mobile version belongs to a musician to manage his/her own sound.',
    images: ['/rmdd.jpg', '/rmdd2.jpg', '/rmdd3.jpg'],
    download: '/rmdd_screenflow.pdf',
  },
  {
    id: '6',
    title: 'Taakmeneertjes (a show on youtube)',
    technology: ['Premiere Pro'],
    date: new Date('2024-03-05'),
    description:
      'I made a show on youtube with my friends. It is the format of a show called taskmaster. We did this for fun and to learn how to make a show. It was a lot of fun to make and we learned a lot.',
    images: ['/taakmeneertjes.jpg'],
    external: 'https://www.youtube.com/watch?v=J_6XQ_izPl8&t=41s',
  },
];

const Home = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [savedScroll, setSavedScroll] = useState(null);

  const [showBackground, setShowBackground] = useState(true);
  const [showDetail, setShowDetail] = useState(false);

  const updateProjectId = (id) => {
    if (id) {
      setSavedScroll(window.scrollY);
      setSelectedProjectId(id);

      setTimeout(() => {
        setShowDetail(true);
        window.scrollTo(0, 0);
        setShowBackground(false);
      }, 600);
    } else {
      setShowBackground(true);
      setShowDetail(false);
      setSelectedProjectId(null);
    }
  };

  useEffect(() => {
    if (showBackground) window.scrollTo(0, savedScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showBackground]);

  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(() => {
        const newIsMobile = window.innerWidth < 800;
        return newIsMobile;
      });
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const screenOffset = 150;

  const { x: x1, y: y1 } = useFollowPointer(ref, 0, screenOffset);
  const { x: x2, y: y2 } = useFollowPointer(ref2, 30, screenOffset);
  const { x: x3, y: y3 } = useFollowPointer(ref3, 60, screenOffset);

  return (
    <main style={{ position: 'relative' }}>
      {showBackground && (
        <Background>
          <HelloContainer>
            <h1>HELLO</h1>
          </HelloContainer>
          <HeroContainer>
            <ScreenContainer>
              <motion.div
                ref={ref}
                style={{ x: x1, y: y1 }}
              />
              <motion.div
                ref={ref2}
                style={{ x: x2, y: y2 }}
              />
              <motion.div
                ref={ref3}
                style={{ x: x3, y: y3 }}
              />
            </ScreenContainer>
            <TitleContainer>
              <p>
                <span>My</span> <span>name</span> <span>is</span>{' '}
                <span>
                  <strong>Tim van Ingen</strong>,
                </span>{' '}
                <span>and</span> <span>I&apos;m a</span>
              </p>
              <h1>CREATIVE FRONT-END DEVELOPER</h1>
            </TitleContainer>
            <figure>
              <Image
                src="/headshot.jpeg"
                alt="Picture of the portfolio owner"
                width={154 * 2}
                height={205 * 2}
              />
            </figure>
          </HeroContainer>
          <SpecialitiesContainer>
            <div>
              <p>I specialize in:</p>
              <ul>
                <li>
                  <Nextjs size="1.4rem" />
                  Next.js / React
                </li>
                <li>
                  <CursorArrowIcon
                    height={'1.3rem'}
                    width={'1.3rem'}
                  />
                  Interface Development
                </li>
                <li>
                  <BrushIcon />
                  Advanced CSS
                </li>
              </ul>
            </div>
            <div>
              <p>I have experience with:</p>
              <ul>
                <li>
                  <TypescriptIcon />
                  Typescript
                </li>
                <li>
                  <MongoIcon />
                  MongoDB / Express
                </li>
                <li>
                  <SvelteIcon />
                  Svelte
                </li>

                <li>
                  <CsharpIcon />
                  C# / Unity
                </li>
                <li>
                  <PythonIcon />
                  Python
                </li>
                <li>
                  <PersonIcon
                    height={'1.3rem'}
                    width={'1.3rem'}
                  />
                  User Experience Design
                </li>
              </ul>
            </div>
          </SpecialitiesContainer>
          <Slider
            projects={projectData}
            selectedProjectId={selectedProjectId}
            setSelectedProjectId={updateProjectId}
            isMobile={isMobile}
          />
          <Contact isMobile={isMobile} />
        </Background>
      )}
      {showDetail && (
        <DetailPage
          projects={projectData}
          selectedProjectId={selectedProjectId}
          setSelectedProjectId={updateProjectId}
        />
      )}
      <AnimatePresence>
        {selectedProjectId && (
          <motion.div
            initial={{
              top: '50%',
              left: '50%',
              width: '0%',
              height: '0%',
              opacity: 0,
              translateX: '-50%',
              translateY: '-50%',
            }}
            animate={{
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              opacity: 1,
              translateX: 0,
              translateY: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0,
            }}
            transition={{ duration: 0.5 }}
            style={{
              position: 'fixed',
              background: 'white',
              zIndex: 190,
            }}
          />
        )}
      </AnimatePresence>
    </main>
  );
};

export default Home;

const Background = styled.div`
  color: black;
  height: 100%;
`;

const HelloContainer = styled.div`
  background: var(--color-primary);
  position: relative;
  color: white;
  height: 150px;
  display: flex;
  align-items: center;
  overflow: hidden;

  h1 {
    translate: 0 1px;
    position: absolute;
    left: -2rem;
    font-size: 15rem;
    font-family: 'acier-bat-noir', sans-serif;
    font-weight: 400;
    font-style: normal;
    white-space: nowrap;
  }

  @media (max-width: 800px) {
    height: 95px;

    h1 {
      font-size: 8rem;
    }
  }
`;

const LayoutContainer = styled.div`
  padding: 0 var(--side-padding);

  @media (max-width: 800px) {
    padding: 0 10vw;
  }
`;

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45rem;
  background: white;
  position: relative;

  figure {
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 250px;
    height: 250px;
    overflow: hidden;
    border-radius: 50%;
    outline: 1.5rem solid var(--color-white);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    translate: -50% 50%;

    img {
      object-fit: cover;
    }
  }

  @media (max-width: 800px) {
    figure {
      width: 200px;
      height: 200px;
      outline: 1rem solid var(--color-white);
    }
  }
`;

const ScreenContainer = styled.div`
  --color1: #f0f0f0;
  --color2: #e0e0e0;
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-tertiary-dark);
  z-index: 1;
  overflow: hidden;

  div {
    position: absolute;
    width: 40rem;
    height: 40rem;
    border-radius: 50%;
    background-color: var(--color-primary-dark);
    transition: translate 1s;
    z-index: 1;

    &:nth-child(1) {
      width: 15rem;
      height: 15rem;
      background-color: var(--color-primary);
      z-index: 3;
    }

    &:nth-child(2) {
      width: 30rem;
      height: 30rem;
      background-color: var(--color-tertiary);
      z-index: 2;
    }
  }
`;

const TitleContainer = styled(LayoutContainer)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  mix-blend-mode: screen;
  background-color: var(--color-white);
  z-index: 2;

  h1 {
    font-size: 8rem;
    font-family: 'acier-bat-solid', sans-serif;
    font-weight: 400;
    font-style: normal;
    z-index: 20;
    position: relative;
  }

  p {
    font-size: var(--large-text);

    span {
      opacity: 0;
      transform: translateY(10%);
      display: inline-block;
      animation: rise 300ms cubic-bezier(0.87, 0, 0.04, 1) 200ms 1 forwards;

      &:nth-child(2) {
        animation-delay: 200ms;
      }
      &:nth-child(3) {
        animation-delay: 400ms;
      }
      &:nth-child(4) {
        animation-delay: 600ms;
      }
      &:nth-child(5) {
        animation-delay: 800ms;
      }
      &:nth-child(6) {
        animation-delay: 1000ms;
      }
    }
  }

  @media (max-width: 1200px) {
    h1 {
      font-size: 4rem;
    }
  }

  @media (max-width: 800px) {
    h1 {
      font-size: clamp(2rem, 10vw, 4rem);
    }

    p {
      font-size: clamp(0.9rem, 4vw, 1.2rem);
    }
  }
`;

const generateAnimationDelays = (count, baseDelay = 1200, step = 200) => {
  let styles = '';
  for (let i = 1; i <= count; i++) {
    styles += `
      &:nth-child(${i}) {
        animation-delay: ${baseDelay + step * i}ms;
      }
    `;
  }
  return styles;
};

const SpecialitiesContainer = styled(LayoutContainer)`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10rem;
  padding-top: 15rem;
  padding-bottom: 30vh;

  font-size: var(--large-text);

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  p {
    color: var(--color-secondary);
    font-size: inherit;
  }

  ul {
    display: flex;
    gap: 5rem;
    flex-wrap: wrap;
    justify-content: center;
    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 700;
      white-space: nowrap;

      animation: bob 5200ms ease-in-out 1200ms infinite;

      ${generateAnimationDelays(6)}

      svg {
        display: inline-block;
        flex-shrink: 0;
      }
    }
  }

  @media (max-width: 800px) {
    p {
      font-size: clamp(1.3rem, 4vw, var(--large-text));
    }

    ul li {
      font-size: clamp(1.3rem, 4vw, var(--large-text));
    }
  }
`;
