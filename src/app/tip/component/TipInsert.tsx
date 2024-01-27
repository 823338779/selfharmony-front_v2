import {Button, Space, Table, notification, Input, Form, Modal, FormInstance} from "antd";
import React, {useState} from "react";
import axios from "axios";
import {getRealHost} from "@/settings";
import {openNotificationWithIcon} from "@/app/common";
import {PlusCircleOutlined} from "@ant-design/icons";

export function TipInsert({callBack}: { callBack: (a: any) => void }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        form.validateFields()
            .then((values: { content: string, author: string }) => {
                if (values.content?.length > 0 && values.author?.length > 0) {
                    postInsert(values.content, values.author)
                    form.resetFields();
                }
            })
    }

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    let postInsert = (content: string, author: string) => {
        axios.post(getRealHost() + "tips/insert", {
                "content": content,
                "author": author
            }
        ).then((response) => {
            openNotificationWithIcon(response.data)
            callBack("")
        })
    };

    return (
        <>
            <Button style={{backgroundColor: "#00833c", color: "white"}} onClick={showModal}>
                <PlusCircleOutlined/>
            </Button>
            <Modal title="Inser Tip"
                   width={"100%"} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    form={form}
                    name="basic"
                    initialValues={{remember: true}}
                    layout="vertical"
                    autoComplete="off"
                >
                    <Form.Item
                        name="content"
                        colon={true}
                    >
                        <Input placeholder={"输入Tip内容"}/>
                    </Form.Item>

                    <Form.Item
                        name="author"
                        colon={true}
                    >
                        <Input placeholder={"输入Tip出处"}/>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}