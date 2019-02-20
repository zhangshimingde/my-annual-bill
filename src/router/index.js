import Vue from 'vue'
import VueRouter from 'vue-router'
import commonJs from '../assets/js/commonJs'
// (全部采用异步组件加载的方式，优化首屏加载)
const home=resolve => require(['../components/home.vue'], resolve)
// 模块主页外层
const CommonWarp=resolve => require(['../components/commonWarp.vue'], resolve)
const MyWarp=resolve => require(['../components/myWarp.vue'], resolve)
const Keyword=resolve => require(['../components/keyword.vue'], resolve)
const Detail=resolve => require(['../components/keyword/detail.vue'], resolve)
Vue.use(VueRouter);
const checkLogin= (to, from, next) => {
  commonJs.getUserMsg(to, from, next);
};
const routes = [
    {path:'/',component: home,redirect: { name: 'home' },children:[
        { path: 'home', name: 'home', component: home ,beforeEnter: checkLogin,meta:{title:"明源2018",keepAlive: true}},
      ]
    },
    {path:'/commonWarp',component:CommonWarp,name:'commonWarp',meta:{title:"明源2018",keepAlive: false}, children:[]},
    {path:'/myWarp',component:MyWarp,name:'myWarp',meta:{title:"明源2018",keepAlive: false},children:[]},
    {path:'/keyword',component:Keyword,name:'keyword',meta:{title:"明源2018",keepAlive: false},children:[]},
    {path:'/detail',component:Detail,name:'detail',meta:{title:"明源2018",keepAlive: false},children:[]},
  ]

export default new VueRouter({ routes: routes,linkActiveClass:'link-active'})
