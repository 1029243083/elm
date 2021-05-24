import { ref } from 'vue';
import { Toast } from 'vant';
import router from '../../router';
import { getSotrage, setStorage } from '../../util';
import store from '../../store';
const show = ref(false);

const actions = [
    { name: '需要发票' },
];

const onSelect = (item: any) => {
    // 默认情况下点击选项时不会自动收起
    // 可以通过 close-on-click-action 属性开启自动收起
    show.value = false;
    Toast(item.name);
};

const onClickLeft = () => {
    router.back()
}


const onAdd = () => {
    router.push({
        name: 'address'
    })
}

const handleClick = () => {
    const address = getSotrage('address')
    if (address && address !== '{}') {
        setStorage('address', '')
        store.commit('setAddress', '{}')
        Toast.success('购买成功,跳转首页');
        router.push('/')

    } else {
        Toast.fail('请选择地址');
    }
}


export default function () {
    return {
        show,
        actions,
        onSelect,
        onClickLeft,
        onAdd,
        handleClick
    }
}