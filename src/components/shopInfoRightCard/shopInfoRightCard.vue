<template>
  <div class="right-item">
    <div class="img-box">
      <img :src="carData.img" alt="" />
    </div>
    <div class="info-box">
      <div class="title">{{ carData.title }}</div>
      <div class="desc">{{ carData.desc }}</div>
      <div class="salesVolume">
        月售{{ carData.salesVolume }}分 好评率{{ carData.praise }}%
      </div>
      <div class="red-text">{{ carData.redText }}</div>
      <div class="price">
        <div class="price-num">￥{{ carData.price }}</div>
        <div class="btn-box">
          <div class="reduce" @click="changeNum('reduce', carData)">-</div>
          <div class="num">{{ carData.num }}</div>
          <div class="add" @click="changeNum('add', carData)">+</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import store from "../../store";
import { shopInfoRightType } from "../../view/shopInfo";
export default defineComponent({
  props: ["carData"],
  setup() {
    const changeNum = (type: string, carData: shopInfoRightType) => {
      if (type === "reduce") {
        if (carData.num <= 0) {
          return;
        }
        carData.num--;
        store.commit("setPurchasedItem", {
          type: "reduce",
          data: carData,
        });
      } else {
        carData.num++;
        store.commit("setPurchasedItem", {
          type: "add",
          data: carData,
        });
      }
    };
    return {
      changeNum,
    };
  },
});
</script>

<style scoped lang='less'>
.right-item {
  width: 100%;
  display: flex;
  border-bottom: 0.01rem solid rgba(223, 223, 223, 0.493);
  padding-bottom: 0.3rem;
  .img-box {
    width: 10%;
    width: 4rem;
    height: 4rem;
    padding-right: 0.4rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .info-box {
    width: 90%;
    .title {
      font-weight: bold;
    }
    .desc {
      font-size: 0.3rem;
      padding: 0.2rem 0;
      color: rgb(138, 138, 138);
    }
    .salesVolume {
      font-size: 0.5rem;
      color: rgb(65, 65, 65);
    }
    .red-text {
      font-size: 0.5rem;
      display: inline-block;
      padding: 0 0.3rem;
      margin-top: 0.2rem;
      border-radius: 0.7rem;
      text-align: center;
      border: 0.01rem solid rgb(250, 140, 140);
      color: rgb(250, 140, 140);
    }
    .price {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .price-num {
        font-weight: bold;
        font-size: 1.1rem;
        margin-top: 0.2rem;
        color: #f40;
      }
      .btn-box {
        display: flex;
        align-items: center;
        padding-right: 0.3rem;
        .reduce {
          color: cornflowerblue;
          border: 0.01rem solid cornflowerblue;
          border-radius: 50%;
          padding: 0 0.4rem;
        }
        .num {
          padding: 0 0.7rem;
        }
        .add {
          color: cornflowerblue;
          border: 0.01rem solid cornflowerblue;
          border-radius: 50%;
          padding: 0 0.3rem;
        }
      }
    }
  }
}
</style>