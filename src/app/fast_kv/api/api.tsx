import axios from "axios";
import {HOST} from "@/settings";

export const getFastKVList = () => {
    return axios.get(HOST + 'fast_kv/list')
}

export const appendKV = (key: string, value: string) => {
    return axios.post(HOST + 'fast_kv/append', {
        "name": key,
        "value": value
    })
}
export const deleteKV = (id: number) => {
    return axios.post(HOST + 'fast_kv/delete', {
        "id": id,
    })
}
