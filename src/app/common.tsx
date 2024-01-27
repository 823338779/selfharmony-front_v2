import {notification} from "antd";
import {stringify} from "yaml";
import axios from "axios";

export const openNotificationWithIcon = (msg: any) => {
    notification.open({
        message: stringify(msg),
        duration: 1
    });
};

export const jumpToLongin = () => {
    window.location.href = window.location.origin + "/login"
}

/**
 * 为axios添加两种拦截器，任何页面必须确保这个这个初始化完成
 */
export const initForAxios = () => {
// 请求拦截器
    axios.interceptors.request.use(
        (config) => {
            config.headers.Token = localStorage.getItem("jwt")
            return config;
        },
        error => {
            return Promise.reject(error);
        }
    )

// 响应拦截器
    axios.interceptors.response.use(
        (response) => {
            console.log(response)
            if (response.data.invalidAuth == true) {
                jumpToLongin()
            }
            return response
        },
    )
}