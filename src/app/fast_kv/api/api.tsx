import axios from "axios";
import {getRealHost} from "@/settings";

export const getFastKVList = () => {
    return axios.get(getRealHost() + 'fast_kv/list')
}

export const appendKV = (key: string, value: string) => {
    return axios.post(getRealHost() + 'fast_kv/append', {
        "name": key,
        "value": value
    })
}
export const deleteKV = (id: number) => {
    return axios.post(getRealHost() + 'fast_kv/delete', {
        "id": id,
    })
}
