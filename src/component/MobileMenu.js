import styled from "styled-components";
import Link from "next/link";
import React, { Fragment } from "react";
import { screen } from "../global/constant";
import Hamburger from "../icons/Hamburger";
import CloseButton from "../icons/CloseButton";
// Create a <Title> react component that
// renders an <h1> which is centered, palevioletred and sized at 1.5em
const Links = styled.ul`
  display: block;
  align-items: center;
  padding-top: 7em;

  @media ${screen.mdUp} {
    display: none;
  }
`;

const List = styled.li`
  display: block;
  padding-bottom: 3em;
  text-align: center;
`;

const Button = styled.a`
  position: absolute;
  right: 0.8em;
  top: 0.8em;
  @media ${screen.mdUp} {
    display: none;
  }
`;

export default class MobileMenu extends React.Component {
  render() {
    return (
      <Fragment>
        <Button onClick={this.props.updateMobileMenuState}>
          {!this.props.status ? <Hamburger /> : <CloseButton />}
        </Button>
        {this.props.status && (
          <Links>
            <List>
              <Link href="/about">
                <a className="mobileLink">Projects</a>
              </Link>
            </List>
            <List>
              <Link href="/about">
                <a className="mobileLink">Products</a>
              </Link>
            </List>
            <List>
              <Link href="/about">
                <a className="mobileLink">Company</a>
              </Link>
            </List>
            <List>
              <Link href="/about">
                <a className="mobileLink">Contact</a>
              </Link>
            </List>
          </Links>
        )}
      </Fragment>
    );
  }
}
