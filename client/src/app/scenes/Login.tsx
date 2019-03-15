import React, { Component } from "react"
import { connect } from "react-redux"
import SignInContainer from "../components/user/SignInContainer"
import { changeTheme } from "../themes/redux/reducer"
import { IRootState } from "../store/configureStore"
import { withRouter, RouteComponentProps } from "react-router-dom"
import { LoginContainer } from "../../designs/organisms/LoginContainer"
import styled from "styled-components"
import RegisterMiddleContainer from "../components/user/RegisterMiddleContainer"

const ASSETS = `${process.env.PUBLIC_URL}/assets`

interface IMyImageProps {
  back?: string
}

const Header = styled.div<IMyImageProps>`
  width: 50%;
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.3);
  background: linear-gradient(
      to bottom,
      rgba(9, 0, 72, 0.9),
      rgba(9, 0, 72, 0.4)
    ),
    url(${props => props.back}) center no-repeat;
`

interface IStateFromProps {
  value?: any
  showLogin: any
  checkbox: any
}

interface HomeProps extends RouteComponentProps {
  changeTheme(): void
}

interface IProps extends IStateFromProps, HomeProps {}

class Login extends Component<IProps> {
  changeTheme = () => {
    this.props.changeTheme()
  }

  state = {
    showLogin: false,
    checkbox: false
  }

  render() {
    const { showLogin, checkbox } = this.state
    return (
      <div>
        <LoginContainer back={`${ASSETS}/wallpapers/bg1.jpg`} />

        <RegisterMiddleContainer />

        <div className="credentials-container">
          <SignInContainer />
        </div>
      </div>
    )
  }
}

const mapState = (state: IRootState) => {
  return { user: state.themes }
}

export default withRouter(
  connect(
    mapState,
    { changeTheme }
  )(Login)
)
