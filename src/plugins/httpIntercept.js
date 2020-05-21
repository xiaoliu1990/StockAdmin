import {
  Loading,
  Message
} from 'element-ui'
import axios from 'axios'
// const BASE_URL = '/api'
// axios.defaults.baseURL = BASE_URL
axios.defaults.timeout = 30000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.withCredentials = true
// http request 拦截器
axios.interceptors.request.use((config) => {
  Loading.service()
  return config
}, (error) => {
  Loading.service().close()
  Message({
    showClose: true,
    message: '接口地址错误',
    type: 'warning'
  })
  return Promise.reject(error)
})

// http response 拦截器
axios.interceptors.response.use((res) => {
  Loading.service().close()
  return res
}, (error) => {
  if (error.response) {
    Loading.service().close()
    switch (error.response.status) {
      case 500:
        Message({
          showClose: true,
          message: '服务器宕机',
          type: 'warning'
        })
        break
      case 404:
        Message({
          showClose: true,
          message: '找不到接口地址',
          type: 'warning'
        })
        break
    }
  } else {
    Message({
      showClose: true,
      message: '网络异常，请稍后重试！',
      type: 'warning'
    })
    return false
  }
  return Promise.reject(error)
})
export default axios
