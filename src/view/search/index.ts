import { Ref, ref } from "@vue/reactivity"
import { getSotrage, setStorage } from "../../util"
import axios from '../../axios/index'
import { apis } from "../../axios/api"
import { AxiosResponse } from "axios"
import { shopListType } from "../../components/shopList"
import router from "../../router"

interface recordsListType {
    value: string
}

const value = ref('') // 输入框的数据
const recordsListRef: Ref<recordsListType[]> = ref([]) // 历史记录的数据存本地
const searchShopListRef: Ref<shopListType[]> = ref([])

// 获取历史记录 首次加载
const getRecordsList = () => {
    const res = getSotrage('recordsList')
    if (res) {
        recordsListRef.value = JSON.parse(res)
    }
}
getRecordsList()

// 搜索时间 按按钮 回车键 触发
const onSearch = () => {
    const res = getSotrage('recordsList')
    if (res === null || !res) {
        setStorage('recordsList', JSON.stringify([{
            value: value.value
        }]))
    } else {
        const newData = [...JSON.parse(res), { value: value.value }]
        setStorage('recordsList', JSON.stringify(newData))
    }
    recordsListRef.value.push({ value: value.value })
    getSearchData()
}

//删除一跳历史记录
const deleteRecors = (index: number) => {
    recordsListRef.value.splice(index, 1);
    setStorage('recordsList', JSON.stringify(recordsListRef.value))
}
// 删除所有历史记录
const deleteAll = () => {
    recordsListRef.value = []
    setStorage('recordsList', [])
}

// 获取搜索数据
const getSearchData = async () => {
    const res: AxiosResponse<{ shopList: shopListType[] }> = await axios.get(apis.shopList)
    searchShopListRef.value = [...res.data.shopList]
}

// 点击输入框的 x 
const clear = () => {
    searchShopListRef.value = []
    value.value = ''
}

// 跳转到店铺
const handleClick = (id: string) => {
    console.log('asdf')
    router.push({
        name: 'shopInfo',
        params: {
            id
        }
    })
}

// 点击文字搜索
const clickRecords = (inputValue: string) => {
    value.value = inputValue
    getSearchData()
}

export default function () {
    return {
        value,
        recordsListRef,
        searchShopListRef,
        onSearch,
        deleteRecors,
        deleteAll,
        clear,
        handleClick,
        clickRecords
    }
}