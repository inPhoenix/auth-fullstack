import React, { Component } from "react"
import { checkAuthentication, signUp } from "./redux/reducers"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import RegisterMiddle from "./RegisterMiddle"

class RegisterMiddleContainer extends Component {
  state = {
    isDev: process.env.NODE_ENV !== "production"
  }
  handleSubmit = values => {
    this.props.signUp(values)
  }

  render() {
    const { user } = this.props
    return (
      <div>
        <RegisterMiddle onSubmit={this.handleSubmit} />
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
    { signUp, checkAuthentication }
  )(RegisterMiddleContainer)
)
