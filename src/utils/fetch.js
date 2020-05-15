import axios from 'axios'
import state from '../store/state'
import router from '../router'
import { Message } from 'iview'

var service = axios.create({
    baseURL: process.env.BASE_API,
    timeout: 8000
});

// 发送请求前拦截器
service.interceptors.request.use(config => {
    config.headers = {
        // 'access-token': `${state.UserInfo.token || ''}`,
        'Authorization': `${state.UserInfo.token || ''}`,
        'Content-Type': 'application/json'
    }
    return config
}, error => {
    return Promise.reject(error)
})

// 接收数据时拦截器
service.interceptors.response.use(
    response => {
        if (response.data.code === 126) {
            Message.warning({
                content: '注意：登录过期，重新登录！',
                duration: 3
            })
            localStorage.clear()
            router.push('/login')
            return Promise.resolve(response)
        } else if (response.data.code === 127) {
            Message.warning({
                content: '注意：已在其它地方登录！！！',
                duration: 3
            })
            localStorage.clear()
            router.push('/login')
            return Promise.resolve(response)
        } else if (response.data.code === 170) {
            // window.location.reload();
            Message.warning({
                content: '注意：没有权限！！！',
                duration: 3
            })
            return Promise.resolve(response)
        }
        return Promise.resolve(response)
    },
    error => {
        return Promise.reject(error)
    }
)

export default service
