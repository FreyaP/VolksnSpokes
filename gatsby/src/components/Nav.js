import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { HiArrowCircleUp } from 'react-icons/hi';
import logo from '../../static/logo.png';

const NavStyles = styled.nav`
  background: var(--dark);
  .top {
    position: fixed;
    z-index: 9999;
    bottom: 2rem;
    right: 3rem;
  }

  ul {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    text-align: center;
    gap: 2rem;
    align-items: center;
    margin: 0;
    padding: 2rem;
  }
  a {
    text-decoration: none;
    transition: ease-in-out 0.25s;
    color: var(--light);
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
    padding-left: 3rem;
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
      <Link
        to=" "
        className="top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <HiArrowCircleUp className="button" />
      </Link>
    </NavStyles>
  );
}
