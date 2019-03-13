import axios from 'axios'

let url = 'http://localhost:3000/user'
if (process.env.NODE_ENV === "production") {
  url ='https://auth-fullstack.herokuapp.com/user/'
}

export default axios.create({
  baseURL: url
})
