import { graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Values from '../components/Values';

const PageStyles = styled.div`
  background: var(--dark);
  padding: 10rem 20rem;
`;
const HeadingStyles = styled.div`
  margin-bottom: 15rem;
  h2 {
    margin-bottom: 5rem;
    color: var(--light);
    font-size: 5rem;
  }
  h3 {
    margin: 3rem 0;
    font-size: 2rem;
    text-align: start;
    color: var(--light);
  }
  h4 {
    text-align: start;
    text-transform: none;
    font-size: 3rem;
  }
`;

const AboutGrid = styled.div`
  margin: 10rem 0;
  display: grid;

  gap: 20rem 3em;
  grid-template-columns: 1fr 1fr;
  .gatsby-image-wrapper {
    max-height: 100%;
    max-width: 400px;
    border: 1px solid var(--dark);
    filter: grayscale(100%);
  }
  .second {
    grid-column: 1;
    grid-row: 2;
  }
`;
const SingleAboutStyles = styled.div`
  background: var(--accent);
  padding: 2rem;
  align-self: center;
  h3 {
    color: var(--dark);
  }
  p {
    padding: 1rem 3rem;
  }
`;

function SingleAboutQ({ about }) {
  return (
    <>
      <SingleAboutStyles>
        <h3>{about.title}</h3>
        <p>{about.paragragh}</p>
      </SingleAboutStyles>

      <Img
        fluid={about.image.asset.fluid}
        className={about.order === 2 ? 'second' : ''}
      />
    </>
  );
}

export default function AboutPage({ data }) {
  const aboutQs = data.about.nodes;
  return (
    <PageStyles>
      <HeadingStyles>
        <h2>Our Story</h2>
        <h3>Who We Are</h3>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          pellentesque mi ac urna pretium imperdiet. Mauris ut ipsum metus. Ut
          feugiat lectus id vestibulum consectetur.
        </h4>
        <Values />
      </HeadingStyles>
      <AboutGrid>
        {aboutQs.map((about) => (
          <SingleAboutQ about={about} key={about.id} />
        ))}
      </AboutGrid>
    </PageStyles>
  );
}

export const query = graphql`
  query AboutPageQuery {
    about: allSanityAbout {
      nodes {
        title
        paragragh
        order
        id
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
