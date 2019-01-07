import axios from './index'

export const getUserInfo = ({ userId }) => {
  return axios.request({
    url: '/index/userInfo',
    method: 'get'
  })
}

export const login = ({ userName, password }) => {
  return axios.request({
    url: '/index/login',
    method: 'post',
    data: {
      userName,
      password
    }
  })
}

export const authorization = () => {
  return axios.request({
    url: '/users/authorization',
    method: 'get'
  })
}
