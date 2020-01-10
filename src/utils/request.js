import axios from 'axios';
import { Message } from 'element-ui';

// axios.defaults.baseURL = process.env.VUE_APP_BASE_API;
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.interceptors.request.use(config => {
    return config;
}, error => {
    Message.error(error)
})

axios.interceptors.response.use(response => {
    if (response && response.status == 200) {
        if (response.data.statusCode == "200") {
            // 请求成功
            return response.data.data;
        } else {
            Message.error(response.data.statusMessage)
            return false;
        }
    }
    Message.error('请求API失败');
}, error => {
    Message.error(error)
    return false;
})