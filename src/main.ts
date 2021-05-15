import { createApp } from 'vue'
import App from './App.vue'
import 'vant/es/button/style'; // UI -vant
import router from './router/index' // vue-router
import store from './store/index' // vuex
createApp(App).use(router).use(store).mount('#app')
