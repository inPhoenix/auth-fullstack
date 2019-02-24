import React, { Component } from "react"
import { checkAuthentication, signIn } from "./redux/reducers"
import { connect } from "react-redux"
import SignIn from "./SignIn"
import { withRouter } from "react-router-dom"
import { Button } from "../../../designs/atoms/Button"

class SignInContainer extends Component {
  state = {
    isDev: process.env.NODE_ENV !== "production"
  }
  handleSubmit = (values) => {
    this.props.signIn(values)
  }
  render() {
    const { user } = this.props
    return (
      <div className="login-box">
        <div className="login-inputs">
          <div>
            <SignIn onSubmit={this.handleSubmit} />
          </div>
          <div>
            {user && user.loaded === "error" && (
              <div style={{ margin: "20px" }}>
                <div>Error has occurred, please try again</div>
              </div>
            )}
          </div>

          {this.state.isDev && (
            <Button onClick={() => this.props.checkAuthentication()}>
              Check Auth
            </Button>
          )}
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
    { signIn, checkAuthentication }
  )(SignInContainer)
)
