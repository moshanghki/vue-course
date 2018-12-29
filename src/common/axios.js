import axios from 'axios'
import { baseUrl } from '../config'

function HttpRequest (url) {
  this.baseURL = url || baseUrl
  this.queue = {}
}

HttpRequest.prototype.getInsideConfig = function () {
  const config = {
    baseURL: this.baseURL,
    headers: {
      //
    }
  }
  return config
}

HttpRequest.prototype.interceptors = function (instance, url) {
  // 请求拦截器
  instance.interceptors.request.use(config => {
    // 请求前控制，可以在这里添加全局loading...
    console.log('---------------------请求拦截器开始---------------------')
    if (!Object.keys(this.queue)) {
      // loading...
    }
    this.queue[url] = true
    console.log('---------------------请求拦截器结束---------------------')
    return config
  }, error => {
    return Promise.reject(error)
  })
  // 响应拦截器
  instance.interceptors.response.use(res => {
    console.log('---------------------响应拦截器开始---------------------')
    delete this.queue[url]
    const { data, status } = res
    console.log('---------------------响应拦截器结束---------------------')
    return { data, status }
  }, error => {
    delete this.queue[url]
    return Promise.reject(error)
  })
}

HttpRequest.prototype.request = function (options) {
  const instance = axios.create()
  options = Object.assign(this.getInsideConfig(), options)
  this.interceptors(instance, options.url)
  return instance(options)
}

export default HttpRequest
