import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { RiInstagramFill } from 'react-icons/ri';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const FooterStyles = styled.footer`
  display: grid;
  row-gap: 5rem;
  grid-template-columns: 1fr 1fr;
  color: var(--dark);
  padding: 5rem 5rem 1rem 5rem;
  h6 {
    text-align: start;
    color: var(--secondary);
    font-size: 2.5rem;
  }
  .contact {
    p {
    padding: 0;
    }}
    

    h6 {
      grid-column: span 2;
    }
  }
  .rights {
    grid-row: 2;
  }
  .site-map {
    grid-row: 2;
    align-self: end;
  }
  .site-map-list {
    display: flex;
    justify-content: space-around;
  }
  .icon {
    font-size: 3rem;
    color: var(--primary);
  }
  a {
    transition: ease-in-out 0.25s;
    &:hover {
      color: var(--secondary);
    }
  }
`;

export default function Footer() {
  const data = useStaticQuery(graphql`
    query ContactQuery {
      contact: allSanityContact {
        nodes {
          city
          email
          number
          street
          facebook
          instagram
          postcode
        }
      }
    }
  `);
  const contact = data.contact.nodes[0];

  return (
    <FooterStyles>
      <div className="contact" id="contact">
        <h6>Say Hi</h6>
        <p>
          <a href={`mailto:${contact.email}`}>
            <MdEmail className="icon" />
            {contact.email}
          </a>
        </p>

        <p>
          <a href={`tel:${contact.number}`}>
            <FaPhoneAlt className="icon" />
            {contact.number}
          </a>
        </p>
        <p>
          {contact.city}
          <br />
          {contact.postcode}
        </p>
        <span>
          <a
            className="icon"
            href={contact.instagram}
            target="_blank"
            rel="noreferrer"
          >
            <RiInstagramFill />
          </a>
        </span>
      </div>
      <div className="rights">
        <h6>Volks 'N' Spokes</h6>
        <p>
          {' '}
          &copy; {new Date().getFullYear()} | All Rights Reserved | Site
          developed by{' '}
          <a href="https://github.com/FreyaP" target="_blank" rel="noreferrer">
            Freya
          </a>
        </p>
      </div>
      <div className="site-map">
        <ul className="site-map-list">
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
