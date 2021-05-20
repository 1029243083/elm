import { Ref, ref } from "@vue/reactivity"
import { AxiosResponse } from "axios"
import { apis } from "../../axios/api"
import axios from '../../axios/index'
import router from "../../router"

export interface shopListType {
    title: string,
    img: string,
    pinpai: string,
    star: number,
    salesVolume: number,
    riseGiveMoney: number,
    DistributionFee: number,
    distance: number,
    time: number,
    id: string
}

interface resultType {
    shopList: shopListType[]
}

const loading = ref(true) // 是否处于加载状态
const finished = ref(false) // 是否加载完成
const shopListRef: Ref<shopListType[]> = ref([])
const onLoad = () => { // 	滚动条与底部距离小于 offset 时触发
    loading.value = true
    getData()
    if (shopListRef.value.length >= 20) {
        finished.value = true
    }

}
const getData = async () => {
    const data: AxiosResponse<resultType> = await axios.get(apis.shopList);
    shopListRef.value = [...shopListRef.value, ...data.data.shopList]
    loading.value = false
}
getData()

const handleClick = (id: string) => {
    router.push({
        name: 'shopInfo',
        params: {
            id
        }
    })
}

export default function Data() {
    return {
        loading,
        finished,
        shopListRef,
        onLoad,
        handleClick,
        value: 3
    }
}