'use client';
import CommonLayout from "@/components/common_layout/common_layout";
import React, {useState} from "react";
import {Button, Space, Table, notification, Input, Form, Modal} from "antd";
import axios from "axios";
import {Column} from "rc-table";
import {HOST} from "@/app/consts";
import {stringify} from "yaml";
import Search from "antd/es/input/Search";
import {PlusCircleOutlined} from "@ant-design/icons";
import Head from "next/head";


const getTipList = (content: string = "") => {
    // let input = document.getElementById("filter_input").value
    // 上面的请求也可以这样做
    return axios.get(HOST + 'tips/get_all', {
        params: {
            "input": content
        }
    })
}

const changeStatus = (id: number, targetStatus: number) => {
    return axios.post(HOST + "tips/status", {
            "id": id,
            "status": targetStatus
        }
    )
}

interface TipStruct {
    id: number,
    content: string,
    author: string,
    status: number
}

interface State {
    tipList: TipStruct[],
}

interface PageCallBack {
    updateStatus: (id: number, status: number) => void
    refreshPage?: () => void
}

const openNotificationWithIcon = (msg: any) => {
    notification.open({
        message: stringify(msg),
        duration: 1.5
    });
};
export default class TipManager extends React.Component<any, State> {

    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            tipList: [],
        }
    }

    componentDidMount() {
        this.refreshList()
    }

    refreshList = (searchContent: string = "") => {
        getTipList(searchContent).then((resp) => {
            this.setState({
                tipList: resp.data.res
            })
        })
    }

    changeTipStatus = (id: number, status: number) => {
        changeStatus(id, status).then((resp) => {
                openNotificationWithIcon(resp.data)
                this.refreshList()
            }
        )
    }

    searchContent = (content: string, _: any) => {
        this.refreshList(content)
    }
    render() {
        return (
            <CommonLayout selectedKey={"1"}>
                <div
                    style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                    <TipSearchBar searchContent={this.searchContent}/>
                    <TipInsert callBack={this.refreshList}/>
                </div>
                <TipTable tipList={this.state.tipList} callBack={{updateStatus: this.changeTipStatus}}/>
            </CommonLayout>
        )
    }
}

function TipInsert({callBack}: { callBack: (a: any) => void }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const postInsert = (content: string, author: string) => {
        axios.post(HOST + "tips/insert", {
                "content": content,
                "author": author
            }
        ).then((response) => {
            openNotificationWithIcon(response.data)
            callBack("")
        })
    }

    const [form] = Form.useForm();
    return (
        <>
            <Button style={{backgroundColor: "#00833c", color: "white"}} onClick={showModal}>
                <PlusCircleOutlined/>
            </Button>
            <Modal title="Inser Tip"
                   width={"100%"} open={isModalOpen} onOk={() => {
                form
                    .validateFields()
                    .then((values: { content: string, author: string }) => {
                        if (values.content?.length > 0 && values.author?.length > 0) {
                            postInsert(values.content, values.author)
                            form.resetFields();
                        }
                    })
            }} onCancel={handleCancel}>
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

function TipSearchBar({searchContent}: { searchContent: (value: string, e: any) => void }) {
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <div style={{display: "flex", alignItems: "center"}}>
                <p style={{flexGrow: 0, flexShrink: 0, marginRight: 10}}>Tip搜索：</p>
                <Search
                    placeholder="input search text"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={searchContent}
                />
            </div>
        </div>
    )
}

function getStatusColor(status: number) {
    if (status == 0) {
        return "#dcc148"
    } else if (status == 1) {
        return "#309b21"
    } else if (status == 2) {
        return "#ff5454"
    }
}

function TipTable({tipList, callBack}: { tipList: TipStruct[], callBack: PageCallBack }) {
    return (
        <Table dataSource={tipList} pagination={false} rowKey={"id"}>
            <Column title="Id" align={"center"} dataIndex={"id"}/>
            <Column title="Content" dataIndex={"content"}
                    render={(_: any, record: TipStruct) => {
                        return (
                            <div style={{display: "flex", alignItems: "center", justifyContent: "start"}}>
                                <div
                                    style={{
                                        flexShrink: 0,
                                        marginRight: "3px",
                                        width: "10px",
                                        height: "10px",
                                        borderRadius: "5px",
                                        backgroundColor: getStatusColor(record.status)
                                    }}></div>
                                {record.content}
                            </div>
                        )
                    }}/>
            <Column title="Author" align={"center"} dataIndex={"author"}/>
            <Column
                title="Action"
                key="action"
                align={"center"}
                render={(_: any, record: TipStruct) => (
                    <Space size="middle" direction="vertical">
                        {(record.status != 2) ? <Button
                            style={{color: "#ffffff", backgroundColor: getStatusColor(2), padding: "5px"}}
                            onClick={() => {
                                callBack.updateStatus(record.id, 2)
                            }}>Reject</Button> : null}
                        {(record.status != 1) ? <Button
                            style={{color: "#ffffff", backgroundColor: getStatusColor(1), padding: "5px"}}
                            onClick={() => {
                                callBack.updateStatus(record.id, 1)
                            }}
                        >Approve</Button> : null}
                    </Space>
                )}
            />
        </Table>
    )
}