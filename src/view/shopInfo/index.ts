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

export interface shopInfoRightType {
    id: string
    title: string
    desc: string
    salesVolume: number
    praise: number
    redText: string
    price: number
    img: string,
    num: number
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

interface commentType {
    header?: {
        num: number,
        score: number,
        time: number
    },
    center?: {
        text: string,
        num: number
    }[],
    bottomData?: {
        av: string,
        info: {
            imgList: {
                url: string
            }[],
            phone: number
            score: number
            tag: {
                text: string
            }[]
        }
        time: string
    }
}

interface commentResType {
    shopInfoComment: commentType
}

const commentRes: Ref<commentType> = ref({})

const getComment = async () => {
    const res: AxiosResponse<commentResType> = await axios.get(apis.shopInfoComment);
    commentRes.value = res.data.shopInfoComment
}
getComment()
export default function () {
    return {
        handleChangeIndex,
        changeIndex,
        back,
        leftChange,
        leftRes,
        rightRes,
        headerRes,
        commentRes
    }
}