import React, { Fragment } from "react";
import styled from "styled-components";

import Link from "next/link";
import Menu from "./Menu";
import Logo from "./Logo";
// Create a <Wrapper> react component that renders a <section>
// with some padding and a papayawhip background

const LogoWrapper = styled.div`
  flex: 1 1 0%;
`;

const Header = styled.div`
  display: flex;
  padding: 1em 0;
`;

export default () => (
  <Header>
    <LogoWrapper>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
    </LogoWrapper>
    <Menu />
  </Header>
);
