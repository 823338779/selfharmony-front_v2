import {initForAxios} from "@/app/common";

const a = {
    DEBUG_HOST: "http://localhost:8080/",
    ONLINE_HOST: "https://sfharmony.shenzhuo.vip/api/"
}
export let HOST = a.ONLINE_HOST
let url = window.location.host;
if (url.indexOf('localhost:3000') != -1) {
    HOST = a.DEBUG_HOST
}

initForAxios()