<template>
  <div class="wrapper" v-for="item in bottomData" :key="item.time">
    <div class="item">
      <img :src="item.av" alt="" />
    </div>
    <div class="info">
      <div class="phone">
        <span>{{ item.info.phone }}</span>
      </div>
      <div class="text1">
        <van-rate
          v-model="item.info.score"
          size="0.5rem"
          color="#ffd21e"
          void-icon="star"
          void-color="#eee"
        />
        <span>按时送到</span>
      </div>
      <div class="img-list">
        <img v-for="src in item.info.imgList" :key="src" :src="src.url" />
      </div>
      <div class="tag">
        <div class="tag-text" v-for="tag in item.info.tag" :key="tag.text">
          {{ tag.text }}
        </div>
      </div>
    </div>
    <div class="tiem">{{ item.time }}</div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
export default defineComponent({
  props: ["bottomData"],
  setup() {
    return {
      value: 1,
    };
  },
});
</script>

<style scoped lang='less'>
.wrapper {
  display: flex;
  padding: 0.3rem;
  border-bottom: 0.01rem solid rgba(226, 226, 226, 0.562);
  .item {
    width: 3rem;
    height: 3rem;
    padding-right: 1rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .info {
    color: #666;
    .phone {
      color: rgb(139, 139, 139);
    }
    .text1 {
      display: flex;
      align-items: center;
      span {
        padding-left: 0.3rem;
        font-size: 0.3rem;
        padding-bottom: 0.3rem;
      }
    }
    .img-list {
      display: flex;
      align-items: center;
      img {
        width: 3rem;
        margin-right: 0.4rem;
        height: 3rem;
        border-radius: 0.3rem;
      }
    }
    .tag {
      margin-top: 0.4rem;
      display: flex;
      align-items: center;
      .tag-text {
        width: 3rem;
        font-size: 0.4rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        border: 0.01rem solid rgba(226, 226, 226, 0.562);
      }
    }
  }
  .tiem {
    flex: 1;
    text-align: right;
    font-size: 0.6rem;
    color: #666;
  }
}
</style>