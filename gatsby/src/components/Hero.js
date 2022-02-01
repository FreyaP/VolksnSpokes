import React from 'react';
import styled from 'styled-components';
import { GiCarWheel } from 'react-icons/gi';
import { Link } from 'gatsby';

const HeroStyles = styled.div`
  padding: 5rem;
  background: var(--dark);
  h1 {
    text-align: left;
  }

  a {
    margin-top: 7rem;
    text-transform: uppercase;
    font-weight: bold;
  }
`;

export default function Hero({ home }) {
  return (
    <HeroStyles>
      <div>
        <h1>{home[0].heading}</h1>

        <p>{home[0].subheading}</p>
        <p>{home[0].altheading}</p>
        <Link to="/about" className="flex">
          <GiCarWheel className="button" />
          <span>Learn more about us</span>
        </Link>
      </div>
    </HeroStyles>
  );
}
