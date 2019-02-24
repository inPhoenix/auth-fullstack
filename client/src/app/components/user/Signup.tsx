import React, { Component } from "react"
import { connect } from "react-redux"
import { Field, reduxForm, getFormValues } from "redux-form"
import { Cursor } from "../../../designs/atoms/Cursor"
import { Button } from "../../../designs/atoms/Button"
import { Link, withRouter } from "react-router-dom"

interface IState {
  inputFocusPassword: boolean
  inputFocusEmail: boolean
}

interface IRenderField {
  input: any
  label: string
  type: string
  meta: any
}
const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning, active }
}: IRenderField) => {
  return (
    <>
      <input
        className="input-field"
        placeholder={label}
        type={type}
        {...input}
      />
      {touched && error && !active && (
        <nav className="error-container">{error}</nav>
      )}
    </>
  )
}

interface IProps {
  handleSubmit(): void
  formValues: any
  user: any
}

class Signup extends Component<IProps, IState> {
  state = {
    inputFocus: false,
    inputFocusPassword: false,
    inputFocusEmail: false
  }
  onFocus = (fieldName: string) => {
    if (fieldName === "email") {
      return this.setState({
        inputFocusEmail: true,
        inputFocusPassword: false
      })
    }
    if (fieldName === "password") {
      this.setState({
        inputFocusPassword: true,
        inputFocusEmail: true
      })
    }
  }

  onBlur = (fieldName: string) => {
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

  render() {
    const { handleSubmit, formValues, user } = this.props
    const hasValues = (fieldName: string) =>
      !!(formValues && formValues[fieldName])
    if (user.isLoading) {
      return <div className="loading-container">Loading...</div>
    }
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="field-group">
              <Cursor>
                <Field
                  onFocus={() => this.onFocus("email")}
                  onBlur={() => this.onBlur("email")}
                  name="username"
                  validate={emailValidation}
                  type={"input"}
                  component={renderField}
                />
                <span
                  className={[
                    "fg-label",
                    hasValues("username") && "filled"
                  ].join(" ")}
                >
                  {!this.state.inputFocusEmail && !hasValues("username")
                    ? "Enter your email address"
                    : "Email"}
                </span>
                {!this.state.inputFocusEmail && <i />}
              </Cursor>

              <Cursor>
                <Field
                  onFocus={() => this.onFocus("password")}
                  onBlur={() => this.onBlur("password")}
                  className="input-field"
                  name="password"
                  type={"password"}
                  component={renderField}
                />
                <span
                  className={[
                    "fg-label",
                    hasValues("password") && "filled"
                  ].join(" ")}
                >
                  {!this.state.inputFocusPassword && !hasValues("password")
                    ? "Enter your password"
                    : "Password"}
                </span>
              </Cursor>
              <Button>Register</Button>

              {user.isError && (
                <div className="error-submit-container">
                  Invalid Credentials
                </div>
              )}
              <div className="new-account-text-container">
                Already have an account?
                <div>
                  <Link to={"/"}>Log In</Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const emailValidation = (value: any) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : value == null || value === ""
    ? "Email is empty"
    : undefined

const FORM_NAME = "signUpForm"

// @ts-ignore-next-line
const form = reduxForm({ form: FORM_NAME })(Signup)
const mapStateToProps = (state: any) => {
  return {
    formValues: getFormValues(FORM_NAME)(state),
    initialValues: {
      username: "",
      password: ""
    },
    user: state.user
  }
}

export default withRouter(connect(mapStateToProps)(form) as any)
