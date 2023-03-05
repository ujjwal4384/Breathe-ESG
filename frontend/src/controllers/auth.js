import axios from 'axios'

export const signup = async (email, username, password) => {
  try {
    const data = JSON.stringify({
      email: email,
      password: password,
      username: username,
    })

    const config = {
      method: 'post',
      url: process.env.REACT_APP_BACKEND_SERVER_URI + '/auth/signup',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    }

    const response = await axios(config)
    sessionStorage.setItem('breathe_id', response.data.userId)
    sessionStorage.setItem('breathe_username', username)
    sessionStorage.setItem('breathe_token', response.data.token)
    return response.data.message
  } catch (error) {
    throw error
  }
}

export const login = async (email, password) => {
  try {
    const data = JSON.stringify({
      email: email,
      password: password,
    })

    const config = {
      method: 'post',
      url: process.env.REACT_APP_BACKEND_SERVER_URI + '/auth/login',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    }

    const response = await axios(config)
    sessionStorage.setItem('breathe_id', response.data.userId)
    sessionStorage.setItem('breathe_username', response.data.username)
    sessionStorage.setItem('breathe_token', response.data.token)
    return response.data.message
  } catch (error) {
    throw error
  }
}

export const verify = async () => {
  try {
    const token = await sessionStorage.getItem('breathe_token')
    const config = {
      method: 'get',
      url: process.env.REACT_APP_BACKEND_SERVER_URI + '/auth/verify',
      headers: {
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + token,
      },
    }
    console.log(token)
    const response = await axios(config)
    sessionStorage.setItem('breathe_id', response.data.userId)
    sessionStorage.setItem('breathe_username', response.data.username)
    return response.data.message
  } catch (error) {
    throw error
  }
}
