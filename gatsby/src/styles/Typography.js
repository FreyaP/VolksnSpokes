import { createGlobalStyle } from 'styled-components';
import bodyFont from '../assets/fonts/montserrat-medium.woff';
import headingFont from '../assets/fonts/lora-bold.woff';

const Typography = createGlobalStyle`
  @font-face {
    font-family: Montserrat;
    src: url(${bodyFont});
  }
  @font-face {
      font-family: Lora;
      src: url()(${headingFont});
      font-weight: 700;
  }
  html {
    font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--dark);
  }
  p, li {
    letter-spacing: 0.5px;
    line-height: 1.3;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: bold;
    margin: 0;
    color: var(--primary);
    text-align: center;
    text-transform: uppercase;
  }
  a {
    color: var(--light);
    text-decoration: none;
    transition: ease-in-out 0.25s;
    &:hover {
      color: var(--secondary);
      .button {
        background: var(--secondary);
        transform: rotate(360deg);
      }
    }
  }
  .flex {
    width: fit-content;
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    .button {
      margin-right: 2rem;
    }
  }
`;

export default Typography;
