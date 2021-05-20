import { Ref, ref } from '@vue/reactivity';
import { AxiosResponse } from 'axios';
import { apis } from '../../axios/api'
import axios from '../../axios/index'

interface orderListType {
    title: string
    itemImg: string[]
    price: string
    service: string
    img: string
}

interface resultType {
    orderList: orderListType[]
}

const loading = ref(false)
const finished = ref(false)
const orderListRef: Ref<orderListType[]> = ref([])

async function getData() {
    const data: AxiosResponse<resultType> = await axios.get(apis.orderList);
    orderListRef.value = [...orderListRef.value, ...data.data.orderList]
    if (orderListRef.value.length >= 15) {
        finished.value = true
    }
    loading.value = false
}
getData();

const onLoad = () => {
    loading.value = true
    getData()
}

export default function () {
    return {
        onLoad,
        loading,
        finished,
        orderListRef
    }
}