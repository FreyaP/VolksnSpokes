import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Values from '../components/Values';

const PageStyles = styled.div`
  background: var(--dark);
  padding: 10rem 20rem;
`;

const HeadingStyles = styled.div`
  margin-bottom: 10rem;
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
  p {
    color: var(--light);
  }
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem 5rem;
`;

const ServiceStyles = styled.div`
  display: grid;
  background: var(--light);
  color: var(--dark);
  .gatsby-image-wrapper {
    max-height: 300px;
  }
  p {
    padding: 0 1rem;
    text-align: center;
  }
  .price {
    color: var(--accent);
    font-size: 3rem;
  }
  h2 {
    padding: 2rem 0;
  }
`;
const ValueFooterStyles = styled.div`
  margin-top: 20rem;
  a {
    color: var(--light);
    transition: 0.75s ease-in-out;
    &:hover {
      color: var(--secondary);
    }
  }
`;

function SingleService({ service }) {
  return (
    <ServiceStyles>
      <h2>{service.name}</h2>
      <Img fluid={service.image.asset.fluid} />
      <p>{service.description}</p>
      <p className="price">${service.price}</p>
    </ServiceStyles>
  );
}

export default function ServicesPage({ data }) {
  const services = data.services.nodes;

  return (
    <PageStyles>
      <HeadingStyles>
        <h2>Services</h2>
        <h3>What we do</h3>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          pellentesque mi ac urna pretium imperdiet. Mauris ut ipsum metus. Ut
          feugiat lectus id vestibulum consectetur.
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          pellentesque mi ac urna pretium imperdiet. Mauris ut ipsum metus. Ut
          feugiat lectus id vestibulum consectetur.
        </p>
      </HeadingStyles>
      <ServiceGrid>
        {services.map((service) => (
          <SingleService service={service} key={service.id} />
        ))}
      </ServiceGrid>
      <ValueFooterStyles>
        <Link to="/about">
          <h2>See who we are</h2>
          <Values />
        </Link>
      </ValueFooterStyles>
    </PageStyles>
  );
}

export const query = graphql`
  query ServicePageQuery {
    services: allSanityServices {
      nodes {
        description
        id
        name
        price
        image {
          asset {
            fluid(maxHeight: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
