import axios, { AxiosResponse } from "axios"
import { Ref, ref } from "vue"
import { apis } from "../../axios/api"
import router from "../../router"

const changeIndex = ref(0)

const handleChangeIndex = (index: number) => {
    changeIndex.value = index
}

const back = () => {
    router.back()
}

interface shopInfoLeftType {
    id: string,
    title: string
}

interface resultLeft {
    shopInfoLeft: shopInfoLeftType[]
}

interface shopInfoRightType {
    id: string
    title: string
    desc: string
    salesVolume: number
    praise: number
    redText: string
    price: number
    img: string
}

interface resultRight {
    shopInfoRight: shopInfoRightType[]
}

interface headerType {
    shopInfoHeader: {
        img?: string,
        desc?: string,
        notice?: string,
        title?: string
    }
}

const leftRes: Ref<shopInfoLeftType[]> = ref([])
const headerRes: Ref<{
    img?: string,
    desc?: string,
    notice?: string,
    title?: string
}> = ref({})
const rightRes: Ref<shopInfoRightType[]> = ref([])

const getDataLeft = async () => {
    const res: AxiosResponse<resultLeft> = await axios.get(apis.shopInfoLeft)
    leftRes.value = res.data.shopInfoLeft
}
getDataLeft();

const getDataRight = async () => {
    const res: AxiosResponse<resultRight> = await axios.get(apis.shopInfoRight)
    rightRes.value = res.data.shopInfoRight
}
getDataRight()

const leftChange = (number: number) => {
    getDataRight()
}

const getHeader = async () => {
    const res: AxiosResponse<headerType> = await axios.get(apis.shopInfoHeader);
    headerRes.value = res.data.shopInfoHeader
}

getHeader()

export default function () {
    return {
        handleChangeIndex,
        changeIndex,
        back,
        leftChange,
        leftRes,
        rightRes,
        headerRes
    }
}