import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const apiKey = { apiKey: process.env.VUE_APP_API_KEY }

export default new Vuex.Store({
  strict: !Vue.config.productionTip,

  state: {
    search: null,
    results: [],
    totalResults: null
  },
  getters: {
    GET_RESULTS: state => state.results,
    GET_TOTAL_RESULTS: state => state.totalResults,
    GET_SEARCH: state => state.search
  },
  mutations: {
    setResults: (state, payload) => { state.results = payload },
    addResults: (state, payload) => { state.results.push(...payload) },
    setTotalResults: (state, payload) => { state.totalResults = payload },
    setSearch: (state, payload) => { state.search = payload }
  },
  actions: {
    UPDATE_SEARCH ({ commit }, payload) {
      commit('setSearch', payload)
    },
    CLEAR_RESULTS ({ commit }) {
      commit('setTotalResults', 0)
      commit('setResults', [])
    },
    FETCH_MOVIES ({ commit, getters }, payload) {
      return new Promise((resolve, reject) => {
        Vue.axios({
          method: 'GET',
          url: '/',
          params: { ...apiKey, ...payload }
        }).then(res => {
          if (res.data.Response === 'False') {
            reject(res.data.Error)
            return
          } else if (res.data.Search) {
            getters.GET_TOTAL_RESULTS ? commit('addResults', res.data.Search)
              : commit('setResults', res.data.Search)
            commit('setTotalResults', res.data.totalResults)
          } else {
            commit('addResults', [res.data])
            commit('setTotalResults', 1)
          }
          resolve(getters.GET_RESULTS)
        }).catch(err => {
          reject(err)
        })
      })
    }
  },
  modules: {
  }
})
