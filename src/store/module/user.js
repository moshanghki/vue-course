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
  //
}

export default {
  state,
  getters,
  mutations,
  actions
}
