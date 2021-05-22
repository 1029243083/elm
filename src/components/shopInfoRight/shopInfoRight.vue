<template>
  <ShopInfoRightCard v-for="item in data" :carData="item" :key="item.id" />
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import ShopInfoRightCard from "../shopInfoRightCard/shopInfoRightCard.vue";
export default defineComponent({
  props: ["data"],
  components: {
    ShopInfoRightCard,
  },
});
</script>

<style>
</style>