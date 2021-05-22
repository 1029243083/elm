<template>
  <div>
    <van-nav-bar
      title="筛选"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-dropdown-menu>
      <van-dropdown-item
        v-model="state.value1"
        :title="state.value1"
        ref="dropdown1"
      >
        <van-tree-select
          v-model:main-active-index="activeIndex"
          height="85vw"
          :items="items"
          @click-item="handleItem"
        />
      </van-dropdown-item>
      <van-dropdown-item title="排序" ref="dropdown2" v-model="state.value2">
        <van-cell
          v-for="item in sortArr"
          :key="item.type"
          :title="item.text"
          icon="location-o"
          @click="sortClick(item.type)"
        />
      </van-dropdown-item>
      <van-dropdown-item title="筛选" ref="dropdown3">
        <div class="screen-wrapper">
          <div class="fangshi">
            <div class="title">配色方式</div>
            <div class="item-box">
              <div class="item">
                <div class="text">
                  <div class="icon">
                    <van-icon name="star" />
                  </div>
                  <span>蜂鸟配送</span>
                </div>
              </div>
            </div>
          </div>
          <div class="shuxing">
            <div class="title">商家属性（可以多选）</div>
            <div
              class="item-box"
              v-for="item in srceenRef"
              :key="item.id"
              @click="shuxingClick(item)"
            >
              <div class="item">
                <div class="text" :class="{ active: item.isSelect }">
                  <div class="icon">
                    <van-icon name="star" />
                  </div>
                  <span>{{ item.text }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="btn">
          <van-button type="primary" size="normal" @click="btnClick('no')"
            >取消</van-button
          >
          <van-button type="success" size="normal" @click="btnClick('ok')"
            >确定</van-button
          >
        </div>
      </van-dropdown-item>
    </van-dropdown-menu>
    <ShopItem v-for="item in DataRef" :item="item" :key="item.id" />
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import Data from "./index";
import ShopItem from "../../components/shopItem/shopItem.vue";

export default defineComponent({
  components: {
    ShopItem,
  },
  setup() {
    // console.log(useRoute().params.id);
    return {
      ...Data(),
    };
  },
});
</script>

<style scoped lang='less'>
.screen-wrapper {
  box-sizing: border-box;
  padding: 0.6rem;
  .fangshi {
    .title {
      font-size: 0.5rem;
      color: #666;
    }
    .item-box {
      padding-top: 0.3rem;
      padding-bottom: 0.3rem;
      .item {
        display: flex;
        align-items: center;
        font-size: 0.6rem;
        .text {
          display: flex;
          align-items: center;
          border: 0.01rem solid rgba(207, 207, 207, 0.404);
          padding: 0.6rem;
          .icon {
            margin-right: 0.3rem;
            color: #666;
          }
          span {
            color: #666;
          }
        }
      }
    }
  }
  .shuxing {
    display: flex;
    flex-wrap: wrap;
    .title {
      width: 100%;
      font-size: 0.5rem;
      color: #666;
    }
    .item-box {
      width: 29%;
      padding-top: 0.3rem;
      padding-bottom: 0.3rem;
      margin-right: 0.4rem;
      .item {
        width: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        font-size: 0.6rem;
        .text {
          width: 100%;
          text-align: center;
          display: flex;
          align-items: center;
          color: #666;
          border: 0.01rem solid rgba(207, 207, 207, 0.404);
          padding: 0.6rem;
          .icon {
            margin-right: 0.3rem;
          }
          span {
          }
        }
        .text.active {
          color: rgb(103, 151, 255);
          border: 0.01rem solid rgb(103, 151, 255);
        }
      }
    }
  }
}
.btn {
  display: flex;
  .van-button {
    width: 50%;
  }
}
</style>