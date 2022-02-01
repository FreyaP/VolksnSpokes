import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { RiInstagramFill } from 'react-icons/ri';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { ImLocation2 } from 'react-icons/im';
import wave from '../assets/images/colorful.png';

const FooterStyles = styled.footer`
  background: var(--dark);
  background-image: url(${wave});
  background-size: cover;
  //height: 55vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: var(--light);
  padding: 5rem 5rem 1rem 5rem;

  p {
    margin: 0;
  }

  h6 {
    text-align: start;
    color: var(--secondary);
    font-size: 2.5rem;
    margin: 6rem 0 2rem 0;
  }
  .rights {
    grid-row: 2;
    font-size: 1.5rem;
  }
  .site-map {
    grid-row: 2;
    align-self: end;
  }
  .site-map-list {
    display: flex;
    justify-content: space-around;
    margin: 0;
    font-size: 1.5rem;
  }

  .socials {
    margin-top: 3rem;
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

        <a href={`mailto:${contact.email}`} className="flex">
          <MdEmail className="button" />
          <span>{contact.email}</span>
        </a>

        <a href={`tel:${contact.number}`} className="flex">
          <FaPhoneAlt className="button" />
          <span> {contact.number}</span>
        </a>

        <a
          href="https://goo.gl/maps/FUQF98bWthEhpeyU7"
          target="_blank"
          rel="noreferrer"
          className="flex"
        >
          <ImLocation2 className="button" />
          <span>{contact.city}</span>
        </a>

        <div className="socials">
          <h6>Follow Our Work</h6>
          <a
            className="grid"
            href={contact.instagram}
            target="_blank"
            rel="noreferrer"
          >
            <RiInstagramFill className="button" />
          </a>
        </div>
      </div>
      <div className="rights">
        <h6>Volks 'N' Spokes</h6>
        <p>
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
            <Link to="#gallery">Gallery</Link>
          </li>
        </ul>
      </div>
    </FooterStyles>
  );
}
