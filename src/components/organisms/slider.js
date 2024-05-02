'use client';
import styled from 'styled-components';
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { HorizontalBars } from './HorizontalBars';

export default function Slider() {
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
    ['0', '-700vh']
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
        }}
      >
        <RecentProjectText>
          My most recent public project:
        </RecentProjectText>
      </motion.div>
      <MainSliderMotion
        style={{ translateX: leftOffset }}
        className={isAnchorDropped ? 'drop-anchor' : 'anchored'}
        ref={ref}
      >
        <MainProjectContainer>
          <h1>PROJECTS</h1>
          <LargeProjectCard>
            <LargeProjectContent>
              <header>
                <h3>Project Title</h3>
                <p>Date</p>
              </header>
              <p>
                Made using <strong>Technology</strong>
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </LargeProjectContent>
            <LargeProjectImage>
              <Image
                src="https://via.placeholder.com/300x300"
                alt="Project"
                fill={true}
              />
            </LargeProjectImage>
          </LargeProjectCard>
        </MainProjectContainer>
        <HorizontalBars />
      </MainSliderMotion>
      <HorizontalReference ref={horizontalRef} />
    </SliderContainer>
  );
}

const LayoutContainer = styled.div``;

const SliderContainer = styled.div`
  padding-top: 30vh;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding-bottom: 800vh;
  position: relative;
  overflow: hidden;
`;

const RecentProjectText = styled.h2`
  color: var(--color-white);
  width: 100%;
  text-align: center;
  font-size: 3rem;
  font-weight: 400;
  padding: 3rem 0;
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
  &.anchored {
    top: 35vh;
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

  &.anchored {
    left: var(--side-padding);
  }
`;

const LargeProjectContent = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const LargeProjectImage = styled.figure`
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const HorizontalReference = styled.div`
  position: absolute;
  top: calc(50vh - 15vh);
  width: 10rem;
  height: 800vh;
`;
