import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: 'http://localhost:8081', // 后端服务的基础地址
  timeout: 5000, // 请求超时时间
  headers: {'Content-Type': 'application/json'}
});

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么，例如添加token到header
    return config;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    return response.data;
  },
  error => {
    // 对响应错误做点什么
    console.log('err' + error); // 根据error.message弹出实际信息
    return Promise.reject(error);
  }
);

export default service;
