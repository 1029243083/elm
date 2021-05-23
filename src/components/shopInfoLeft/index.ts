import { ref } from "@vue/reactivity"
import { SetupContext } from "vue"

const current = ref(0)

export default function (ctx: SetupContext<"leftChange"[]>) {
    const changeIndex = (index: any) => {
        current.value = index
        ctx.emit('leftChange', current.value)
    }
    return {
        current,
        changeIndex
    }
}