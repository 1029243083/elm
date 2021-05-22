import { Ref, ref } from "@vue/reactivity"
import { AxiosResponse } from "axios";
import { apis } from "../../axios/api"
import axios from '../../axios/index'
import router from "../../router";
const bannerDataRef: Ref<bannerData> = ref({})

interface banner_item {
    title: string,
    id: string,
    src: string
}

interface bannerData {
    banner1?: banner_item[]
    banner2?: banner_item[]
}

// 获取轮播数据
async function getBannerData() {
    const res: AxiosResponse<bannerData> = await axios.get(apis.banner);
    if (res.data.banner1 && res.data.banner2) {
        bannerDataRef.value = res.data
    }
}

getBannerData()

const handleClick = (id: string) => {
    router.push({
        name: 'classify',
        params: {
            id
        }
    })
}

export function getData() {
    return {
        bannerDataRef,
        handleClick
    }
}