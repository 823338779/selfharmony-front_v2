import {notification} from "antd";
import {stringify} from "yaml";
import axios from "axios";

export const custom_env = {
    DEBUG_HOST: "http://localhost:8080/",
    ONLINE_HOST: "https://sfharmony.shenzhuo.vip/api/",
    ONLINE_LOCAL_HOST: "http://192.168.31.216:8080/"
}
// export const HOST = custom_env.DEBUG_HOST
export const HOST = custom_env.ONLINE_HOST
export const openNotificationWithIcon = (msg: any) => {
    notification.open({
        message: stringify(msg),
        duration: 1.5
    });
};

// 请求拦截器
axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("jwt");
        config.headers.Token = token
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)

// 响应拦截器
axios.interceptors.response.use(
    (response) => {
        if (response.status == 302) {
            // router.push()
        }
        return response
    }, (error) => {
        return Promise.reject(error)
    }
)