'use client';
import styled from 'styled-components';
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { HorizontalBars } from './HorizontalBars';
import { returnSummationText } from '@/utils/text';
import Move from '../icons/Move';
import Link from 'next/link';
import { ExternalLinkIcon } from '@radix-ui/react-icons';

const Slider = ({
  projects,
  selectedProjectId,
  setSelectedProjectId,
  isMobile,
}) => {
  const [displayStyle, setDisplayStyle] = useState('flex');
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end'],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setDisplayStyle(latest === 1 ? 'none' : 'flex');
  });

  const [isAnchorDropped, setIsAnchorDropped] = useState(false);
  const horizontalRef = useRef(null);

  const { scrollYProgress: horizontalScrollYProgress } = useScroll({
    target: horizontalRef,
    offset: ['start', 'end'],
  });

  const leftOffset = useTransform(
    horizontalScrollYProgress,
    [0.02, 1],
    ['0', '-750vh']
  );

  useMotionValueEvent(horizontalScrollYProgress, 'change', (latest) => {
    setIsAnchorDropped(latest !== 0 ? true : false);
  });

  return (
    <SliderContainer>
      <motion.div
        className={'drop-anchor'}
        style={{
          scale: scale,
          width: '100%',
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          opacity: opacity,
          display: displayStyle,
          color: 'white',
          zIndex: -100,
        }}
      >
        {!isAnchorDropped && (
          <RecentProjectText>
            My most recent public project:
          </RecentProjectText>
        )}
      </motion.div>
      <MainSliderMotion
        style={{ translateX: !isMobile ? leftOffset : 0 }}
        className={
          isMobile ? '' : isAnchorDropped ? 'drop-anchor' : 'anchored'
        }
        ref={ref}
      >
        {!isMobile && (
          <MainProjectContainer>
            <h1>PROJECTS</h1>
            <LargeProjectCard
              $selected={selectedProjectId === projects[0].id}
            >
              <LargeProjectContent>
                <header>
                  <h3>{projects[0].title}</h3>
                  <p>
                    Delivered on{' '}
                    {projects[0].date.toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </header>
                <p>
                  Made using{' '}
                  {projects[0].technology.map((tech, index) => {
                    return (
                      <React.Fragment key={index}>
                        <strong>{tech}</strong>
                        {returnSummationText(
                          projects[0].technology,
                          index
                        )}
                      </React.Fragment>
                    );
                  })}
                </p>
                <p>{projects[0].description}</p>
                <ButtonGroup>
                  <BaseButton
                    color={'var(--color-primary)'}
                    onClick={() => setSelectedProjectId(projects[0].id)}
                  >
                    More details
                    <Move size={'1.5rem'} />
                  </BaseButton>
                  <ButtonLink
                    href={projects[0].external}
                    color={'var(--color-tertiary)'}
                    target="_blank"
                  >
                    Go to website
                    <ExternalLinkIcon
                      width={'1.5rem'}
                      height={'1.5rem'}
                    />
                  </ButtonLink>
                </ButtonGroup>
              </LargeProjectContent>
              <LargeProjectImage
                onClick={() => setSelectedProjectId(projects[0].id)}
              >
                <Move size="3rem" />
                <Image
                  src={projects[0].images[1]}
                  alt="Project"
                  fill={true}
                />
              </LargeProjectImage>
            </LargeProjectCard>
          </MainProjectContainer>
        )}
        <HorizontalBars
          projects={projects}
          selectedProjectId={selectedProjectId}
          setSelectedProjectId={setSelectedProjectId}
          isMobile={isMobile}
        />
      </MainSliderMotion>
      <HorizontalReference ref={horizontalRef} />
    </SliderContainer>
  );
};

export default Slider;

const LayoutContainer = styled.div``;

const SliderContainer = styled.div`
  padding-top: 30vh;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding-bottom: 790vh;
  position: relative;
  overflow: hidden;

  @media (max-width: 800px) {
    padding-bottom: 30vh;
  }
`;

const RecentProjectText = styled.h2`
  position: relative;
  color: var(--color-white);
  width: 100%;
  text-align: center;
  font-size: 3rem;
  font-weight: 400;
  padding: 3rem 0;
  user-select: none;

  @media (max-width: 800px) {
    font-size: 1.6rem;
  }
`;

const MainProjectContainer = styled(LayoutContainer)`
  position: relative;
  height: 80vh;

  h1 {
    position: absolute;
    bottom: -9rem;
    right: -15rem;
    color: white;
    font-size: 14rem;
    font-family: 'acier-bat-noir', sans-serif;
    font-weight: 400;
    font-style: normal;
  }
`;

const MainSliderMotion = styled(motion.div)`
  padding-top: 10vh;
  width: 100%;

  &.anchored {
    top: 35vh;
  }
`;

const LargeProjectContent = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (max-width: 1200px) {
    padding: 2rem;

    h3 {
      font-size: clamp(1.2rem, 2vw, var(--large-text));
    }

    p {
      font-size: clamp(1.1rem, 1.8vw, 1.2rem);
    }
  }
`;

const LargeProjectImage = styled.figure`
  overflow: hidden;
  position: relative;
  box-shadow: inset 0px 0px 31px 0px rgba(0, 0, 0, 0.75);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  svg {
    position: absolute;
    right: 2rem;
    top: 2rem;
    z-index: 1;
    transition: scale 0.3s;
  }

  &:hover {
    cursor: pointer;
    svg {
      scale: 1.2;
    }
  }
`;

const LargeProjectCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: calc(100% - var(--side-padding) * 2);
  background-color: var(--color-white);
  position: relative;
  z-index: 1;
  height: 100%;
  margin: 0 auto;
  transition: scale 0.3s;

  ${(props) =>
    props.$selected &&
    `
      z-index: 100;
      cursor: default;
    `}

  /* &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--color-white);
    z-index: 500;
    opacity: 0;
    transition:
      scale 1.3s,
      opacity 0.5s;
    pointer-events: none;

    ${(props) =>
    props.$selected &&
    `
        pointer-events: unset;
        opacity: 1;
        scale: 4;
      `}
  } */

  &:hover {
    scale: 1.02;
  }

  &.anchored {
    left: var(--side-padding);
  }
`;

const HorizontalReference = styled.div`
  position: absolute;
  top: calc(50vh - 15vh);
  width: 10rem;
  height: 800vh;
  user-select: none;
  z-index: -1000;

  @media (max-width: 800px) {
    top: 0;
  }
`;

const BaseButton = styled.button`
  background-color: ${(props) => props.color};
  color: var(--color-white);
  height: 4rem;
  padding: 0 1rem;
  font-size: 1.4rem;
  border: none;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: var(--color-primary-dark);
  }

  @media (max-width: 1200px) {
    font-size: clamp(1rem, 2vw, 1.4rem);
    height: 3rem;
    padding: 0 0.8rem;
  }
`;

const ButtonLink = styled(Link)`
  background-color: ${(props) => props.color};
  color: var(--color-white);
  height: 4rem;
  padding: 0 1rem;
  font-size: 1.4rem;
  border: none;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--color-tertiary-dark);
  }

  @media (max-width: 1200px) {
    font-size: clamp(1rem, 2vw, 1.4rem);
    height: 3rem;
    padding: 0 0.8rem;
  }
`;

const ButtonGroup = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
