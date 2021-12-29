import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import bike from '../assets/images/neon-bike.png';

const HeroStyles = styled.div`
  margin-top: 0;
  position: relative;
  width: auto;

  img {
    width: 50vw;
    height: auto;
    top: 0;
  }
`;

export default function Hero() {
  return (
    <HeroStyles>
      <img src={bike} alt="neon bike" />
      <div>
        <h1>A little less to worry about</h1>
        <h2>Mobile bike repair, service and advice</h2>
        <h3>Tuning bikes along the Sea to Sky, BC</h3>
        <Link className="button">Book your service</Link>
      </div>
    </HeroStyles>
  );
}
