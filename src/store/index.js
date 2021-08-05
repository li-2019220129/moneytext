import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);
let shopInfo={}
export default new Vuex.Store({
  state: {
    //数据结构 { shopId: {shopName:'', productList:{ productId: {} }}}
    cartList: {
    },
  },
  mutations: {
    changeCartItemInfo(state, payload) {
      // const { shopId, productId, productInfo } = payload
      // let shopInfo = state.cartList[shopId]
      // if (!shopInfo) {
      //   shopInfo = { shopName: '', productList: {} }
      //   state.cartList[shopId] = shopInfo
      // }
      // let product = shopInfo.productList[productId]
      // if (!product) {
      //   product = productInfo
      //   product.count = 0
      //   shopInfo.productList[productId] = product
      // }
      // product.count += payload.num
      // if (payload.num > 0) {
      //   product.check = true
      // }
      // if (product.count < 0 || product.count === 0) {
      //   product.count = 0
      //   product.check = true
      // }
      const { shopId, productId, productInfo } = payload;
      if(Object.keys(shopInfo).length===0){
        shopInfo[shopId]={shopName:'', productList:{}}
        // state.cartList= shopInfo  
      } 
      if(!shopInfo[shopId].productList[productId]){
        productInfo.count=0
        productInfo.check=true
        shopInfo[shopId].productList[productId]=productInfo
        if(Object.keys(state.cartList).length===0){
          Vue.set(state,'cartList',shopInfo)
        }else{
          Vue.set(state.cartList[shopId].productList,productId,productInfo)
        }
      }
        state.cartList[shopId].productList[productId].count+=payload.num
        if (payload.num > 0) {
          state.cartList[shopId].productList[productId].check = true;
        }
        if (state.cartList[shopId].productList[productId].count < 0 || state.cartList[shopId].productList[productId].count === 0) {
          state.cartList[shopId].productList[productId].count = 0;
          state.cartList[shopId].productList[productId].check = true;
          }
    },
  },
  actions: {},
  getters: {},
});
