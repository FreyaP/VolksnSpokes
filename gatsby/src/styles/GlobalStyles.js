import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --secondary: #CF69A8;
    --primary: #438188;
    --accent: #DC767B;
    --light: #F5EFF3;
    --dark: #301E30;
  }
  html {
    font-size: 10px;
  }

  body {
    font-size: 2rem;
    color: var(--dark);
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  button {
    background: var(--primary);
    color: var(--light);
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--dark);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--primary) var(--light);
  }
  body::-webkit-scrollbar-track {
    background: var(--light);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--primary) ;
    border-radius: 6px;
    border: 3px solid var(--light);
  }

  hr {
    border: 0;
    height: 8px;
    
  }

  img {
    max-width: 100%;
  }

  .tilt {
    transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  }
  li {
    list-style: none;
  }

`;

export default GlobalStyles;
