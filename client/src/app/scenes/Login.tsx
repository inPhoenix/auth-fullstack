import React, { Component } from "react"
import { connect } from "react-redux"
import SignInContainer from "../components/user/SignInContainer"
import { changeTheme } from "../themes/redux/reducer"
import { IRootState } from "../store/configureStore"
import { withRouter, RouteComponentProps } from "react-router-dom"
import { LoginContainer } from "../../designs/organisms/LoginContainer"
const ASSETS = `${process.env.PUBLIC_URL}/assets`

interface IStateFromProps {}

interface HomeProps extends RouteComponentProps {
  changeTheme(): void
}

interface IProps extends IStateFromProps, HomeProps {}

class Login extends Component<IProps> {
  changeTheme = () => {
    this.props.changeTheme()
  }

  render() {
    return (
      <div>
        <LoginContainer back={`${ASSETS}/wallpapers/bg1.jpg`} />

        <div className="login-container">
          <div className="banner">
            <h1 className="banner-heading">Subscribe Here</h1>
            <div className="arrow">
              <i className="fas fa-arrow-down" />
            </div>
            <button className="banner-btn">click now</button>
          </div>

          <div className="form-container">
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
              <p>Get News?</p>
              <label>No</label>
              <input type="checkbox" />
              <label>Yes</label>
              <button type="button">Sign Up Here</button>
            </form>
            <div className="header">
              <h1>Welcome to Code and Create</h1>
            </div>
            &#10005;
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
