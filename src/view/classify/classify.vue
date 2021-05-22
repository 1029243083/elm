<template>
  <div>
    <van-dropdown-menu>
      <van-dropdown-item
        v-model="state.value1"
        :title="state.value1"
        ref="dropdown"
      >
        <van-tree-select
          v-model:main-active-index="activeIndex"
          height="85vw"
          :items="items"
          @click-item="handleItem"
        />
      </van-dropdown-item>
      <van-dropdown-item title="排序" />
      <van-dropdown-item title="筛选" />
    </van-dropdown-menu>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import Data from "./index";

export default defineComponent({
  setup() {
    // console.log(useRoute().params.id);
    return {
      ...Data(),
    };
  },
});
</script>

<style>
</style>