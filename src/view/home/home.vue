<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="rgb(0,122,255)">
    <van-swipe-item v-for="(item, index) in bannerDataRef" :key="index">
      <div class="item-box" v-for="banner in item" :key="banner.id">
        <img :src="banner.src" alt="" />
        <div class="title">{{ banner.title }}</div>
      </div>
    </van-swipe-item>
  </van-swipe>
</template>

<script lang='ts'>
import { getData } from "./index";
export default {
  setup() {
    return {
      ...getData(),
    };
  },
};
</script>

<style scoped lang='less'>
.my-swipe .van-swipe-item {
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  padding: 0.5rem;
  flex-wrap: wrap;
  text-align: center;
  background-color: #fff;
  .item-box {
    width: 5rem;
    height: 5rem;
    img {
      width: 64%;
      height: 60%;
    }
    .title {
      font-size: 0.8rem;
      color: rgba(43, 43, 43, 0.801);
    }
  }
}
</style>