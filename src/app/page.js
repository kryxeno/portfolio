'use client';
import styled from 'styled-components';
import Slider from '@/components/organisms/slider';

export default function Home() {
  return (
    <main>
      <Background>
        <HelloContainer>
          <h1>HELLO</h1>
        </HelloContainer>
        <HeroContainer>
          <TitleContainer>
            <p>
              Hello! my name is <strong>Tim van Ingen</strong>, and
              I&apos;m a
            </p>
            <h1>CREATIVE FRONT-END DEVELOPER</h1>
          </TitleContainer>
        </HeroContainer>
        <SpecialitiesContainer>
          <p>I specialize in:</p>
          <ul>
            <li>Next.js / React</li>
            <li>Interface Development</li>
            <li>User Experience Design</li>
          </ul>
        </SpecialitiesContainer>
        <Slider />
      </Background>
    </main>
  );
}

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
    position: absolute;
    left: -2rem;
    font-size: 15rem;
    font-family: 'acier-bat-noir', sans-serif;
    font-weight: 400;
    font-style: normal;
  }
`;

const LayoutContainer = styled.div`
  padding: 0 var(--side-padding);
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
`;

const SpecialitiesContainer = styled(LayoutContainer)`
  color: white;
  display: flex;
  gap: 0.5rem;
  padding-top: 15rem;
  padding-bottom: 60vh;

  font-size: var(--large-text);

  p {
    color: var(--color-secondary);
    font-size: inherit;
  }

  ul li {
    font-weight: 700;
  }
`;
