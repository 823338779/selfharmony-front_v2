'use client'
import {Button, Card, Form, Input, List, notification} from "antd";
import React, {useEffect, useRef, useState} from "react";
import CommonLayout from "@/components/common_layout";
import TextArea, {TextAreaRef} from "antd/lib/input/TextArea";
import {stringify} from "yaml";
import {appendKV, deleteKV, getFastKVList} from "@/app/fast_kv/api/api";
import {VKItem} from "@/app/fast_kv/models/model";
import {openNotificationWithIcon} from "@/app/common";
import {AddNewKv} from "@/app/fast_kv/components/addNewKV";


export default function fastKvPage() {
    const [itemList, setItemList] = useState<VKItem[] | undefined>(undefined)

    useEffect(() => {
        if (!itemList) {
            refreshData()
        }
    })

    const refreshData = () => {
        getFastKVList().then((resp) => {
            setItemList(resp.data.data)
        })
    }

    const doDelete = (id: number) => {
        deleteKV(id).then((resp) => {
            openNotificationWithIcon(resp.data.msg)
            refreshData()
        })
    }

    const doCopy = (content: string) => {
        const clipboard = navigator.clipboard;
        clipboard.writeText(content).then(r =>
            openNotificationWithIcon("复制成功")
        );
    }

    return (
        <CommonLayout selectedKey={"3"}>
            <AddNewKv refreshDataCallBack={refreshData}/>
            <List
                grid={{gutter: 16, column: 1}}
                dataSource={itemList}
                renderItem={(item: VKItem) => (
                    <List.Item>
                        <Card title={item.name} extra={
                            <div>
                                <Button type={'link'} onClick={() => {
                                    doCopy(item.value)
                                }}>复制</Button>
                                <Button type={'link'} danger onClick={() => {
                                    doDelete(item.id)
                                }}>删除</Button>
                            </div>
                        }>
                            <TextArea value={item.value} autoSize={{minRows: 1, maxRows: 6}}/>
                        </Card>
                    </List.Item>
                )}
            />
        </CommonLayout>
    )
}