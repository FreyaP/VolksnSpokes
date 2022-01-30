import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --secondary: #CF69A8;
    --primary: #0ABCD4;
    --accent: #DC767B;
    --light: #F6F6F6;
    --dark: #202023;
  }
  html {
    font-size: 10px;
  }

  body {
    font-size: 2rem;
    color: var(--light);
  }


  .button {
    background: var(--primary);
    color: var(--dark);
    border: 0;
    font-size: 3rem;
    padding: 0.5rem;
    border-radius: 50%;
    cursor: pointer;
    transition: ease-in 0.5s;
    &:hover {
     transform: rotate(360deg);
     background: var(--secondary);
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


  img {
    max-width: 100%;
  }

  
  li {
    list-style: none;
  }

`;

export default GlobalStyles;
