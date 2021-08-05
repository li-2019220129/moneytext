<template>
  <div class="nearby-shop">
    <div class="bar"></div>
    <h2 class="text">附近店铺</h2>
    <router-link v-for="item in list" :key="item._id" :to="`/shop/${item._id}`">
      <shop-info :item="item"/>
    </router-link>
  </div>
</template>

<script>
import ShopInfo from "../../../components/ShopInfo.vue";
export default {
  components: { ShopInfo },
  name: "NearbyShop",
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      let { data: res } = await this.axios.get("/api/shop/hot-list");
      if (res.errno === 0 && res.data.length) {
        this.list = res.data;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.nearby-shop {
  .bar {
    margin: 0.2rem -0.18rem 0 -0.18rem;
    height: 0.1rem;
    background-color: #f1f1f1;
  }
  .text {
    font-weight: 550;
    color: #333333;
  }
  a{
    text-decoration: none;
     color: #333333;
  }
}
</style>
