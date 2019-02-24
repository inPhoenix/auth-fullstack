// This is a duck
// https://github.com/erikras/ducks-modular-redux

// Actions
const SET_THEME = "api/SET_THEME"

const INITIAL_STATE = {
  theme: "light"
}

// Reducer
export const themeReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SET_THEME:
      return {
        theme: "dark"
      }
    default:
      return state
  }
}

// Action Creator

export const changeTheme = () => {
  return { type: SET_THEME}
}
