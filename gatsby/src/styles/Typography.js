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
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
    font-family: Lora;
  }
  a {
    color: var(--dark);
    text-decoration-color: var(--secondary);
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
  }
  /*
  mark, .mark {
    background: var(--accent);
    padding: 0 2px 2px 2px;
    margin: 0;
    display: inline;
    line-height: 1;
  }*/

  .center {
    text-align: center;
  }

  .tilt {
    transform: rotate(-2deg);
  }
`;

export default Typography;
