import React, { Component } from "react"
import { signUp as signUpAction } from "./redux/reducers"
import { connect } from "react-redux"
import Signup from "./Signup"
import { withRouter } from "react-router-dom"
import { LoginContainer } from "../../../designs/organisms/LoginContainer"
const ASSETS = `${process.env.PUBLIC_URL}/assets`

class SignupContainer extends Component {
  handleSubmit = values => {
    console.log(" hi", "background: red")
    this.props.signUpAction(values)
  }
  render() {
    const { user } = this.props
    return (
      <div>
        <LoginContainer back={`${ASSETS}/wallpapers/citysignup.jpg`} />
        <div className="credentials-container">
          <div className="login-box">
            <div className="login-inputs">
              <div>
                <Signup onSubmit={this.handleSubmit} />
              </div>
              <div>
                {user && user.loaded === "error" && (
                  <div style={{ margin: "20px" }}>
                    <div>An Error has occurred, please try again</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    { signUpAction }
  )(SignupContainer)
)
