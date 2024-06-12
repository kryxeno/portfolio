import { returnSummationText } from '@/utils/text';
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const DefaultPage = ({
  projects,
  selectedProjectId,
  setSelectedProjectId,
}) => {
  const project = projects.find(
    (project) => project.id === selectedProjectId
  );

  window.scrollTo(0, 0);

  return (
    <Wrapper>
      <header>
        <h3>
          {project.title}
          <svg
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 253.35 253.35"
            onClick={() => setSelectedProjectId(null)}
            style={{ flexShrink: 0, width: '1.5rem', height: '1.5rem' }}
          >
            <path
              d="M150.77,90.91c0,6.45,5.23,11.67,11.67,11.67h64.19c6.45,0,11.67-5.23,11.67-11.67,0-6.45-5.23-11.67-11.67-11.67h-34.18s57.1-57.1,57.1-57.1c5.06-5.06,5.06-13.28,0-18.34-5.06-5.06-13.28-5.06-18.34,0l-57.1,57.1V26.72c0-6.45-5.23-11.67-11.67-11.67-6.45,0-11.67,5.23-11.67,11.67v64.19ZM3.8,231.21c-5.06,5.06-5.06,13.28,0,18.34,5.06,5.06,13.28,5.06,18.34,0l57.1-57.1v34.18c0,6.45,5.23,11.67,11.67,11.67,6.45,0,11.67-5.22,11.67-11.67v-64.19c0-6.45-5.23-11.67-11.67-11.67H26.72c-6.45,0-11.67,5.23-11.67,11.67,0,6.45,5.23,11.67,11.67,11.67h34.18S3.8,231.21,3.8,231.21ZM249.55,249.55c-5.06,5.06-13.28,5.06-18.34,0l-57.1-57.1v34.18c0,6.45-5.23,11.67-11.67,11.67-6.45,0-11.67-5.22-11.67-11.67v-64.19c0-6.45,5.23-11.67,11.67-11.67h64.19c6.45,0,11.67,5.23,11.67,11.67,0,6.45-5.23,11.67-11.67,11.67h-34.18s57.1,57.1,57.1,57.1c5.06,5.06,5.06,13.28,0,18.34ZM26.72,79.24h34.18S3.8,22.14,3.8,22.14c-5.06-5.06-5.06-13.28,0-18.34s13.28-5.06,18.34,0l57.1,57.1V26.72c0-6.45,5.23-11.67,11.67-11.67,6.45,0,11.67,5.23,11.67,11.67v64.19c0,6.45-5.23,11.67-11.67,11.67H26.72c-6.45,0-11.67-5.23-11.67-11.67,0-6.45,5.23-11.67,11.67-11.67Z"
              fill="#000"
              fillRule="evenodd"
              strokeWidth="0"
            />
          </svg>
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
      <p>{project.description}</p>
      {project.external && (
        <ButtonGroup>
          <ButtonLink
            href={project.external}
            color={'var(--color-tertiary)'}
            target="_blank"
          >
            Go to website
            <ExternalLinkIcon
              width={'2rem'}
              height={'2rem'}
            />
          </ButtonLink>
        </ButtonGroup>
      )}
      <ImageGroup>
        {project.images.map((image, index) => {
          return (
            <ImageWrapper key={index}>
              <Image
                src={image}
                alt="Project image"
                fill={true}
                style={{ zIndex: '-2', objectFit: 'cover' }}
              />
            </ImageWrapper>
          );
        })}
      </ImageGroup>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  inset: 0;
  width: 100%;
  z-index: 200;
  background-color: var(--color-white);
  color: var(--color-black);

  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem var(--side-padding);
  padding-top: 6rem;

  header h3 {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
    svg {
      width: 3rem;
      height: 3rem;
      cursor: pointer;
      transition: scale 0.3s;

      &:hover {
        scale: 1.1;
      }
    }
  }

  @media (max-width: 800px) {
    padding: 3rem 8vw;

    header h3 {
      font-size: clamp(1.2rem, 5vw, var(--large-text));
    }

    p {
      font-size: clamp(1.1rem, 4vw, 1.2rem);
    }
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
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  z-index: -1;

  img {
    position: relative !important;
    max-height: 60rem;
    object-fit: contain !important;
  }
`;

const ImageGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-x: auto;
  padding: 2rem;
  margin: 0 -1rem;
  background-color: var(--color-black);
  z-index: -1;
  margin-top: 5rem;

  @media (max-width: 800px) {
    padding: 4rem 0;
    margin: 4rem -8vw 0rem;
  }
`;

export default DefaultPage;
