import Vue from 'vue'
import App from './App'
import route from './router/index'
import axios from 'axios'
import Vuex from 'vuex'
import 'babel-polyfill'
import wechat from 'weixin-js-sdk'
import store from './vuex/store'
import './assets/js/taobao'
import './assets/less/common.less'
import './assets/less/animate.css'
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)
// import 'element-ui/lib/theme-chalk/index.css'
// import { Tree, Button } from 'element-ui'
// Vue.use(Tree)
// Vue.use(Button)
Vue.use(Vuex)
axios.defaults.headers.post['Content-Type'] = 'application/json';
Vue.prototype.$wx = wechat;
import  { ToastPlugin } from 'vux'
Vue.use(ToastPlugin)
// import  { LoadingPlugin } from 'vux'
// Vue.use(LoadingPlugin)

// 或者umd方式
// 引入构建的js文件
// console.log(window.location.href);
// Vue.prototype.$url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxfe3aa6c1dd22f053&redirect_uri=" + encodeURIComponent(window.location.href.split('#')[0]) + "&response_type=code&scope=snsapi_base&state=Receivables#wechat_redirect#" + window.location.href.split('#')[1];
Vue.prototype.$url ="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxfe3aa6c1dd22f053&redirect_uri=" + encodeURIComponent(window.location.href) + "&response_type=code&scope=snsapi_base&state=Receivables#wechat_redirect";

Vue.prototype.$http = axios;
Vue.prototype.$cmBus = new Vue();

import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper, /* { default global options } */)
import 'swiper/dist/css/swiper.css'

// 设置默认的token，开发模式下使用
axios.defaults.baseURL = 'http://xmgl-api.mingyuanyun.com/';
// axios.defaults.baseURL = "http://10.5.99.59:8090", //开发环境

// end
if (window.location.href.match(/code=(\S*)&/g)){
  var str = window.location.href.match(/code=(\S*)&/g)[0];
  let wxCode= str.replace("code=", "").replace("&", "");
  localStorage.setItem('wxCode', JSON.stringify(wxCode));
  var temp = window.location.href;
  if (temp.split('?')[1]) {
    var deStr = "?" + temp.split('?')[1].split('#')[0];
    window.location.href = temp.replace(deStr, "");
  } else {
    window.location.reload(true);
  }
}else{
  if(!localStorage.getItem("wxCode")){
    window.location.href = Vue.prototype.$url;
  }
}

Vue.prototype.$http.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    console.log(err)
    return Promise.reject(err);
  });

// 这里拦截401错误，重新跳入登页重新获取token
// 设置请求超时
axios.defaults.timeout = 60000;
// end


// 处理点击延时
// const FastClick = require('fastclick')
// FastClick.attach(document.body)
// route.beforeEach(function (to, from, next) {
//   store.commit('updateLoadingStatus', { isLoading: true });

//   if (to.name == "noRight") { //无权限页面直接跳转
//     next();
//     return;
//   }
//   var timer2 = setInterval(function () {
//     if (localStorage.getItem("token")) {
//       clearInterval(timer2);
//       next();
//     }
//   }, 10)

// })

// route.afterEach(function (to) {
//   document.title = to.meta.title;

//   if (to.name == "home" || to.name == "panel") {
//     // 返回首页、仪表盘首页之后，清除缓存的最近搜索
//     localStorage.removeItem("lastSearchRes");
//     localStorage.removeItem("lastSearchKey");
//     // end
//   }
//   setTimeout(function () {
//     store.commit('updateLoadingStatus', { isLoading: false })
//   }, 10)
// })

new Vue({
  el: '#app',
  template: '<App/>',
  store,
  components: { App },
  router: route
})
