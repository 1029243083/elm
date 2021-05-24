<template>
  <div class="wrapper">
    <header>
      <van-nav-bar
        title="确认订单"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </header>
    <div class="conent">
      <van-contact-card type="add" @click="onAdd" v-if="!address.name" />
      <van-contact-card
        v-else
        type="edit"
        :name="address.name"
        :tel="address.tel"
      />
      <div class="box1">
        <div class="text1">送到时间</div>
        <div class="text2-box">
          <div class="text3">尽快送达|预计23:00</div>
          <div class="text4">蜂鸟配送</div>
        </div>
      </div>
      <div class="box2">
        <div class="title">
          <img
            src="http://dummyimage.com/200x100/50B347/FFF&text=商家头像"
            alt=""
          />
          <span>手动阀手动阀</span>
        </div>
        <div class="item" v-for="item in purchasedItem" :key="item.id">
          <div class="item-title">{{ item.title }}</div>
          <div class="num">x{{ item.num }}</div>
          <div class="price">{{ item.num * item.price }}</div>
        </div>
      </div>
      <van-cell is-link title="发票抬头" @click="show = true" />
      <van-action-sheet
        v-model:show="show"
        :actions="actions"
        @select="onSelect"
      />
    </div>
    <div class="bottom-box">
      <div class="text">待支付￥{{ totalPrice }}</div>
      <div class="btn" @click="handleClick">确认下单</div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import { mapState } from "vuex";
import Data from "./index";
export default defineComponent({
  computed: mapState(["purchasedItem", "totalPrice", "address"]),
  setup() {
    return {
      ...Data(),
    };
  },
});
</script>

<style scoped lang='less'>
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  header {
    flex: 1;
  }
  .conent {
    flex: 10;
    overflow: auto;
    .box1 {
      display: flex;
      height: 6rem;
      margin-top: 0.8rem;
      box-sizing: border-box;
      padding: 0.3rem;
      border-top: 0.7rem solid #eee;
      border-bottom: 0.7rem solid #eee;
      border-left: 0.7rem solid rgb(49, 144, 232);
      .text1 {
        height: 100%;
        flex: 1;
        text-align: center;
        line-height: 4rem;
        font-weight: bold;
        font-size: 1.2rem;
      }
      .text2-box {
        flex: 1;
        height: 100%;
        text-align: right;
        .text3 {
          padding-bottom: 0.7rem;
          color: rgb(49, 144, 232);
        }
        .text4 {
          width: 3rem;
          padding: 0.2rem;
          border-radius: 0.2rem;
          margin-left: 7rem;
          font-size: 0.4rem;
          background-color: rgb(49, 144, 232);
          color: #fff;
        }
      }
    }
    .box2 {
      box-sizing: border-box;
      padding: 0 0.4rem;
      .title {
        display: flex;
        align-items: center;
        padding: 0.7rem;
        border-bottom: 0.01rem solid #eee;
        img {
          width: 2rem;
          height: 2rem;
        }
        span {
          font-size: 1.1rem;
          font-weight: bold;
        }
      }
      .item {
        display: flex;
        justify-content: space-between;
        border-bottom: 0.01rem solid #eee;
        color: #666;
        padding: 0.8rem 0.3rem;
        .item-title {
        }
        .num {
          color: #f50;
        }
      }
    }
  }
  .bottom-box {
    flex: 1;
    display: flex;
    background-color: rgb(60, 60, 60);
    align-items: center;
    .text {
      flex: 4;
      height: 100%;
      box-sizing: border-box;
      padding-top: 1rem;
      color: #fff;
      padding-left: 1rem;
    }
    .btn {
      flex: 2;
      text-align: center;
      height: 100%;
      box-sizing: border-box;
      padding-top: 1rem;
      color: #fff;
      background-color: rgb(49, 144, 232);
    }
  }
}
</style>