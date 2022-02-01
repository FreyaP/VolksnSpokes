import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

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
    color: var(--secondary);
    font-size: 3rem;
  }
  h2 {
    padding: 2rem 0;
  }
`;
export default function SingleService({ service }) {
  return (
    <ServiceStyles>
      <h2>{service.name}</h2>
      <Img fluid={service.image.asset.fluid} />
      <p>{service.description}</p>
      <p className="price">${service.price}</p>
    </ServiceStyles>
  );
}
