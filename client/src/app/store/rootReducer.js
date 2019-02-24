import { combineReducers } from 'redux'
import {userReducer} from '../components/user/redux/reducers'

import { reducer as form } from 'redux-form'
import { themeReducer } from "../themes/redux/reducer"

const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer,
  form,
})

export default rootReducer
