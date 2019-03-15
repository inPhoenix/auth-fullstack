import api from "../../../api/api"
import { history } from "../../../services/routing"

/*** This is a duck
 *
 * More about:
 * https://github.com/erikras/ducks-modular-redux
 *
 ****/

// Actions
const SIGNUP = "api/SIGNUP"
const ERROR = "api/ERROR"
const ISLOADING = "api/ISLOADING"
const ISAUTHENTICATED = "api/ISAUTHENTICATED"

const INITIAL_STATE = {
  signUpResponse: {},
  isError: false,
  isAuthenticated: false,
  isLoading: false
}

// Reducer
export const userReducer = (state = INITIAL_STATE, action: any = {}) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        isError: false,
        signUpResponse: action.payload
      }
    case ISAUTHENTICATED:
      return {
        ...state,
        isError: false,
        isAuthenticated: action.data
      }
    case ERROR:
      return {
        ...state,
        isError: true
      }
    case ISLOADING:
      return {
        ...state,
        isLoading: action.status
      }
    default:
      return state
  }
}

// Action Creators
export const signUp = (values = {}) => {
  return async (dispatch: any) => {
    let [err, response] = await to(api.post("/new", values))
    if (err) {
      const safeError = {
        response: {
          data: {},
          ...err.response
        }
      }
      errorLog(safeError.response.data)
      await dispatch(errorHandling())
    } else {
      await dispatch(updateUser(response.data))
      await dispatch(checkAuthentication)
      await dispatch(setAuthStatus(true))
      history.push("/dashboard")
    }
  }
}

export const signOut = () => {
  return async (dispatch: any) => {
    dispatch(setLoading(true))
    let [err, response] = await to(api.get("/logout"))

    if (err) {
      const safeError = {
        response: {
          data: {}
        },
        ...err
      }
      errorLog(safeError.response.data)
      dispatch(setLoading(false))
      await dispatch(errorHandling())
    } else {
      const safeResponse = {
        data: {}
      }
      await dispatch(updateUser(safeResponse))
      await dispatch(setLoading(false))
      await dispatch(setAuthStatus(false))
      history.push("/")
    }
  }
}

export const checkAuthentication = () => {
  return async (dispatch: any) => {
    dispatch(setLoading(true))
    let [err, response] = await to(api.get("/authenticated"))

    if (err) {
      const safeError = {
        response: {
          data: {},
          ...err.response
        }
      }
      errorLog(safeError.response.data)
      await dispatch(setLoading(false))
      await dispatch(errorHandling())
    } else {
      const safeResponse = {
        authenticated: false,
        ...response.data
      }
      await dispatch(setAuthStatus(safeResponse.authenticated))
      await dispatch(setLoading(false))
    }
  }
}

export const signIn = (values = {}) => {
  return async (dispatch: any) => {
    dispatch(setLoading(true))
    let [err, response] = await to(api.post("/login", values))

    if (err) {
      const safeError = {
        response: {
          data: {},
          ...err.response
        }
      }
      errorLog(safeError.response.data)
      await dispatch(setLoading(false))
      await dispatch(errorHandling())
    } else {
      const safeResponse = {
        data: {},
        ...response
      }
      await dispatch(updateUser(safeResponse.data))
      await dispatch(setLoading(false))
      await dispatch(setAuthStatus(true))
      await history.push("/dashboard")
    }
  }
}

const setLoading = (state: any) => {
  return { type: ISLOADING, status: state }
}
const setAuthStatus = (data: any) => {
  return { type: ISAUTHENTICATED, data: data }
}

export const updateUser = (data: any) => {
  return { type: SIGNUP, payload: data }
}

export const errorHandling = () => {
  return { type: ERROR, payload: "error" }
}

const errorLog = (error: any) => {
  console.log("%c Error: ", "background: red; color: yellow", error)
}

// utility function to catch errors
const to = (promise: any) => {
  return promise
    .then((data: any) => {
      return [null, data]
    })
    .catch((err: any) => [err])
}
