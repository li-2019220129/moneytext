<template>
    <div class="meun">
      <a
        href="javascript:;"
        :class="{ active: index === number }"
        v-for="(item, index) in list"
        :key="item.id"
      >
        <div class="iconfont icon" v-html="item.icon"></div>
        <div class="text">{{ item.text }}</div>
      </a>
    </div>
</template>

<script>
export default {
  name: "Footer",
  props:{
      number:{
          type:Number,
          defalute:0
      }
  },
  data() {
    return {
      list: [
        {
          id: 1,
          text: "首页",
          icon: "&#xe600;",
          to: { name: 'Home' }
        },
        {
          id: 2,
          text: "购物车",
          icon: "&#xe616;",
          to: { name: 'Home' }
        },
        {
          id: 3,
          text: "订单",
          icon: "&#xe604;",
          to: { name: 'Home' }
        },
        {
          id: 4,
          text: "我的",
          icon: "&#xe606;",
          to: { name: 'Home' }
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.meun {
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 0.49rem;
  background-color: #fff;
  border-top: 0.01rem solid #f1f1f1;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    text-decoration: none;
    color: #333;
    .icon {
      font-size: 0.2rem;
      margin: 0.06rem 0 0.02rem 0;
      width: 0.2rem;
      height: 0.2rem;
    }
    .text {
      font-size: 0.2rem;
      transform: scale(0.5);
      transform-origin: center;
    }
  }
  .active {
    color: blue;
  }
}
</style>
