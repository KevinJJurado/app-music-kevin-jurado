import axios from "axios"
import { setCredentialsSlice } from "../store/slices/credentials.slice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const useAuth = () => {

  const baseURL = 'https://playlist-share-dev.fl0.io'

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const loginUser = (data) => {
    const url = `${baseURL}/api/auth/login`
    axios.post(url, data)
    .then(res => {
      // console.log(res.data)
      const token = res.data.token
      const username = res.data.username
      const email = res.data.email
      localStorage.setItem('token', token)
      localStorage.setItem('uesrname', username)
      localStorage.setItem('email', email)
      const obj = { token, username, email }
      dispatch(setCredentialsSlice(obj))
      navigate('/')
    })
    .catch(err => {
      console.log(err)
      dispatch(setCredentialsSlice(null))
      localStorage.removeItem('token')
      localStorage.removeItem('uesrname')
      localStorage.removeItem('email')
    })
  }

  const registerUser = (data) => {
    const url = `${baseURL}/api/auth/register`
    axios.post(url, data)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }
  
  const logoutUser = () => {
    dispatch(setCredentialsSlice(null))
    localStorage.removeItem('token')
    localStorage.removeItem('uesrname')
    localStorage.removeItem('email')
  }

  return { loginUser, registerUser, logoutUser }
}



export default useAuth
