import styled from "styled-components";
import Link from "next/link";
import React from "react";
import { screen } from "../global/constant";

// Create a <Title> react component that
// renders an <h1> which is centered, palevioletred and sized at 1.5em
const Links = styled.ul`
  display: none;
  justify-content: flex-end;
  align-items: center;

  @media ${screen.mdUp} {
    display: flex;
  }
`;

const List = styled.li`
  display: inline-block;
  padding-right: 3em;
`;

export default () => (
  <Links>
    <List>
      <Link href="/projects">
        <a>Projects</a>
      </Link>
    </List>
    <List>
      <Link href="../projects">
        <a>Products</a>
      </Link>
    </List>
    <List>
      <Link href="../../projects">
        <a>Company</a>
      </Link>
    </List>
    <List>
      <Link href="./projects">
        <a>Contact</a>
      </Link>
    </List>
  </Links>
);
