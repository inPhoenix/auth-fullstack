import axios from 'axios'

export default axios.create({
  baseURL: 'https://auth-fullstack.herokuapp.com/user/'
})

// For Local Environment:
// baseURL: 'http://localhost:3000/user'
