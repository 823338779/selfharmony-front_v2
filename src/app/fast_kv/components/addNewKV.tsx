import TextArea, {TextAreaRef} from "antd/lib/input/TextArea";
import {Button} from "antd";
import React, {useRef} from "react";
import {appendKV} from "@/app/fast_kv/api/api";
import {openNotificationWithIcon} from "@/app/common";
import {DownloadOutlined, PlusCircleOutlined} from "@ant-design/icons";
import {UpLoadFile} from "@/app/fast_kv/components/upLoadFile";

export function AddNewKv({refreshDataCallBack}: { refreshDataCallBack: () => void }) {

    const inputKeyRef = useRef<TextAreaRef>(null)
    const inputValueRef = useRef<TextAreaRef>(null)
    const doAppend = (key: string, value: string) => {
        appendKV(key, value).then((resp) => {
            openNotificationWithIcon(resp.data.msg)
            refreshDataCallBack()
        })
    }

    return (
        <div style={{backgroundColor: "#ffffff", display: "flex", flexDirection: "column", marginBottom:10}}>
            <div style={{display: "flex"}}>
                <TextArea ref={inputKeyRef} rows={1} autoSize={{minRows: 1, maxRows: 6}} placeholder={"KEY"}
                          bordered={false}
                          maxLength={50}
                          style={{marginBottom: 5, fontWeight: "bold", flexGrow: "1"}}/>
                <Button type="primary" shape="round" icon={<PlusCircleOutlined/>}
                        onClick={() => {
                            let key = inputKeyRef.current?.resizableTextArea?.textArea.value
                            let value = inputValueRef.current?.resizableTextArea?.textArea.value
                            if (value?.length && key?.length) {
                                doAppend(key, value)
                            }
                        }}
                >APPEND</Button>
            </div>
            <TextArea ref={inputValueRef} rows={1} autoSize={{minRows: 1, maxRows: 6}} placeholder={"VALUE"}
                      bordered={false}/>
            <UpLoadFile/>
        </div>)
}