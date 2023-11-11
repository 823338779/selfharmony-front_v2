import {initForAxios} from "@/app/common";

const a = {
    DEBUG_HOST: "http://localhost:8080/",
    ONLINE_HOST: "https://sfharmony.shenzhuo.vip/api/",
    ONLINE_LOCAL_HOST: "http://192.168.31.216:8080/"
}
export const HOST = a.ONLINE_HOST

initForAxios()