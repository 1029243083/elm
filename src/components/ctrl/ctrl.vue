<template>
  <div class="wrapper">
    <div class="img-box">
      <div class="i">{{ itemNum }}</div>
      <img src="../../assets/card.png" alt="" />
    </div>
    <div class="price">
      <div class="num">￥{{ price }}</div>
      <div>配送费￥5</div>
    </div>
    <div class="btn" @click="handlClick">结算</div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import { mapState } from "vuex";
import router from "../../router";
import { stateType } from "../../store";
export default defineComponent({
  computed: mapState({
    itemNum(state: stateType) {
      return state.purchasedItem.length;
    },
    price(state: stateType) {
      let res = 0;
      for (let i = 0; i < state.purchasedItem.length; i++) {
        if (state.purchasedItem[i].num !== 0) {
          res += state.purchasedItem[i].price * state.purchasedItem[i].num;
        }
      }
      return res;
    },
  }),

  setup() {
    const handlClick = () => {
      router.push({
        name: "orderinfo",
      });
    };
    return {
      handlClick,
    };
  },
});
</script>

<style scoped lang='less'>
.wrapper {
  width: 100%;
  height: 3rem;
  display: flex;
  background: rgb(73, 73, 73);
  position: relative;
  .img-box {
    position: relative;
    margin-left: 1rem;
    display: flex;
    align-items: center;
    position: absolute;
    background: rgb(73, 73, 73);
    top: -1.7rem;
    width: 2.5rem;
    height: 2.5rem;
    border: 0.5rem solid rgb(73, 73, 73);
    border-radius: 50%;
    .i {
      position: absolute;
      background-color: #f40;
      border-radius: 50%;
      font-size: 0.6rem;
      padding: 0 0.2rem;
      top: -0.7rem;
      color: #fff;
      right: -0.3rem;
    }
    img {
      background: rgb(255, 255, 255);
      border-radius: 50%;
      width: 100%;
      height: 100%;
    }
  }
  .price {
    color: #fff;
    margin-left: 6rem;
    .num {
      font-weight: bold;
      font-size: 1.2rem;
    }
    div {
      font-size: 0.5rem;
    }
  }
  .btn {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    color: #fff;
    padding: 0 3rem;
    text-align: center;
    line-height: 3rem;
    background-color: cornflowerblue;
  }
}
</style>