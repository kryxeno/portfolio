'use client';

import { returnSummationText } from '@/utils/text';
import React from 'react';
import styled from 'styled-components';
import Move from '../icons/Move';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLinkIcon } from '@radix-ui/react-icons';

export const Project = ({
  row,
  column,
  project,
  expand = true,
  selectedProjectId,
  setSelectedProjectId,
}) => {
  return (
    <Wrapper
      $row={row}
      $column={column}
      $expand={expand}
      $selected={selectedProjectId === project.id}
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
              {project.external ? (
                <Link
                  href={project.external}
                  target="_blank"
                >
                  {project.title}
                  <ExternalLinkIcon
                    width="2.5rem"
                    height="2.5rem"
                    color="black"
                  />
                </Link>
              ) : (
                project.title
              )}
              {expand && <Move size="3rem" />}
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
            )}
            <p>{project.description}</p>
          </Content>
        </>
      )}
    </Wrapper>
  );
};

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
      rgb(255, 255, 255, 0.6) 90%
    );
    z-index: -1;
  }

  &::after {
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
  }

  header h3 {
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      color: var(--color-black);
    }

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
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
