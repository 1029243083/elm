import { onMounted, reactive, ref } from "vue";

import { childrenType, classifyItem } from './config'

// 分类框的数据
const state = reactive({
    value1: '分类',
});

const activeIndex = ref(0) // 分类左边的索引
const dropdown = ref()

export default function () {
    // 点击分类的右边事件
    const handleItem = (data: childrenType) => {
        state.value1 = data.text
        console.log(dropdown.value.toggle(false))
    }
    return {
        state,
        activeIndex,
        items: classifyItem,
        handleItem,
        dropdown
    }
}