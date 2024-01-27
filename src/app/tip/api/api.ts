import axios from "axios";
import {HOST} from "@/settings";
import {reverse} from "dns";

export const getTipList = (content: string = "") => {
    // let input = document.getElementById("filter_input").value
    // 上面的请求也可以这样做
    return axios.get(HOST + 'tips/get_all', {
        params: {
            "input": content
        }
    })

}

export const changeStatus = (id: number, targetStatus: number) => {
    return axios.post(HOST + "tips/status", {
            "id": id,
            "status": targetStatus
        }
    )
}