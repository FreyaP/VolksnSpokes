import React from 'react';
import { GiBeveledStar, GiCelebrationFire } from 'react-icons/gi';
import { ImHipster } from 'react-icons/im';

import styled from 'styled-components';

const ValueStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  text-align: center;
  margin-top: 12rem;

  svg {
    font-size: 10rem;
  }
  h5 {
    margin-top: 2rem;
  }
  p {
    padding: 1rem 5rem;
  }
`;

export default function Values() {
  return (
    <ValueStyles>
      <div>
        <GiBeveledStar />
        <h5>Honest</h5>
        <p>We are genuine and hardworking</p>
      </div>
      <div>
        <ImHipster />
        <h5>Friendly</h5>
        <p>We are sympathetic and approachable</p>
      </div>
      <div>
        <GiCelebrationFire />
        <h5>Passionate</h5>
        <p>We are fun and we love bikes &amp; biking!</p>
      </div>
    </ValueStyles>
  );
}
