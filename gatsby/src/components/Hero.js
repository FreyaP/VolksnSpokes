import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { GiCarWheel } from 'react-icons/gi';

const HeroStyles = styled.div`
  padding: 5rem;
  background: var(--dark);
  h1 {
    text-align: left;
  }
  .button {
    margin-right: 2rem;
  }
  a {
    margin-top: 7rem;
    text-transform: uppercase;
    font-weight: bold;
    width: fit-content;
    display: flex;
    align-items: center;
    &:hover {
      .button {
        background: var(--secondary);
        transform: rotate(360deg);
      }
    }
  }
`;

export default function Hero() {
  return (
    <HeroStyles>
      <div>
        <h1>Life's short, ride more</h1>

        <p>
          Volks 'N' Spokes is the mobile bike repair shop that gets you
          adventuring further.
        </p>
        <p>Tuning bikes along the Sea to Sky, BC</p>
        <Link to="/about">
          <GiCarWheel className="button" />
          <span>Learn more about us</span>
        </Link>
      </div>
    </HeroStyles>
  );
}
