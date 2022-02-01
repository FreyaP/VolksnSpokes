import { graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Values from '../components/Values';
import SEO from '../components/SEO';

function compareOrder(a, b) {
  return parseInt(a.props.about.order) - parseInt(b.props.about.order);
}
const PageStyles = styled.div`
  background: var(--dark);
  padding: 10rem 0;
`;
const HeadingStyles = styled.div`
  padding: 0 20rem;
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
  @-webkit-keyframes fadeIn {
    from {
      opacity: 0.3;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0.3;
    }
    to {
      opacity: 1;
    }
  }
  margin: 15rem 5rem;
  display: grid;
  gap: 15rem 3em;
  grid-template-columns: 1fr 1fr;
  .gatsby-image-wrapper {
    max-height: 100%;
    max-width: 800px;
    border-radius: 20% 50% 20% 10%;
    border: 1px solid var(--dark);
  }

  .slider {
    height: 500px;
    width: auto;
    overflow: hidden;
  }
  .slider:hover {
    .top {
      display: none;
      -webkit-animation: fadeIn 1s ease-in-out;
      animation: fadeIn 1s ease-in-out;
    }
    .hover {
      display: block;
      -webkit-animation: fadeIn 1s ease-in-out;
      animation: fadeIn 1s ease-in-out;
    }
  }
  .hover {
    display: none;
  }
`;
const SingleAboutStyles = styled.div`
  padding: 2rem;
  align-self: center;
  h3 {
    color: var(--secondary);
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
      <div className="slider">
        <Img fluid={about.image.asset.fluid} className="top" />
        <Img fluid={about.hover_image.asset.fluid} className="hover" />
      </div>
    </>
  );
}

export default function AboutPage({ data }) {
  const aboutQs = data.about.nodes;
  return (
    <>
      <SEO title="Our Story" />
      <PageStyles>
        <HeadingStyles>
          <h2>Our Story</h2>
          <h3>Who We Are</h3>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            pellentesque mi ac urna pretium imperdiet. Mauris ut ipsum metus. Ut
            feugiat lectus id vestibulum consectetur.
          </h4>
        </HeadingStyles>
        <Values />
        <AboutGrid>
          {aboutQs
            .map((about) => <SingleAboutQ about={about} key={about.id} />)
            .sort(compareOrder)}
        </AboutGrid>
      </PageStyles>
    </>
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
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
        hover_image {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
