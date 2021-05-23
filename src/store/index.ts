import { createStore } from 'vuex'
import { shopInfoRightType } from '../view/shopInfo'

export interface stateType {
    title: string,
    purchasedItem: shopInfoRightType[]
}

const store = createStore({
    state(): stateType {
        return {
            title: '地址',
            purchasedItem: []
        }
    },
    mutations: {
        setTitle(state: stateType, payload: string) {
            state.title = payload
        },
        setPurchasedItem(state: stateType, payload: {
            type: string,
            data: shopInfoRightType
        }) {
            if (payload.data.num === 0 && state.purchasedItem.find(item => item.id === payload.data.id) && payload.type === 'reduce') {
                const index = state.purchasedItem.findIndex(a => {
                    return a.id === payload.data.id
                })
                state.purchasedItem.splice(index, 1)
            } else if (payload.type === 'reduce') {
                const index = state.purchasedItem.findIndex(a => {
                    return a.id === payload.data.id
                })
                state.purchasedItem.splice(index, 1, payload.data)
            } else if (payload.type === 'add') {
                const index = state.purchasedItem.findIndex(a => {
                    return a.id === payload.data.id
                })
                if (index === -1) {
                    state.purchasedItem.push(payload.data)
                } else {
                    state.purchasedItem.splice(index, 1, payload.data)
                }
            }
        }
    }
})

export default store