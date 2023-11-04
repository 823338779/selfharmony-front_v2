import {notification} from "antd";
import {stringify} from "yaml";
import axios from "axios";
import {useRouter} from "next/navigation";

export const custom_env = {
    DEBUG_HOST: "http://localhost:3000/api/",
    ONLINE_HOST: "https://sfharmony.shenzhuo.vip/api/",
    ONLINE_LOCAL_HOST: "http://192.168.31.216:8080/"
}
// export const HOST = custom_env.DEBUG_HOST
export const HOST = custom_env.DEBUG_HOST
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
        config.maxRedirects = 10
        config.validateStatus = (status) => {
            return status >= 200 && (status < 300 || status == 302); // 只有响应状态码为 200~299 或 302 才算成功
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)

// 响应拦截器
axios.interceptors.response.use(
    (response) => {
        return response
    }, (error) => {
        console.log("AAA", error)
        if (error.response.status == 302) {
            let router = useRouter()
            router.replace("/login1")
        }
        // return Promise.reject(error)
    }
)