import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    ADD_USER (state, payload) {
      state.user = payload
    }
  },
  actions: {
    addUser (context, user) {
      context.commit('ADD_USER', user)
    }
  },
  getters: {
    getUser (state) {
      return state.user
    }
  }
})
