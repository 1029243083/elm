<template>
  <div class="wrapper">
    <div class="header">
      <van-nav-bar title="标题" right-text="登录" left-arrow />
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="tabbar-box">
      <van-tabbar v-model="active">
        <van-tabbar-item icon="cart-circle-o">外卖</van-tabbar-item>
        <van-tabbar-item icon="search">标签</van-tabbar-item>
        <van-tabbar-item icon="records">订单</van-tabbar-item>
        <van-tabbar-item icon="contact">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script lang='ts'>
// 头部导航 中部内容 下部导航
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const active = ref(0);
    return {
      active,
    };
  },
});
</script>

<style lang='less'>
@import url("./index.less");
</style>