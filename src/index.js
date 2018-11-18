import React, { Fragment } from "react";
import { render } from "react-dom";
import { createGlobalStyle } from "styled-components";

import { reset } from "./global/reset";
import { styles } from "./global/styles";
import Link from "next/link";

import Wrapper from "./component/Wrapper";
import Header from "./component/Header";
import MobileMenu from "./component/MobileMenu";

const GlobalStyles = createGlobalStyle`
  ${reset}
  ${styles}
`;
export default class App extends React.Component {
  state = { menuExpanded: false };

  updateMobileMenuState = () => {
    if (!this.state.menuExpanded) {
      this.setState({ menuExpanded: true });
    } else {
      this.setState({ menuExpanded: false });
    }
  };

  render() {
    return (
      <Fragment>
        <GlobalStyles />
        <Wrapper>
          {!this.state.menuExpanded && <Header />}
          <MobileMenu
            status={this.state.menuExpanded}
            updateMobileMenuState={this.updateMobileMenuState}
          />
        </Wrapper>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
      </Fragment>
    );
  }
}
// Render these styled components like normal react components.
// They will pass on all props and work
// like normal react components – except they're styled!

render(<App />, document.getElementById("root"));
