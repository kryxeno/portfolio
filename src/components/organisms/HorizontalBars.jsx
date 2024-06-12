'use client';
import styled from 'styled-components';
import { Project } from './Project';
import Image from 'next/image';

export const HorizontalBars = ({
  projects,
  selectedProjectId,
  setSelectedProjectId,
  isMobile,
}) => {
  return (
    <HorizontalBarsContainer>
      <GridGroup>
        {isMobile && (
          <>
            <Project
              project={projects[0]}
              selectedProjectId={selectedProjectId}
              setSelectedProjectId={setSelectedProjectId}
              row={'1'}
              column={'1'}
            />
            <CategoryTitle>Projects</CategoryTitle>
          </>
        )}
        <Project
          project={projects[1]}
          selectedProjectId={selectedProjectId}
          setSelectedProjectId={setSelectedProjectId}
          row={'1'}
          column={'1'}
        />
        <Hobby
          $row={'2'}
          $column={'4'}
          $color={'var(--color-primary)'}
        >
          <Image
            src={'/controller.svg'}
            alt="Guitar"
            width={200}
            height={200}
            style={{ bottom: '-5rem', left: '0', rotate: '-30deg' }}
          />
          <Image
            src={'/desktop.png'}
            alt="Guitar"
            width={250}
            height={250}
            style={{ top: '-2rem', right: '-2rem', rotate: '10deg' }}
          />
        </Hobby>
        <Project
          project={projects[2]}
          selectedProjectId={selectedProjectId}
          setSelectedProjectId={setSelectedProjectId}
          row={'2'}
          column={'2'}
        />
        <Hobby
          $row={'2'}
          $column={'1'}
          $color={'var(--color-tertiary)'}
        >
          <Image
            src={'/guitar.png'}
            alt="Guitar"
            width={300}
            height={300}
            style={{ bottom: '-5rem', right: '-1rem' }}
          />
          <Image
            src={'/piano.svg'}
            alt="Guitar"
            width={200}
            height={200}
            style={{ top: '-2rem', left: '1rem', rotate: '100deg' }}
          />
        </Hobby>
        <Project
          project={projects[5]}
          selectedProjectId={selectedProjectId}
          setSelectedProjectId={setSelectedProjectId}
          row={'1'}
          column={'3'}
        />
      </GridGroup>
      <GridGroup>
        <CategoryTitle>Designed</CategoryTitle>
        <Project
          project={projects[3]}
          selectedProjectId={selectedProjectId}
          setSelectedProjectId={setSelectedProjectId}
          row={'2'}
          column={'1'}
        />
        <Hobby
          $row={'1'}
          $column={'1'}
          $color={'var(--color-tertiary)'}
        >
          <Image
            src={'/guitar.png'}
            alt="Guitar"
            width={300}
            height={300}
            style={{ bottom: '-7rem', right: '0', rotate: '200deg' }}
          />
          <Image
            src={'/piano.svg'}
            alt="Guitar"
            width={200}
            height={200}
            style={{ top: '-2rem', left: '0', rotate: '200deg' }}
          />
        </Hobby>
        <Project
          project={projects[4]}
          selectedProjectId={selectedProjectId}
          setSelectedProjectId={setSelectedProjectId}
          row={'1'}
          column={'2'}
        />
        <Hobby
          $row={'2'}
          $column={'3'}
          $color={'var(--color-primary)'}
        >
          <Image
            src={'/hammer.png'}
            alt="Guitar"
            width={250}
            height={250}
            style={{ bottom: '-5rem', left: '0', rotate: '120deg' }}
          />
          <Image
            src={'/d20.png'}
            alt="Guitar"
            width={250}
            height={250}
            style={{ top: '-2rem', right: '-2rem', rotate: '10deg' }}
          />
        </Hobby>
      </GridGroup>
    </HorizontalBarsContainer>
  );
};

const HorizontalBarsContainer = styled.section`
  position: fixed;
  top: 10vh;
  height: 80vh;
  left: 130%;
  display: flex;
  gap: 40rem;

  @media (max-width: 800px) {
    position: relative;
    flex-direction: column;
    height: auto;
    left: 0;
    gap: 2.5rem;
    top: 0;
  }
`;

const GridGroup = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr;
  gap: 2.5rem;
  height: 100%;
  width: 200vh;

  @media (max-width: 800px) {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    @media (max-width: 800px) {
      padding: 0 5vw;
    }
  }
`;

const Cell = styled.div`
  grid-column: ${(props) => props.$column} / span 2;
  grid-row: ${(props) => props.$row} / span 1;
  transition: scale 0.3s;

  &:hover {
    scale: 1.02;
  }
`;

const Hobby = styled(Cell)`
  grid-column: ${(props) => props.$column} / span
    ${(props) => (props.$large ? 2 : 1)};
  background-color: ${(props) => props.$color ?? 'var(--color-white)'};
  position: relative;
  overflow: hidden;

  > img {
    position: absolute;
  }

  @media (max-width: 800px) {
    height: 15rem;
  }
`;

const CategoryTitle = styled.h1`
  color: var(--color-white);
  font-size: 19vh;
  font-family: 'acier-bat-noir', sans-serif;
  font-weight: 400;
  font-style: normal;
  white-space: nowrap;
  position: absolute;
  translate: -15rem;
  rotate: -90deg;
  translate: -65%;
  top: 30.5vh;

  @media (max-width: 800px) {
    position: relative;
    font-size: clamp(4rem, 14vw, 12rem);
    text-align: center;
    rotate: 0deg;
    translate: 0;
    top: 0;
    padding: 2rem 0;
  }
`;
