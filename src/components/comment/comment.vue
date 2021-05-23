<template>
  <div class="comment-wrapper">
    <div class="header">
      <div class="left">
        <div class="num1">{{ header.score }}</div>
        <div class="text1">综合评价</div>
        <div class="text2">高于周边商家{{ header.num }}%</div>
      </div>
      <div class="right">
        <div class="text1">
          <span>服务态度:</span>
          <van-rate
            v-model="header.score"
            size="0.6rem"
            color="#ffd21e"
            void-icon="star"
            void-color="#eee"
          />
        </div>
        <div class="text2">
          <span>菜品评论:</span>
          <van-rate
            v-model="header.score"
            size="0.6rem"
            color="#ffd21e"
            void-icon="star"
            void-color="#eee"
          />
        </div>
        <div class="text3">
          <span>送到时间:</span>
          <span> {{ header.time }}分钟</span>
        </div>
      </div>
    </div>
    <div class="center">
      <div class="center-item" v-for="item in center" :key="item.text">
        {{ item.text }}（{{ item.num }}）
      </div>
    </div>
    <div class="list">
      <commentCard :bottomData="bottomData" />
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import commentCard from "../commentCard/commentCard.vue";
export default defineComponent({
  props: ["header", "center", "bottomData"],
  components: {
    commentCard,
  },
  setup() {
    return {
      value1: 4,
      value2: 4,
      value3: 4,
    };
  },
});
</script>

<style scoped lang='less'>
.comment-wrapper {
  .header {
    padding: 0.5rem;
    display: flex;
    padding-bottom: 0.5rem;
    border-bottom: 1rem solid #eee;
    .left {
      width: 50%;
      text-align: center;
      .num1 {
        font-size: 1.4rem;
        color: #f40;
        font-weight: bold;
      }
      .text1 {
        color: #666;
        padding: 0.3rem 0;
      }
      .text2 {
        font-size: 0.4rem;
        color: #999;
      }
    }
    .right {
      width: 50%;
      color: rgb(150, 150, 150);
      .text1 {
      }
      .text2 {
        padding: 0.3rem 0;
      }
    }
  }
  .center {
    padding: 0.3rem;
    padding-top: 0.8rem;
    display: flex;
    flex-wrap: wrap;
    .center-item {
      font-size: 0.5rem;
      background-color: rgb(235, 245, 255);
      color: #666;
      text-align: center;
      padding: 0.5rem 0.4rem;
      margin-bottom: 0.6rem;
      border-radius: 0.28rem;
      margin-right: 0.4rem;
    }
    .center-item.active {
      background-color: rgb(49, 144, 232);
      color: #fff;
    }
  }
}
</style>