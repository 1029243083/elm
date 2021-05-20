import { ref } from "vue"
import router from "../../router"

const changeIndex = ref(0)

const handleChangeIndex = (index: number) => {
    changeIndex.value = index
}

const back = () => {
    router.back()
}
export default function () {
    return {
        handleChangeIndex,
        changeIndex,
        back
    }
}