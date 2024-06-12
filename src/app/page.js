'use client';
import Slider from '@/components/organisms/slider';
import { Contact } from '@/components/organisms/Contact';
import DetailPage from '@/components/organisms/DetailPage';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Nextjs from '@/components/icons/Nextjs';
import { CursorArrowIcon, PersonIcon } from '@radix-ui/react-icons';

const projectData = [
  {
    id: '1',
    title: 'Maps.amsterdam proposal',
    date: new Date('2024-01-25'),
    technology: ['SvelteKit', 'Leaflet'],
    description:
      'This project was made for the bike traffic visualisation of Amsterdam. The proposal was for a route planner with in-depth detail for all the obstacles on that route.',
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
      'This project was made to visualise the launch timeline of SpaceX. The timeline is interactive and shows interesting figures in graphs.',
    images: ['/spacex.jpg', '/spacex2.jpg', '/spacex3.jpg'],
    external: 'https://tech-track-23-24-nine.vercel.app/ ',
  },
  {
    id: '3',
    title: 'Chess.com clone',
    date: new Date('2022-12-16'),
    technology: ['Vanilla JS'],
    description:
      'This project was made to clone the chess.com website. It features a chess board (working for singleplayer), as well as the front page of the website.',
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
      'This project was made to prototype a music studio app. The app has a desktop version and a mobile version, both with a different layout and function. The desktop is made to manage the studio session, while the mobile version belongs to a musician to manage his/her own sound.',
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

  return (
    <main style={{ position: 'relative' }}>
      {showBackground && (
        <Background>
          <HelloContainer>
            <h1>HELLO</h1>
          </HelloContainer>
          <HeroContainer>
            <TitleContainer>
              <p>
                My name is <strong>Tim van Ingen</strong>, and I&apos;m a
              </p>
              <h1>CREATIVE FRONT-END DEVELOPER</h1>
            </TitleContainer>
          </HeroContainer>
          <SpecialitiesContainer>
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
                <PersonIcon
                  height={'1.3rem'}
                  width={'1.3rem'}
                />
                User Experience Design
              </li>
            </ul>
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
  overflow: hidden;
  display: flex;
  align-items: center;

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
      font-size: 10rem;
    }
  }
`;

const LayoutContainer = styled.div`
  padding: 0 var(--side-padding);

  @media (max-width: 800px) {
    padding: 0 10vw;
  }
`;

const HeroContainer = styled(LayoutContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42rem;
  background: white;
`;

const TitleContainer = styled.section`
  h1 {
    font-size: 6rem;
    font-family: 'acier-bat-solid', sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  p {
    font-size: var(--large-text);
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

const SpecialitiesContainer = styled(LayoutContainer)`
  color: white;
  display: flex;
  gap: 0.5rem;
  padding-top: 15rem;
  padding-bottom: 30vh;

  font-size: var(--large-text);

  p {
    color: var(--color-secondary);
    font-size: inherit;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 700;
      white-space: nowrap;
      svg {
        display: inline-block;
        flex-shrink: 0;
      }
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 1rem;

    p {
      font-size: clamp(1.3rem, 4vw, var(--large-text));
    }

    ul li {
      font-size: clamp(1.3rem, 4vw, var(--large-text));
      white-space: normal;
    }
  }
`;
