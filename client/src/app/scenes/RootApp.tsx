import * as React from "react"
import { hot } from "react-hot-loader"
import SignInContainer from "../components/user/SignInContainer"
import SignupContainer from "../components/user/SignupContainer"
import { configureStore } from "../store/configureStore"

/* Routing */
import { Redirect, Route, RouteProps, Router, Switch } from "react-router-dom"
import { routes, history } from "../services/routing"

/* Scenes */
import Login from "./Login"
import Wrapper from "../themes/Wrapper"
import { Provider } from "react-redux"
import DashBoard from "./DashBoard"

const store = configureStore()

const RootApp = () => (
  <Provider store={store}>
    <Router history={history}>
      <Wrapper>
        <Switch>
          <Route exact path={routes.Root} component={Login} />
          <Route path={routes.signUp} component={SignupContainer} />
          <Route path={routes.signIn} component={SignInContainer} />
          <Route path={routes.dashboard} component={DashBoard} />
        </Switch>
      </Wrapper>
    </Router>
  </Provider>
)

export default hot(module)(RootApp)
