import Vue from 'vue'
import VueRouter from 'vue-router'
import CartList from '../views/Cart/CartList.vue'
import Home from '../views/home/Home.vue'
import Shop from '../views/shop/Shop.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/shop/:Id',
    name:'Shop',
    component:Shop
  },
  {
    path:'/cart',
    name:'CartList',
    component:CartList
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to,from,next)=>{
  if(to.path==='/cart'){
    next('/home')
  }else{
    next()
  }
})
export default router
