<template>
  <div class="commodity">
    <div class="header">
      <span class="iconfont iconfont1">&#xe653;</span>
      北京理工大学国防科技园2号楼10层
      <span class="iconfont iconfont2">&#xe60e;</span>
    </div>
    <div class="input-text">
      <span class="iconfont icon">&#xe687;</span>
      <input type="text" placeholder="山姆会员商店优惠商品" />
    </div>
    <div class="shopImg"></div>
    <div class="icons">
      <div class="icons-item" v-for="(item, index) in list" :key="index">
        <img
          :src="`http://www.dell-lee.com/imgs/vue3/${item.imgName}.png`"
          alt=""
        />
        <span>{{ item.desc }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Commodity",
  data() {
    return {
      list: [
        { imgName: "超市", desc: "超市便利" },
        { imgName: "菜市场", desc: "菜市场" },
        { imgName: "水果店", desc: "水果店" },
        { imgName: "鲜花", desc: "鲜花绿植" },
        { imgName: "医药健康", desc: "医药健康" },
        { imgName: "家居", desc: "家居时尚" },
        { imgName: "蛋糕", desc: "烘培蛋糕" },
        { imgName: "签到", desc: "签到" },
        { imgName: "大牌免运", desc: "大牌免运" },
        { imgName: "红包", desc: "红包套餐" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../../style/mixin.scss";
.header {
  position: relative;
  font-size: 0.16rem;
  height: 0.22rem;
  margin: 0.18rem 0 0.18rem 0;
  line-height: 0.22rem;
  padding-right: 0.2rem;
  @include ellipsis;
  .iconfont1 {
    width: 0.2rem;
    height: 0.2rem;
    font-size: 0.2rem;
    margin-right: 0.06rem;
  }
  .iconfont2 {
    width: 0.2rem;
    height: 0.2rem;
    font-size: 0.2rem;
    position: absolute;
    right: 0;
  }
  .textshow {
    margin-right: 0.28rem;
  }
}
.input-text {
  position: relative;
  height: 0.32rem;
  border-radius: 0.1rem;
  background-color: #f5f5f5;
  box-sizing: border-box;
  input {
    padding: 0;
    position: absolute;
    left: 0.5rem;
    width: 80%;
    height: 100%;
    outline: none;
    border: none;
    background-color: #f5f5f5;
  }
  .icon {
    display: inline-block;
    width: 0.3rem;
    height: 100%;
    text-align: center;
    line-height: 0.32rem;
    font-size: 0.24rem;
    margin-left: 0.15rem;
  }
}
.shopImg {
  margin-top: 0.2rem;
  height: 0.86rem;
  border-radius: 0.1rem;
  background-color: #ccc;
  background: url(http://www.dell-lee.com/imgs/vue3/banner.jpg) no-repeat;
  background-position: center;
  background-size: contain;
}
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.2rem;
  &-item{
      margin-top: 0.15rem;
      display: flex;
      width: 20%;
      flex-direction: column;
      align-items: center;
      img{
          width: 0.4rem;
          height: 0.4rem;
          margin-bottom: 0.1rem;
      }
  }
}
</style>
