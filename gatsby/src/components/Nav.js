import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import logo from '../../static/logo.png';

const NavStyles = styled.nav`
  ul {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    text-align: center;
    gap: 2rem;
    align-items: center;
  }
  a {
    text-decoration: none;
    color: var(--dark);
    font-size: 2.5rem;
    &:hover {
      color: var(--secondary);
    }
  }
  [aria-current='page'] {
    color: var(--secondary);
  }

  .logo {
    justify-self: start;
    img {
      width: clamp(100px, 25vw, 300px);
    }
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li className="logo">
          <Link to="/">
            <img src={logo} alt="Volks and Spokes Logo" />
          </Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/about">Our Story</Link>
        </li>
        <li>
          <Link to="#contact">Contact</Link>
        </li>
      </ul>
    </NavStyles>
  );
}
