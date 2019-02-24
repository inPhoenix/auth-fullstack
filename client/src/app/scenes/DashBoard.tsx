import React, { Component } from "react"
import { connect } from "react-redux"
import { signOut, checkAuthentication } from "../components/user/redux/reducers"
import { Link } from "react-router-dom"

interface IProps {
  signOut(): void
  checkAuthentication(): void
  user: any
}

class DashBoard extends Component<IProps, {}> {
  state = {
    checked: false
  }
  checkAuthentication = () => {
    this.setState({
      checked: true
    })
    this.props.checkAuthentication()
  }
  render() {
    const {user} = this.props
    const isAuthenticated = user.isAuthenticated
    if(!isAuthenticated) return (
      <div className='access-denied'>
      Access Denied
        <Link to={"/"}> Return to Login </Link>
      </div>
    )
    return (
      <div className="dashboard-container">
        <div className="sidebar">
          <div
            className="sidebar-link"
            onClick={() => {
              this.props.signOut()
            }}
          >
            <div className="sidebar-link-text">Logout</div>
          </div>

          <div className="sidebar-link" onClick={this.checkAuthentication}>
            <div className="sidebar-link-text">Check Auth</div>
          </div>
        </div>
        <div className="dashboard-welcome">Welcome!
          {this.state.checked && (
            <div className="dashboard-welcome">
              User is currently: {this.props.user.isAuthenticated ? "authenticated" : "not authenticated"}
            </div>
          )}
        </div>


      </div>
    )
  }
}

const mapState = (state: any) => {
  return {
    user: state.user
  }
}

export default connect(
  mapState,
  { signOut, checkAuthentication }
)(DashBoard)
