<template>
  <div class="wrapper">
    <div class="header">
      <van-nav-bar :title="title" left-arrow>
        <template #left>
          <van-icon v-if="current == 0" name="search" size="18" />
          <van-icon v-else name="arrow-left" size="18" />
        </template>
        <template #right v-if="current === 0">登录</template>
      </van-nav-bar>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="tabbar-box">
      <van-tabbar v-model="active" @change="handleChange" route>
        <van-tabbar-item to="/home" icon="cart-circle-o">外卖</van-tabbar-item>
        <van-tabbar-item to="/search" icon="search">标签</van-tabbar-item>
        <van-tabbar-item to="/order" icon="records">订单</van-tabbar-item>
        <van-tabbar-item to="/my" icon="contact">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script lang='ts'>
// 头部导航 中部内容 下部导航
import { defineComponent, ref } from "vue";
import { mapState, useStore } from "vuex";
export default defineComponent({
  setup() {
    const active = ref(0);
    const store = useStore();
    const current = ref(0);

    const handleChange = (active: number | string) => {
      let title = "";
      if (typeof active === "number") {
        switch (active) {
          case 0:
            title = "地址";
            current.value = 0;
            break;
          case 1:
            title = "搜索";
            current.value = 1;
            break;
          case 2:
            title = "订单";
            current.value = 2;
            break;
          case 3:
            title = "我的";
            current.value = 3;
            break;
          default:
            break;
        }
      }
      store.commit("setTitle", title);
    };

    return {
      active,
      handleChange,
      current,
    };
  },

  computed: mapState(["title"]),
});
</script>

<style lang='less' scoped>
@import url("./index.less");
</style>