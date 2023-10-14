'use client'


import {Button, Card, Form, Input, List, notification} from "antd";
import React, {useEffect, useRef, useState} from "react";
import CommonLayout from "@/components/common_layout/common_layout";
import {useRouter} from "next/navigation";
import axios from "axios";
import {HOST} from "@/app/consts";
import {PlusCircleOutlined} from "@ant-design/icons";
import TextArea, {TextAreaRef} from "antd/lib/input/TextArea";
import {stringify} from "yaml";

interface VKItem {
    id: number,
    name: string,
    value: string
}

const getFastKVList = () => {
    return axios.get(HOST + 'fast_kv/list')
}

const appendKV = (key: string, value: string) => {
    return axios.post(HOST + 'fast_kv/append', {
        "name": key,
        "value": value
    })
}
const deleteKV = (id: number) => {
    return axios.post(HOST + 'fast_kv/delete', {
        "id": id,
    })
}

const openNotificationWithIcon = (msg: any) => {
    notification.open({
        message: stringify(msg),
        duration: 1.5
    });
};
export default function fastKvPage() {

    const [itemList, setItemList] = useState<VKItem[]>([])

    useEffect(() => {
        if (itemList.length <= 0) {
            refreshData()
        }
    })

    const refreshData = () => {
        getFastKVList().then((resp) => {
            setItemList(resp.data.data)
        })
    }

    const doAppend = (key: string, value: string) => {
        appendKV(key, value).then((resp) => {
            openNotificationWithIcon(resp.data.msg)
            refreshData()
        })
    }

    const doDelete = (id: number) => {
        deleteKV(id).then((resp) => {
            openNotificationWithIcon(resp.data.msg)
            refreshData()
        })
    }

    const inputKeyRef = useRef<TextAreaRef>(null)
    const inputValueRef = useRef<TextAreaRef>(null)
    return (
        <CommonLayout selectedKey={"4"}>
            <div>
                <TextArea ref={inputKeyRef} rows={1} placeholder={"KEY"}/>
                <TextArea ref={inputValueRef} rows={1} placeholder={"VALUE"}/>
                <Button onClick={() => {
                    let key = inputKeyRef.current?.resizableTextArea?.textArea.value
                    let value = inputValueRef.current?.resizableTextArea?.textArea.value
                    if (value?.length && key?.length) {
                        doAppend(key, value)
                    }
                }}>APPEND</Button>
            </div>
            <List
                grid={{gutter: 16, column: 1}}
                dataSource={itemList}
                renderItem={(item: VKItem) => (
                    <List.Item>
                        <Card title={item.name}>名字：{item.name} <Button type="link" danger onClick={()=>{
                            doDelete(item.id)
                        }}>
                            删除
                        </Button> <br/>值：{item.value}</Card>
                    </List.Item>
                )}
            />
        </CommonLayout>
    )
}