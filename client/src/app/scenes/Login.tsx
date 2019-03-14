import React, { Component } from "react"
import { connect } from "react-redux"
import SignInContainer from "../components/user/SignInContainer"
import { changeTheme } from "../themes/redux/reducer"
import { IRootState } from "../store/configureStore"
import { withRouter, RouteComponentProps } from "react-router-dom"
import { LoginContainer } from "../../designs/organisms/LoginContainer"
import styled from "styled-components"
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

  enableRegister = () => {
    console.log("%c hi", "background: red")
    this.setState(() => ({
      showLogin: true
    }))
  }

  disableRegister = () => {
    console.log("%c hi", "background: red")
    this.setState(() => ({
      showLogin: false
    }))
  }

  handleOnChange = () => {
    this.setState((prevState: any) => ({
      showLogin: !prevState.checkbox
    }))
  }

  render() {
    const { showLogin, checkbox } = this.state
    console.log("%c showLogin", "background: red", showLogin)
    console.log("%c checkbox", "background: red", checkbox)
    // @ts-ignore
    // @ts-ignore
    return (
      <div>
        <LoginContainer back={`${ASSETS}/wallpapers/bg1.jpg`} />

        <div className="login-container">
          <div className={["banner", showLogin && "disable"].join(" ")}>
            <h1 className="banner-heading">Subscribe Here</h1>
            <div className="arrow">
              <i className="fas fa-arrow-down" />
            </div>
            <button
              type="button"
              className="banner-btn"
              onClick={this.enableRegister}
            >
              click now
            </button>
          </div>

          <div className={["form-container", showLogin && "enable"].join(" ")}>
            <form action="" className="sign-up-form">
              <input
                type="text"
                className="form-input"
                placeholder="Full Name"
              />
              <input
                type="email"
                className="form-input"
                placeholder="Email Address"
              />
              <p>Already Have an Account?</p>
              <label>No</label>
              <input onChange={this.handleOnChange} type="checkbox" />
              <label>Yes</label>
              <button type="button">Sign Up Here</button>
            </form>

            <Header
              className="header"
              back={`${ASSETS}/wallpapers/mobilelogin.jpg`}
            >
              <div className="header-inner">Auth System</div>
            </Header>
            <div className="x-btn" onClick={this.disableRegister}>
              &#10005;
            </div>
          </div>
        </div>

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
