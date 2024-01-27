import axios from "axios";
import {getRealHost} from "@/settings";
import {reverse} from "dns";

export const getTipList = (content: string = "") => {
    // let input = document.getElementById("filter_input").value
    // 上面的请求也可以这样做
    return axios.get(getRealHost() + 'tips/get_all', {
        params: {
            "input": content
        }
    })

}

export const changeStatus = (id: number, targetStatus: number) => {
    return axios.post(getRealHost() + "tips/status", {
            "id": id,
            "status": targetStatus
        }
    )
}

export const addNewTip = (content: string, author: string) => {
    return axios.post(getRealHost() + "tips/insert", {
            "content": content,
            "author": author
        }
    )
}