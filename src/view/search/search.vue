<template>
  <div>
    <van-search
      v-model="value"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @clear="clear"
    >
      <template #action>
        <div @click="onSearch" class="btn">搜索</div>
      </template>
    </van-search>
  </div>
  <div v-show="searchShopListRef.length == 0" class="searchRecords">
    <h1>搜索记录</h1>
    <div class="records-item-box">
      <div
        class="records-item"
        v-for="(item, index) in recordsListRef"
        :key="index"
      >
        <div class="text">{{ item.value }}</div>
        <div class="icon">
          <van-icon
            name="cross"
            size="1rem"
            color="rgb(213, 213, 213)"
            @click="deleteRecors(index)"
          />
        </div>
      </div>
    </div>
    <div class="records-btn-box">
      <van-button
        v-if="recordsListRef.length"
        plain
        hairline
        type="primary"
        size="large"
        @click="deleteAll"
        >清除历史记录</van-button
      >
      <van-empty v-else description="没有历史记录" />
    </div>
  </div>
  <div v-show="searchShopListRef.length > 0" class="shopList-box">
    <template v-for="item in searchShopListRef" :key="item.id">
      <SearchCard
        :title="item.title"
        :salesVolume="item.salesVolume"
        :riseGiveMoney="item.riseGiveMoney"
        :distance="item.distance"
        :img="item.img"
      />
    </template>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import SearchCard from "../../components/searchCard/searchCard.vue";
import Data from "./index";
export default defineComponent({
  components: {
    SearchCard,
  },
  setup() {
    return {
      ...Data(),
    };
  },
});
</script>

<style scoped lang='less'>
.btn {
  width: 3rem;
  text-align: center;
  color: #fff;
  border-radius: 0.2rem;
  background-color: rgb(49, 144, 232);
}
.searchRecords {
  background-color: #fff;
  padding-bottom: 0.4rem;
  h1 {
    padding: 0.5rem;
    margin: 0;
    font-size: 1rem;
    color: #666;
    background-color: rgba(238, 238, 238, 0.856);
  }
  .records-item-box {
    background-color: #fff;
    .records-item {
      border-bottom: 0.01rem solid rgb(233, 233, 233);
      display: flex;
      box-sizing: border-box;
      padding: 0.8rem 0.3rem 0.8rem 0.3rem;
      justify-content: space-between;
      .text {
      }
      .icon {
      }
    }
  }
  .records-btn-box {
    margin-top: 1rem;
    box-sizing: border-box;
    padding: 0 0.8rem;
  }
}
.shopList-box {
}
</style>