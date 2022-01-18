import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: var(--dark);
  h6 {
    text-align: start;
  }
  .contact {
    grid-column: span 2;
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="contact">
        <h6>Say Hi</h6>
        <p>Email</p>
        <p>Phone</p>
        <p>Address</p>
        <div>Socials</div>
      </div>
      <div>
        <h6>Volks 'N' Spokes</h6>
        <p> &copy; {new Date().getFullYear()} | All Rights Reserved</p>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/about">Our Story</Link>
          </li>
          <li>
            <Link>Gallery</Link>
          </li>
        </ul>
      </div>
    </FooterStyles>
  );
}
