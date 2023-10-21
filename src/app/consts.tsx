import {useParams} from "next/navigation";

export const custom_env = {
    DEBUG_HOST: "http://localhost:8080/",
    ONLINE_HOST: "https://sfharmony.shenzhuo.vip/api/",
    ONLINE_LOCAL_HOST: "http://192.168.31.216:8080/"
}
// export const HOST = custom_env.DEBUG_HOST
export const HOST = custom_env.ONLINE_HOST

export const checkInvalid = () => {
    if (typeof window !== 'undefined') {
        const searchParams = new URLSearchParams(window.location.search);
        const id = searchParams.get('id');
        if (id == "caijialun") {
            return true
        } else {
            alert("权限不足")
            return false
        }
    }
    return false
}