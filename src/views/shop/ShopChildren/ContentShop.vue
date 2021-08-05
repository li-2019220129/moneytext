<template>
  <div class="content">
    <div class="option">
      <div
        :class="{ 'option-list': true, 'option-action': dataIndex === index }"
        v-for="(item, index) in list"
        :key="index"
        @click="optionsClick(item, index)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="details">
      <div class="details-content" v-for="item in contentList" :key="item._id">
        <img class="details-content-img" :src="item.imgUrl" alt="" />
        <div class="details-title">
          <h4 class="details-title-1">{{ item.name }}</h4>
          <p class="details-title-2">月售{{ item.sales }}件</p>
          <p class="details-title-3">
            <span class="details-title-span">￥{{ item.price }}</span
            ><span class="details-title-span1">￥{{ item.oldPrice }}</span>
          </p>
          <div class="shopnum">
            <span
              @click="changeCartItem(shopId, item._id, item, -1, shopName)"
              class="shopnum-antd1"
              >-</span
            >
            {{getProductCartCount(shopId,item._id)}}
            <span
              @click="changeCartItem(shopId, item._id, item, 1, shopName)"
              class="shopnum-antd2"
              >+</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentShop",
  props: ["shopName"],
  data() {
    return {
      dataIndex: 0,
      contentList: [],
      shopId: null,
      list: [
        { name: "全部商品", tab: "all" },
        { name: "秒杀", tab: "seckill" },
        { name: "新鲜水果", tab: "fruit" },
      ],
    };
  },
  created() {
    this.optionsClick(this.list[0]);
  },
  methods: {
    getProductCartCount(shopId, productId) {
      return this.$store.state.cartList?.[shopId]?.productList?.[productId]?.count || 0;
    },
    changeCartItemInfo(shopId, productId, productInfo, num) {
      this.$store.commit("changeCartItemInfo", {
        shopId,
        productId,
        productInfo,
        num,
      });
    },
    async optionsClick(data, index = 0) {
      this.dataIndex = index;
      this.shopId = this.$route.params.Id;
      let { data: res } = await this.axios.get(
        `/api/shop/${this.shopId}/products`,
        {
          tab: data.tab,
        }
      );
      if (res?.errno === 0 && res?.data?.length) {
        this.contentList = res.data;
      }
    },
    changeCartItem(shopId, productId, item, num, shopName) {
    // this.$forceUpdate();
    this.changeCartItemInfo(shopId, productId, item, num,shopName);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../style/mixin.scss";
p {
  margin: 0;
}
.content {
  display: flex;
  position: absolute;
  top: 1.5rem;
  bottom: 0.49rem;
  left: 0;
  right: 0;
  .option {
    width: 0.76rem;
    background: #f5f5f5;
    &-list {
      height: 0.4rem;
      line-height: 0.4rem;
      text-align: center;
      color: #333333;
      font-size: 0.14rem;
    }
    &-action {
      background-color: #fff;
    }
  }
  .details {
    flex: 1;
    overflow-y: auto;
    &-content {
      position: relative;
      display: flex;
      margin: 0 0.1rem;
      padding: 0.12rem 0;
      box-sizing: border-box;
      border-bottom: 1px solid #f1f1f1;
      &-img {
        width: 0.68rem;
        height: 0.68rem;
        margin-right: 0.15rem;
      }
    }
    &-title {
      &-1 {
        margin: 0;
        letter-spacing: 0.01rem;
        font-size: 14px;
        color: #333333;
        @include ellipsis;
      }
      &-2 {
        font-size: 12px;
        color: #333333;
        line-height: 16px;
        margin: 0.08rem 0;
      }
      &-span {
        font-size: 0.14rem;
        color: #e93b3b;
      }
      &-span1 {
        margin-left: 0.1rem;
        font-size: 0.12rem;
        color: #999999;
        text-decoration: line-through;
      }
      .shopnum {
        display: flex;
        align-items: center;
        position: absolute;
        right: 0;
        bottom: 0.12rem;
        &-antd1,
        &-antd2 {
          display: inline-block;
          width: 0.2rem;
          height: 0.2rem;
          border-radius: 50%;
          text-align: center;
          line-height: 0.16rem;
          border: 1px solid #666;
          font-size: 0.2rem;
        }
        &-antd1 {
          box-sizing: border-box;
          line-height: 0.14rem;
          margin-right: 0.1rem;
          color: #666;
        }
        &-antd2 {
          margin-left: 0.1rem;
          border: none;
          color: #fff;
          background-color: #0091ff;
        }
      }
    }
  }
}
</style>
