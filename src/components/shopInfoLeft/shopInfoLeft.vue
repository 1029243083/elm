<template>
  <div
    v-for="(item, index) in data"
    :key="item.id"
    class="item"
    :class="{ active: index === current }"
    @click="changeIndex(index)"
  >
    {{ item.title }}
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import Data from "./index";
export default defineComponent({
  emits: ["leftChange"],
  props: ["data"],
  setup(prop, ctx) {
    return {
      ...Data(ctx),
    };
  },
});
</script>

<style scoped>
.item {
  width: 100%;
  box-sizing: border-box;
  padding: 1rem 0;
  padding-left: 0.4rem;
  border-left: 0.2rem solid transparent;
}
.item.active {
  border-left: 0.2rem solid rgb(133, 155, 255);
  background-color: #fff;
}
</style>