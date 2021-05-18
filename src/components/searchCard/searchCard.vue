<template>
  <div class="shop-item">
    <div class="shop-item-img-box">
      <img :src="img" alt="" />
    </div>
    <div class="shop-info-box">
      <div class="title">
        {{ title }}
        <span>支付</span>
      </div>
      <div class="salesVolume">月销{{ salesVolume }}单</div>
      <div class="qisong">{{ riseGiveMoney }}元起送/距离{{ distance }}公里</div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
export default defineComponent({
  props: ["title", "salesVolume", "riseGiveMoney", "distance", "img"],
});
</script>

<style scoped lang='less'>
.shop-item {
  display: flex;
  font-size: 0.8rem;
  box-sizing: border-box;
  padding: 0.3rem;
  color: #333;
  background: #fff;
  border-bottom: 0.01rem solid rgba(224, 224, 224, 0.61);
  .shop-item-img-box {
    width: 4rem;
    height: 4rem;
    box-sizing: border-box;
    padding: 0.3rem;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .shop-info-box {
    .title {
      font-weight: bold;
      span {
        color: rgb(253, 51, 51);
        font-size: 0.2rem;
        border: 0.01rem solid rgb(253, 51, 51);
      }
    }
    .salesVolume {
      padding: 0.4rem;
      padding-left: 0;
    }
  }
}
</style>