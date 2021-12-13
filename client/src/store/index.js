import { createStore } from 'vuex'

export default createStore({
  state: {
    sqlInjection: false,
    xss: false,
    csrf: false
  },
  
  mutations: {
    switchSql(state) {
      state.sqlInjection = !state.sqlInjection
    },
    switchXSS(state) {
      state.xss = !state.xss
    },
    switchCRSF(state) {
      state.csrf = !state.csrf
    },
  }
})
