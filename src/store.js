import Vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
Vue.use(vuex)

export default new vuex.Store({
  strict: true,
  state: {
    rawData: [],
    totalCnt: 0,
    result: null
  },
  actions: {
    getData(context, payload) {
      const api = payload===2017?`../public/data.json`:`../public/data.json`;
      axios.get(api).then((response) => {
        context.commit('RAWDATA', response.data.prizes)
        context.dispatch('getAllCount')
      })
    },
    getAllCount(context) {
      let cnt = 0;
      context.state.rawData.forEach(item => {
        cnt = cnt + item.total
      });
      context.commit('TOTALCNT', cnt)
    },
    updateTotal(context, payload) {
      context.commit("UPDATETOTAL", payload)
    },
    setResult(context, payload) {
      context.commit("RESULT", payload)
    }
  },
  mutations: {
    RAWDATA(state, payload) {
      state.rawData = payload
    },
    TOTALCNT(state, payload) {
      state.totalCnt = payload
    },
    UPDATETOTAL(state, payload) {
      state.rawData[payload.resultIndex].total = payload.total
    },
    RESULT(state, payload) {
      state.result = payload
    }
  },
  getters: {
    rawData: (state) => { return state.rawData },
    totalCnt: (state) => { return state.totalCnt },
    result: (state) => { return state.result }
  }
})
