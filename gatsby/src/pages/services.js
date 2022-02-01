import React from 'react';
import { graphql, Link } from 'gatsby';
import { GiCarWheel } from 'react-icons/gi';
import styled from 'styled-components';
import Values from '../components/Values';
import SEO from '../components/SEO';
import SingleService from '../components/SingleService';

const PageStyles = styled.div`
  background: var(--dark);
  padding: 10rem 0;
`;

const HeadingStyles = styled.div`
  padding: 0 20rem;
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
  padding: 0 5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4rem 5rem;
`;

const ValueFooterStyles = styled.div`
  background: var(--light);
  margin-top: 20rem;
  padding-top: 10rem;
  display: grid;
  justify-items: center;
  a {
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: -10rem;
    color: var(--dark);
    &:hover {
      color: var(--secondary);
    }
  }
`;

export default function ServicesPage({ data }) {
  const services = data.services.nodes;

  return (
    <>
      <SEO title="Services" />
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
          <Link to="/about" className="flex">
            <GiCarWheel className="button" />
            <span>Learn more about us</span>
          </Link>
          <Values />
        </ValueFooterStyles>
      </PageStyles>
    </>
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
