import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  items: [
    {
      name: 'hore',
      price: 2000,
      description: 'ini hore'
    }
  ]
}
const mutations = { // save data (there may be logic)
  addStorageItem (state, value) {
    state.items.push(value)
  },
  setStorageItem (state, value) {
    state.items = value
  }
}
const actions = { // data logic (logic to API)
  addStorageItem({commit, dispatch}, data) {
    commit('addStorageItem', data)
    dispatch('getStorageItems')
  }
  /*
  ,
  getStorageItems ({commit}) {
    api.getStorageItems{(res) => {
      commit
    }, (err) => {
      alert('error fetching data')
    }}
  }*/
}
const getters = {
  storageItems (state) {
    return state.items
  }
}

var store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})


export default store
