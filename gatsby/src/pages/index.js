import { graphql, Link } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { GiCarWheel } from 'react-icons/gi';
import Hero from '../components/Hero';
import SEO from '../components/SEO';
import SingleService from '../components/SingleService';

const PageStyles = styled.div`
  background: var(--dark);
`;
const ImageStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  .gatsby-image-wrapper {
    max-height: 40rem;
  }
`;
const HomeServiceStyles = styled.div`
  margin-top: 10rem;
  display: grid;
  justify-items: center;
  a {
    margin-top: 7rem;
    text-transform: uppercase;
    font-weight: bold;
  }
`;
const ServiceGrid = styled.div`
  padding: 10rem 20rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem 5rem;
`;

export default function HomePage({ data }) {
  const home = data.home.nodes;

  return (
    <PageStyles>
      <SEO title="Home" />
      <Hero home={home} />
      <ImageStyles>
        <Img fluid={home[0].home_image.asset.fluid} />
        <Img fluid={home[0].second_home_image.asset.fluid} />
        <Img fluid={home[0].third_home_image.asset.fluid} />
      </ImageStyles>
      <HomeServiceStyles>
        <h2>Hot Service Deals</h2>
        <p>
          These are our highlighted services we think you need to know about
        </p>
        <Link to="/services" className="flex">
          <GiCarWheel className="button" />
          <span>See what else we do</span>
        </Link>
        <ServiceGrid>
          {home[0].home_services.map((service) => (
            <SingleService service={service} key={service.id} />
          ))}
        </ServiceGrid>
      </HomeServiceStyles>
    </PageStyles>
  );
}

export const query = graphql`
  query HomeQuery {
    home: allSanityHome {
      nodes {
        heading
        subheading
        altheading
        home_image {
          asset {
            fluid(maxWidth: 500) {
              ...GatsbySanityImageFluid
            }
          }
        }
        home_services {
          name
          id
          price
          description
          image {
            asset {
              fluid(maxWidth: 400) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
        second_home_image {
          asset {
            fluid(maxWidth: 500) {
              ...GatsbySanityImageFluid
            }
          }
        }
        third_home_image {
          asset {
            fluid(maxWidth: 500) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
