<template>
  <div class="wrapper">
    <div class="home">
      <Commodity />
      <NearbyShop /> 
    </div>
    <Footer :number="0" />
  </div>
</template>

<script>
import Footer from "../../components/Footer.vue";
import Commodity from "./HomeChildren/Commodity.vue";
import NearbyShop from "./HomeChildren/NearbyShops.vue";
export default {
  name: "Home",
  components: {
    Footer,
    Commodity,
    NearbyShop
  }
};
</script>

<style lang="scss" scoped>
.home {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0.5rem;
  box-sizing: border-box;
  overflow-y: auto;
  padding: 0 0.18rem 0 0.18rem;
}
</style>