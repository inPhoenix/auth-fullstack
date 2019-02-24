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
        <LoginContainer back={`${ASSETS}/wallpapers/citynight.jpg`} />
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
