import { createStore } from 'vuex'
import { setStorage } from '../util'
import { shopInfoRightType } from '../view/shopInfo'

export interface stateType {
    title: string,
    purchasedItem: shopInfoRightType[],
    totalPrice: number,
    address: {
        name?: string,
        tel?: number
    }
}

const store = createStore({
    state(): stateType {
        return {
            title: '地址',
            purchasedItem: [],
            totalPrice: 0,
            address: {}
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
            let price = 0
            state.purchasedItem.forEach(item => {
                price += item.num * item.price
            })
            state.totalPrice = price
        },
        setAddress(state: stateType, payload: string) {
            state.address = JSON.parse(payload)
            setStorage('address', payload)
        }
    }
})

export default store