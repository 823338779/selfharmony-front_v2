import {initForAxios} from "@/app/common";

const a = {
    DEBUG_HOST: "http://localhost:8080/",
    ONLINE_HOST: "https://sfharmony.shenzhuo.vip/api/"
}
let HOST = ""
export const getRealHost = () => {
    if (HOST.length != 0) {
        return HOST
    }
    let url = window.location.host;
    if (url.indexOf('localhost:3000') != -1) {
        HOST = a.DEBUG_HOST
    } else {
        HOST = a.ONLINE_HOST
    }
    return HOST
}
initForAxios()