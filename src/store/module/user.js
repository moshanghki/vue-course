import { login, authorization } from '@/api/user'
import { setToken } from '../../common/util'

const state = {
  userName: 'haopeng'
}

const getters = {
  firstLetterOfName (state) {
    return state.userName.slice(0, 1)
  }
}

const mutations = {
  //
}

const actions = {
  login ({ commit }, { userName, password }) {
    return new Promise((resolve, reject) => {
      login({ userName, password }).then((res) => {
        if (res.data.code === 200 && res.data.data.token) {
          setToken(res.data.data.token)
          resolve()
        } else {
          reject(new Error('login error'))
        }
      }).catch(err => {
        console.log(err)
      })
    })
  },
  authorization ({ commit }, token) {
    return new Promise((resolve, reject) => {
      authorization().then(res => {
        if (parseInt(res.data.code) === 401) {
          reject(new Error('token error'))
        } else {
          setToken(res.data.data.token)
          resolve()
        }
      }).catch(error => {
        resolve(error)
      })
    })
  },
  logout () {
    setToken('')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
