<template>
  <div class="shop-wrapper">
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      :offset="100"
    >
      <!-- <van-cell v-for="item in state.list" :key="item" :title="item" /> -->
      <template #default>
        <div class="item-wrapper" v-for="item in shopListRef" :key="item.id">
          <div class="image-box">
            <img :src="item.img" alt="" />
          </div>
          <div class="info-box">
            <div class="info-header">
              <span class="pinpai">{{ item.pinpai }}</span>
              <span class="title">{{ item.title }}</span>
              <div class="text">
                <span>保</span>
                <span>准</span>
                <span>票</span>
              </div>
            </div>
            <div class="info-center">
              <div class="start">
                <van-rate
                  v-model="item.DistributionFee"
                  size="0.4rem"
                  color="#ffce7b"
                  void-icon="star"
                  void-color="#eee"
                />
              </div>
              <span class="DistributionFee">{{ item.DistributionFee }}</span>
              <span class="salesVolume">月销{{ item.salesVolume }}单</span>
              <div class="btn btn-b">蜂鸟专送</div>
              <div class="btn btn-a">准时达</div>
            </div>
            <div class="info-footer">
              <div class="qisong">
                ￥{{ item.riseGiveMoney }}起送 / 配送费约￥{{
                  item.DistributionFee
                }}
              </div>
              <div>
                {{ item.distance }}公里/<span
                  >{{ new Date(item.time).getMonth() + 1 }}小时{{
                    new Date(item.time).getMinutes()
                  }}分钟</span
                >
              </div>
            </div>
          </div>
        </div>
      </template>
    </van-list>
  </div>
</template>

<script lang='ts'>
import Data from "./index";
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return {
      ...Data(),
    };
  },
});
</script>

<style scoped lang='less'>
.shop-wrapper {
  height: 80%;
  margin-top: 1rem;
  .item-wrapper {
    display: flex;
    align-items: center;
    background-color: #fff;
    width: 100%;
    box-sizing: border-box;
    padding: 0.4rem;
    .image-box {
      width: 4rem;
      height: 4rem;
      padding-right: 0.5rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .info-box {
      flex: 1;
      .info-header {
        display: flex;
        .pinpai {
          flex: 1;
          font-size: 0.3rem;
          border-radius: 0.3rem;
          padding-left: 0.4rem;
          padding-top: 0.1rem;
          font-weight: bold;
          margin-right: 0.5rem;
          padding-right: 0.4rem;
          background-color: rgb(255, 217, 48);
        }
        .title {
          flex: 7;
          font-weight: bold;
        }
        .text {
          display: block;
          flex: 3;
          font-size: 0.3rem;
          span {
            border: 1px solid #dfdfdf;
            margin-left: 0.6rem;
            color: #666;
          }
        }
      }
    }
    .info-center {
      display: flex;
      align-items: center;
      padding: 0.5rem 0 0.5rem 0;
      .DistributionFee {
        padding-left: 0.8rem;
        font-size: 0.9rem;
        color: #fcaf17;
      }
      .salesVolume {
        font-size: 0.3rem;
        padding-left: 0.3rem;
        margin-right: 3rem;
        color: #666;
      }
      .btn {
        font-size: 0.3rem;
      }
      .btn-b {
        color: #fff;
        background-color: rgb(49, 144, 232);
        padding: 0 0.1rem 0 0.1rem;
        margin-right: 0.2rem;
      }
      .btn-a {
        color: rgb(49, 144, 232);
        padding: 0 0.1rem 0 0.1rem;
        font-size: 0.2rem;
        border: 0.01rem solid rgb(49, 144, 232);
      }
    }
    .info-footer {
      display: flex;
      font-size: 0.3rem;
      justify-content: space-between;
      .qisong {
        color: #666;
      }
      div {
        color: #666;
        span {
          color: rgb(49, 144, 232);
        }
      }
    }
  }
}
</style>