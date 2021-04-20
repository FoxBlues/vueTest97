import Vue from "vue";
import Vuex from 'vuex'
import axios from "../axios";
Vue.use(Vuex)
const state = {
  msg: '这里是vuex中的state',
  testUrl: 'https://api.coindesk.com',
  coinDeskCount: 1
}
let mutations = {

}
let getters = {

}
let modules = {

}
let actions = {
  getCoinDesk ({state,rootState},opts) {
    return axios.getCoinDesk()
  }
}
export default new Vuex.Store({
  state,
  mutations:mutations,
  getters: getters,
  modules: modules,
  actions: actions
})

