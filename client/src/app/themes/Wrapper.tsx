import { normalize } from "polished"
import React, { Component } from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components/macro"
import { dark } from "./dark"
import { connect } from "react-redux"
import { RouteComponentProps, withRouter } from "react-router"

const GlobalStyle = createGlobalStyle`
  ${normalize};
  
  body {
    font-family: Roboto, Arial, Helvetica, sans-serif;
  }
  
`

interface WrapperProps extends RouteComponentProps {
  theme?: string;
}

class Wrapper extends Component<WrapperProps, {}> {
  render() {
    const { children } = this.props
    return (
      <ThemeProvider theme={dark}>
        <>
          <GlobalStyle />
          {children}
        </>
      </ThemeProvider>
    )
  }
}

export default withRouter(connect()(Wrapper))
