import { reactive, Ref, ref } from "vue";
import router from "../../router";
import axios from '../../axios/index'

import { childrenType, classifyItem, sortArr, screenArr, shuxingItemType } from './config'
import { apis } from "../../axios/api";
import { resultType, shopListType } from "../../components/shopList";
import { AxiosResponse } from "axios";

// 分类框的数据
const state = reactive({
    value1: '分类',
    value2: ""
});

const activeIndex = ref(0) // 分类左边的索引
const dropdown1 = ref() // dom元素
const dropdown2 = ref() // dom元素
const dropdown3 = ref() // dom元素
const srceenRef = ref(screenArr)
const DataRef: Ref<shopListType[]> = ref([])



const shuxingClick = (item: shuxingItemType) => {
    item.isSelect = !item.isSelect
}

const onClickLeft = () => {
    router.back()
}

const getData = async () => {
    const res: AxiosResponse<resultType> = await axios.get(apis.shopList)
    DataRef.value = res.data.shopList
}

getData()



export default function () {
    // 点击分类的右边事件
    const handleItem = (data: childrenType) => {
        state.value1 = data.text
        dropdown1.value.toggle(false)
        getData()
    }
    const sortClick = (type: number) => {
        if (type === 0) {
            DataRef.value.sort(() => {
                return Math.random() - 0.5
            })
        } else if (type === 1) {
            DataRef.value.sort((a, b) => {
                return a.distance - b.distance
            })
        }
        else if (type === 2) {
            DataRef.value.sort((a, b) => {
                return a.salesVolume - b.salesVolume
            })
        }
        else if (type === 3) {
            DataRef.value.sort((a, b) => {
                return a.riseGiveMoney - b.riseGiveMoney
            })
        }
        else if (type === 4) {
            DataRef.value.sort((a, b) => {
                return a.time - b.time
            })
        }
        else if (type === 5) {
            DataRef.value.sort((a, b) => {
                return a.DistributionFee - b.DistributionFee
            })
        }
        dropdown2.value.toggle(false)
    }

    const btnClick = (type: 'no' | 'ok') => {
        if (type === 'no') {
            dropdown3.value.toggle(false)
        } else {
            dropdown3.value.toggle(false)
            getData()
        }
    }
    return {
        state,
        activeIndex,
        items: classifyItem,
        handleItem,
        sortClick,
        shuxingClick,
        btnClick,
        onClickLeft,
        dropdown1,
        sortArr,
        dropdown2,
        srceenRef,
        dropdown3,
        DataRef
    }
}