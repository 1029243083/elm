import { createStore } from 'vuex'

export interface stateType {
    title: string
}

const store = createStore({
    state(): stateType {
        return {
            title: '地址'
        }
    },
    mutations: {
        setTitle(state: stateType, payload: string) {
            state.title = payload
        }
    }
})

export default store