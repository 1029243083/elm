import Axios from 'axios'

const instance = Axios.create({

})

// // 添加响应拦截器
// instance.interceptors.response.use(function (response) {
//     // 对响应数据做点什么
//     return response.data;
// }, function (error) {
//     // 对响应错误做点什么
//     return Promise.reject(error);
// });

export default instance