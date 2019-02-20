import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
 // 定义状态
  state: {

  },
  mutations:{
  }
})

// 设置loading，主要是为了异步加载组件时的延时
// store.registerModule('vux', { // 名字自己定义
//   state: {
//     isLoading: false
//   },
//   mutations: {
//     updateLoadingStatus (state, payload) {
//       state.isLoading = payload.isLoading
//     }
//   }
// })

export default store
