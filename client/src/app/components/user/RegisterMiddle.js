import React, { Component } from "react"
import { getFormValues, reduxForm } from "redux-form"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import styled from "styled-components"
import { Field } from "redux-form"
const ASSETS = `${process.env.PUBLIC_URL}/assets`

const Header = styled.div`
  width: 50%;
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.3);
  background: linear-gradient(
      to bottom,
      rgba(9, 0, 72, 0.9),
      rgba(9, 0, 72, 0.4)
    ),
    url(${props => props.back}) center no-repeat;
`

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning, active }
}) => {
  return (
    <>
      <input
        className="form-input"
        placeholder={label}
        type="text"
        type={type}
        {...input}
      />
      {touched && error && !active && (
        <nav className="error-container-middle">{error}</nav>
      )}
    </>
  )
}

class RegisterMiddle extends Component {
  state = {
    showLogin: false,
    checkbox: false,
    inputFocusEmail: false,
    inputFocusPassword: false
  }

  enableRegister = () => {
    this.setState(() => ({
      showLogin: true
    }))
  }

  disableRegister = () => {
    this.setState(() => ({
      showLogin: false,
      inputFocusEmail: false,
      inputFocusPassword: false
    }))
  }

  onBlur = fieldName => {
    if (fieldName === "email") {
      return this.setState({
        inputFocusEmail: false
      })
    }
    if (fieldName === "password") {
      this.setState({
        inputFocusPassword: false
      })
    }
  }

  handleOnChange = () => {
    this.setState(prevState => ({
      checkbox: !prevState.checkbox
    }))
  }

  onFocus = fieldName => {
    if (fieldName === "email") {
      return this.setState({
        inputFocusEmail: true,
        inputFocusPassword: false
      })
    }
    if (fieldName === "password") {
      this.setState({
        inputFocusPassword: true,
        inputFocusEmail: false
      })
    }
  }

  renderTitle() {
    let jsx = "Auth System"
    switch (true) {
      case this.state.inputFocusEmail:
        jsx = "Type your Email"
        break
      case this.state.inputFocusPassword:
        jsx = "Type your Password"
        break
    }
    return jsx
  }
  render() {
    const { showLogin } = this.state
    const { handleSubmit } = this.props
    return (
      <div>
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
            <form onSubmit={handleSubmit} className="sign-up-form">
              <Field
                name="username"
                type="text"
                label="Email"
                component={renderField}
                validate={emailValidation}
                onBlur={() => this.onBlur("email")}
                onFocus={() => this.onFocus("email")}
              />
              <Field
                name="password"
                component="input"
                type="password"
                className="form-input"
                placeholder="Password"
                onBlur={() => this.onBlur("password")}
                onFocus={() => this.onFocus("password")}
              />
              <p>Login after Register?</p>
              <label>Yes</label>
              <input onChange={this.handleOnChange} type="checkbox" />
              <label>No</label>
              <button type="submit">Sign Up Here</button>
            </form>

            <Header
              className="header"
              back={`${ASSETS}/wallpapers/mobilelogin.jpg`}
            >
              <div className="header-inner">{this.renderTitle()}</div>
            </Header>
            <div className="x-btn" onClick={this.disableRegister}>
              &#10005;
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const emailValidation = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : value == null || value === ""
    ? "Email is empty"
    : undefined

const FORM_NAME = "registerFormMiddle"
const form = reduxForm({ form: FORM_NAME })(RegisterMiddle)
const mapStateToProps = state => {
  return {
    formValues: getFormValues(FORM_NAME)(state),
    initialValues: {
      username: "",
      password: ""
    },
    user: state.user
  }
}

export default withRouter(connect(mapStateToProps)(form))
