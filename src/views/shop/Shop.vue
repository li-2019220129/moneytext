<template>
  <div class="shop">
    <div class="search">
      <div class="search__back iconfont" @click="handleBackClick">&#xe602;</div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe687;</span>
        <input class="search__content__input" placeholder="请输入商品名称" />
      </div>
    </div>
    <shop-info :item="list"/>
    <ContentShop :shopName="list.name"/>
  </div>
</template>

<script>
import ShopInfo from '../../components/ShopInfo.vue'
import ContentShop from './ShopChildren/ContentShop.vue'
export default {
    name:"Shop",
    data(){
        return {
            list:{}
        }
    },
    components:{
        ShopInfo,
        ContentShop
    },
    created(){
        this.getList()
    },
    methods:{
        handleBackClick(){
            this.$router.back()
        },
       async getList(){
           let {data:res}= await this.axios.get(`/api/shop/${this.$route.params.id}`)
           this.list=res.data
           console.log(this.list)
        }
    }
};
</script>

<style lang="scss" scoped>
.shop{
    padding: 0 0.18rem;
}
.search {
  display: flex;
  margin: 0.14rem 0 0.18rem 0;
  height: 0.32rem;
  &__back {
      box-sizing: border-box;
    margin-right: 0.1rem;
    line-height: 0.32rem;
    width: 0.3rem;
    font-size: 0.3rem;
    color: #b6b6b6;
  }
  &__content {
    display: flex;
    flex: 1;
    background: #f5f5f5;
    border-radius: 0.16rem;
    &__icon {
        font-size: 0.18rem;
      box-sizing: border-box;
      width: 0.44rem;
      text-align: center;
      line-height: 0.32rem;
      color: #b7b7b7;
    }
    &__input {
      flex: 1;
      padding-right: 0.2rem;
      border: none;
      outline: none;
      background: none;
      height: 0.32rem;
      font-size: 0.14rem;
      color: #333;
      &::placeholder {
        color: #333;
      }
    }
  }
}
</style>
