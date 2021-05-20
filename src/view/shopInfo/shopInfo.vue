<template>
  <div class="shopinfo-wrapper">
    <van-icon name="arrow-left" class="icon-pos" size="1.6rem" @click="back" />
    <div class="header-wrapper">
      <div class="shopinfo-header">
        <div class="img-box">
          <img
            src="https://t7.baidu.com/it/u=4198287529,2774471735&fm=193&f=GIF"
            alt=""
          />
        </div>
      </div>
      <div class="info-box">
        <div class="title">是的发送到</div>
        <div class="peisong">三大法师的</div>
        <div class="desc">
          是的发送到发送到发送到发送到asdfasdfasdfasdfasd发送到发送到发送到
        </div>
      </div>
      <div class="icon">
        <van-icon name="arrow" />
      </div>
    </div>
    <div class="change-box">
      <div @click="handleChangeIndex(0)" :class="{ active: changeIndex === 0 }">
        商品
      </div>
      <div @click="handleChangeIndex(1)" :class="{ active: changeIndex === 1 }">
        评价
      </div>
    </div>
    <div class="content">
      <div class="list-left"></div>
      <div class="list-right"></div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import Data from "./index";
export default defineComponent({
  setup() {
    const route = useRoute();
    console.log(route.params.id);
    return {
      ...Data(),
    };
  },
});
</script>

<style scoped lang='less'>
.shopinfo-wrapper {
  height: 100%;
  .icon-pos {
    position: absolute;
    left: 0;
    color: rgb(48, 43, 43);
  }
  .header-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0.4rem;
    height: 5rem;
    .shopinfo-header {
      .img-box {
        width: 20%;
        width: 4rem;
        height: 4rem;
        padding-right: 0.8rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .info-box {
      width: 73%;
      font-size: 0.6rem;
      .title {
        font-size: 1rem;
        font-weight: bold;
      }
      .peisong {
        padding: 0.3rem 0;
      }
      .desc {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .icon {
      width: 20%;
    }
  }
  .change-box {
    color: #666;
    display: flex;
    width: 100%;
    line-height: 3rem;
    height: 3rem;
    border-bottom: 0.01rem solid rgba(228, 228, 228, 0.247);
    border-top: 0.01rem solid rgba(228, 228, 228, 0.247);
    div {
      flex: 1;
      text-align: center;
    }
    .active {
      color: rgb(96, 169, 252);
      border-bottom: 0.1rem solid rgb(96, 169, 252);
    }
  }
  .content {
    height: calc(100% - 5rem - 3.1rem);
    display: flex;
    .list-left {
      width: 25%;
      height: 100%;
      background: red;
    }
    .list-right {
      height: 100%;
      width: 75%;
      background-color: aqua;
    }
  }
}
</style>