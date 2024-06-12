'use client';

import { returnSummationText } from '@/utils/text';
import React, { useRef } from 'react';
import styled from 'styled-components';
import Move from '../icons/Move';
import Image from 'next/image';
import { Configure } from 'grommet-icons';

export const Project = ({
  row,
  column,
  project,
  expand = true,
  selectedProjectId,
  setSelectedProjectId,
}) => {
  const cardRef = useRef(null);

  const selected = selectedProjectId === project.id;

  return (
    <Wrapper
      $row={row}
      $column={column}
      $expand={expand}
      $selected={selected}
      ref={cardRef}
      onClick={() =>
        expand ? setSelectedProjectId(project.id) : undefined
      }
    >
      {project && project.images && (
        <Image
          src={project.images[0]}
          alt="Project image"
          fill={true}
          style={{ zIndex: '-2', objectFit: 'cover' }}
        />
      )}
      {project && (
        <>
          <header>
            <h3>
              {project.title}
              {expand && <Move size="2.5rem" />}
            </h3>
            <p>
              Delivered on{' '}
              {project.date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </header>
          <Content>
            {project.technology && (
              <div>
                <Configure />
                <p>
                  Made using{' '}
                  {project.technology.map((tech, index) => {
                    return (
                      <React.Fragment key={index}>
                        <strong>{tech}</strong>
                        {returnSummationText(project.technology, index)}
                      </React.Fragment>
                    );
                  })}
                </p>
              </div>
            )}
            <p>{project.description}</p>
          </Content>
        </>
      )}
    </Wrapper>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  transition: opacity 0.3s;

  > div {
    display: flex;
    gap: 0.5rem;
  }

  @media (max-width: 800px) {
    padding-bottom: 10rem;
    > :last-child {
      display: none;
    }
  }
`;

const Wrapper = styled.section`
  grid-column: ${(props) => props.$column} / span 2;
  grid-row: ${(props) => props.$row} / span 1;
  transition: scale 0.3s;
  padding: 1.5rem 2rem;

  ${(props) => props.$expand && `cursor: pointer;`}

  position: relative;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${(props) =>
    props.$selected &&
    `
      z-index: 100;
      cursor: default;
    `}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgb(255, 255, 255) 30%,
      rgb(255, 255, 255, 0.3) 90%
    );
    z-index: -1;
    transition: opacity 0.3s;
  }

  header h3 {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    color: var(--color-black);

    svg {
      transition: scale 0.3s;
    }
  }

  &:hover {
    scale: 1.02;
    h3 > svg {
      scale: 1.2;
    }
  }

  @media (max-width: 1200px) {
    h3 {
      font-size: clamp(1.2rem, 2vw, var(--large-text));
    }

    p {
      font-size: clamp(1.1rem, 1.8vw, 1.2rem);
    }
  }
`;
