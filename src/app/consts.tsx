import {notification} from "antd";
import {stringify} from "yaml";
import axios from "axios";

export const HOST = "http://localhost:8080/"

export const openNotificationWithIcon = (msg: any) => {
    notification.open({
        message: stringify(msg),
        duration: 1.5
    });
};

export const jumpToLongin = ()=>{
    window.location.href = window.location.origin + "/login"
}

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
        if (response.data.invalidAuth == true) {
            jumpToLongin()
        }
        return response
    },
)