<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style>
body,
html,
#app {
  height: 100%;
  overflow: auto;
}
</style>
