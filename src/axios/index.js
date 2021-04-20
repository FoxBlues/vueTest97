import axios from "axios";
import store from "../vuex/store";

const instance = axios.create({
  baseURL:'https://api.coindesk.com',
  timeout:5000
})
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  //console.log(1)
  return config;
}, function (error) {
  // 对请求错误做些什么
  //console.log(2)
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  //console.log(3)
  return response;
}, function (error) {
  // 对响应错误做点什么
  //console.log(4)
  return Promise.reject(error);
});
export default {
  getCoinDesk () {
    return instance.get('/v1/bpi/currentprice.json')
  }
}
