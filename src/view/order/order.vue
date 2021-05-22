<template>
  <div>
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div class="item-wrapper" v-for="item in orderListRef" :key="item.id">
        <div class="title" @click="handleClick(item.id)">
          <div class="img-box">
            <img :src="item.img" alt="" />
          </div>
          <div class="title-text">
            {{ item.title }} <van-icon name="arrow" color="#999" />
          </div>
          <div class="service">{{ item.service }}</div>
        </div>
        <div class="food">
          <div class="food-img-box">
            <img
              v-for="src in item.itemImg"
              :key="src.id"
              :src="src.url"
              alt=""
            />
          </div>
          <div class="price">
            <div>￥{{ item.price }}</div>
            <div class="item-num">共{{ item.itemImg.length }}件</div>
          </div>
        </div>
        <div class="btn">
          <van-button plain round hairline type="primary">再来一单</van-button>
        </div>
      </div>
    </van-list>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import Data from "./index";
export default defineComponent({
  setup() {
    return {
      ...Data(),
    };
  },
});
</script>

<style scoped lang='less'>
.item-wrapper {
  background: #fff;
  box-sizing: border-box;
  padding: 0.1rem 0.3rem;
  border-bottom: 1rem solid rgba(219, 219, 219, 0.329);
  .title {
    display: flex;
    padding-top: 0.6rem;
    align-items: center;
    .img-box {
      width: 3rem;
      height: 3rem;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .title-text {
      display: flex;
      align-items: center;
      flex: 1;
    }
    .service {
      color: rgb(141, 141, 141);
      font-weight: 100;
      font-size: 0.4rem;
    }
  }
  .food {
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
    .food-img-box {
      flex: 5;
      font-size: 0;
      img {
        width: 4rem;
        height: 4rem;
        margin-right: 0.3rem;
        border-radius: 0.6rem;
      }
    }
    .price {
      flex: 1;
      text-align: right;
      .item-num {
        font-size: 0.3rem;
        color: rgb(110, 110, 110);
      }
    }
  }
  .btn {
    padding-top: 0.5rem;
    padding-bottom: 0.6rem;
    text-align: right;
    .van-button {
      font-size: 0.5rem !important;
      height: 1.9rem;
    }
  }
}
</style>