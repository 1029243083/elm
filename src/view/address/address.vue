<template>
  <van-address-edit
    :show-area="false"
    show-postal
    show-delete
    show-set-default
    show-search-result
    :area-columns-placeholder="['请选择', '请选择', '请选择']"
    @save="onSave"
    @delete="onDelete"
    @change-detail="onChangeDetail"
  />
</template>

<script lang='ts'>
import { defineComponent, Ref, ref } from "vue";
import router from "../../router";
import store from "../../store";
export default defineComponent({
  setup() {
    const onSave = (content: any) => {
      console.log(content.name);

      store.commit("setAddress", JSON.stringify(content));
      router.back();
    };
    const onDelete = (content: any) => {
      console.log(content);
    };
    const onChangeDetail = () => {
      console.log("onChangeDetail");
    };
    return {
      onSave,
      onDelete,
      onChangeDetail,
    };
  },
});
</script>

<style>
</style>