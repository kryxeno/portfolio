'use client';
import styled from 'styled-components';
import { Project } from './Project';
import Image from 'next/image';

export const HorizontalBars = ({
  projects,
  selectedProjectId,
  setSelectedProjectId,
}) => {
  return (
    <HorizontalBarsContainer>
      <GridGroup>
        <Project
          project={projects[1]}
          selectedProjectId={selectedProjectId}
          setSelectedProjectId={setSelectedProjectId}
          row={'1'}
          column={'1'}
        />
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
            style={{ translate: '9rem 6rem' }}
          />
          <Image
            src={'/piano.svg'}
            alt="Guitar"
            width={200}
            height={200}
            style={{ translate: '2rem -1rem', rotate: '100deg' }}
          />
        </Hobby>
        <Project
          project={{
            title: 'Taakmeneertjes (a show on youtube)',
            date: new Date('2024-03-05'),
            description:
              'I made a show on youtube with my friends. It is the format of a show called taskmaster. We did this for fun and to learn how to make a show. It was a lot of fun to make and we learned a lot.',
            images: ['/taakmeneertjes.jpg'],
            external: 'https://www.youtube.com/watch?v=J_6XQ_izPl8&t=41s',
          }}
          selectedProjectId={selectedProjectId}
          setSelectedProjectId={setSelectedProjectId}
          expand={false}
          row={'1'}
          column={'3'}
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
            style={{ translate: '0rem 12rem', rotate: '-30deg' }}
          />
          <Image
            src={'/desktop.png'}
            alt="Guitar"
            width={250}
            height={250}
            style={{ translate: '12rem -1rem', rotate: '10deg' }}
          />
        </Hobby>
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
        <Project
          project={projects[4]}
          selectedProjectId={selectedProjectId}
          setSelectedProjectId={setSelectedProjectId}
          row={'1'}
          column={'2'}
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
            style={{ translate: '9rem 6rem', rotate: '200deg' }}
          />
          <Image
            src={'/piano.svg'}
            alt="Guitar"
            width={200}
            height={200}
            style={{ translate: '2rem -1rem', rotate: '200deg' }}
          />
        </Hobby>
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
            style={{ translate: '-3rem 9rem', rotate: '120deg' }}
          />
          <Image
            src={'/d20.png'}
            alt="Guitar"
            width={250}
            height={250}
            style={{ translate: '12rem -1rem', rotate: '10deg' }}
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
`;

const GridGroup = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr;
  gap: 2.5rem;
  height: 100%;
  width: 200vh;
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
`;

const CategoryTitle = styled.h1`
  color: var(--color-white);
  font-size: 19vh;
  font-family: 'acier-bat-noir', sans-serif;
  font-weight: 400;
  font-style: normal;
  white-space: nowrap;
  position: absolute;
  top: -0.5rem;
  translate: -15rem;
  rotate: -90deg;
  translate: -65%;
  top: 30.5vh;
`;
