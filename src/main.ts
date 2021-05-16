import { createApp } from 'vue'
import App from './App.vue'
import 'vant/es/button/style'; // UI -vant
import router from './router/index' // vue-router
import store from './store/index' // vuex
import './mock/index'
import { Tabbar, TabbarItem, Button, NavBar, Swipe, SwipeItem, Icon } from 'vant';
const vantCom = [Tabbar, TabbarItem, Button, NavBar, Swipe, SwipeItem, Icon];
const app = createApp(App);
for (let i = 0; i < vantCom.length; i++) {
    app.use(vantCom[i])
}
app.use(router)
app.use(store).mount('#app')
