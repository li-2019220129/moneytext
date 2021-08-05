<template>
  <div class="shop-info">
    <div
      class="shop-list"
    >
      <div class="shop-img">
        <img :src="item.imgUrl" alt="" />
      </div>
      <div class="message">
        <p>{{ item.name }}</p>
        <div class="message-span">
          <span>月售: {{ item.sales }}</span>
          <span>起送￥ {{ item.expressLimit }}</span>
          <span>基础运费￥ {{ item.expressPrice }}</span>
        </div>
        <div class="message-text">{{ item.slogan }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopInfo",
  props: ["item"],
};
</script>

<style lang="scss" scoped>
.shop-list {
  display: flex;
  width: 100%;
  margin-bottom: 0.1rem;
  .shop-img {
    width: 0.56rem;
    height: 0.56rem;
    margin-right: 0.12rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .message {
    flex: 1;
    box-sizing: border-box;
    border-bottom: 1px solid #f1f1f1;
    padding-bottom: 0.08rem;
    p {
      padding: 0;
      margin: 0;
      margin-bottom: 0.12rem;
      font-size: 0.16rem;
    }
    .message-span {
      margin-bottom: 0.08rem;
      span {
        margin-right: 0.12rem;
      }
    }
    .message-text {
      color: #e93b3b;
    }
  }
}
</style>
