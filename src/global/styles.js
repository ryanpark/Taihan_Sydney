import { css } from "styled-components";
import { color } from "../global/constant";

export const styles = css`
  body {
    font-family: "Avenir Next", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    color: white;
    background: ${color.blue};
  }
  a {
    color: white;
    text-decoration: none;
  }
  a:hover {
    transition: all 1s;
    color: ${color.red};
  }
  #logo {
    width: 123px;
  }
  #hamburger,
  #closeButton {
    width: 27px;
    height: 20px;
  }
  .mobileLink {
    font-size: 2em;
    font-weight: lighter;
  }
  .cls-1,
  .cls-2 {
    fill: none;
    stroke: #fff;
    stroke-width: 2px;
  }
`;
