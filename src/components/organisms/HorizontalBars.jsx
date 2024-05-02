'use client';
import styled from 'styled-components';

export const HorizontalBars = () => {
  return (
    <HorizontalBarsContainer>
      <GridGroup>
        <Project
          row={'1'}
          column={'1'}
        />
        <Project
          row={'2'}
          column={'2'}
        ></Project>
        <Hobby
          row={'2'}
          column={'1'}
        ></Hobby>
        <Hobby
          row={'1'}
          column={'3'}
          large
        ></Hobby>
        <Hobby
          row={'2'}
          column={'4'}
        ></Hobby>
      </GridGroup>
      <GridGroup>
        <CategoryTitle>Designed</CategoryTitle>
        <Project
          row={'2'}
          column={'1'}
        />
        <Project
          row={'1'}
          column={'2'}
        ></Project>
        <Hobby
          row={'1'}
          column={'1'}
        ></Hobby>
        <Hobby
          row={'2'}
          column={'3'}
        ></Hobby>
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
  grid-column: ${(props) => props.column} / span 2;
  grid-row: ${(props) => props.row} / span 1;
  transition: scale 0.3s;

  &:hover {
    scale: 1.05;
  }
`;

const Project = styled(Cell)`
  background-color: var(--color-white);
`;

const Hobby = styled(Cell)`
  grid-column: ${(props) => props.column} / span
    ${(props) => (props.large ? 2 : 1)};
  background-color: grey;
`;

const CategoryTitle = styled.h1`
  color: var(--color-tertiary);
  font-size: 11rem;
  font-family: 'acier-bat-noir', sans-serif;
  font-weight: 400;
  font-style: normal;
  white-space: nowrap;
  position: absolute;
  top: -0.5rem;
  translate: -15rem;
  writing-mode: sideways-lr;
  text-orientation: mixed;
`;
