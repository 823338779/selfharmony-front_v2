'use client';
import CommonLayout from "@/components/common_layout/common_layout";
import React, {useEffect, useState} from "react";
import {Button, Space, Table, notification} from "antd";
import axios from "axios";

type NotificationType = 'success' | 'info' | 'warning' | 'error';
import {undefined} from "zod";
import {Column, ColumnGroup} from "rc-table";
import {list} from "postcss";
import {custom_env} from "@/app/consts";
import {stringify} from "yaml";
const HOST = custom_env.DEBUG_HOST

const getTipList = () => {
    // let input = document.getElementById("filter_input").value
    // 上面的请求也可以这样做
    return axios.get(HOST + 'tips/get_all', {
        params: {
            "input": ""
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


export default class TipManager extends React.Component<any, State> {

    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            tipList: [],
        }
    }


    openNotificationWithIcon = (msg:any) => {
        notification.open({
            message: stringify(msg),
            duration: 1.5
        });
    };

    componentDidMount() {
        this.refreshList()
    }

    refreshList = () => {
        getTipList().then((resp) => {
            this.setState({
                tipList: resp.data.res
            })
        })
    }

    changeTipStatus = (id: number, status: number) => {
        changeStatus(id, status).then((resp) => {
                this.openNotificationWithIcon(resp.data)
                this.refreshList()
            }
        )
    }

    getStatusColor = (status: number) => {
        if (status == 0) {
            return "#d0b000"
        } else if (status == 1) {
            return "#309b21"
        } else if (status == 2) {
            return "#ff5454"
        }
    }

    render() {
        return (
            <main>
                <CommonLayout selectedKey={"1"}>
                    <Table dataSource={this.state.tipList} pagination={false} rowKey={"id"}>
                        <Column title="Id" align={"center"} dataIndex={"id"}
                                render={(_: any, record: TipStruct) => (
                                    <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                                        {record.id}
                                        <div
                                            style={{marginLeft: "3px", width: "10px", height: "10px", borderRadius: "5px", backgroundColor: this.getStatusColor(record.status)}}></div>
                                    </div>
                                )}
                        />
                        <Column title="Content" dataIndex={"content"}/>
                        <Column title="Author" align={"center"} dataIndex={"author"}/>
                        <Column
                            title="Action"
                            key="action"
                            align={"center"}
                            render={(_: any, record: TipStruct) => (
                                <Space size="middle">
                                    {(record.status != 2) ? <Button
                                        style={{color: "#ffffff", backgroundColor: this.getStatusColor(2), padding: "5px"}}
                                        onClick={() => {
                                            this.changeTipStatus(record.id, 2)
                                        }}>Reject</Button> : null}
                                    {(record.status != 1) ? <Button
                                        style={{color: "#ffffff", backgroundColor: this.getStatusColor(1), padding: "5px"}}
                                        onClick={() => {
                                            this.changeTipStatus(record.id, 1)
                                        }}
                                    >Approve</Button> : null}
                                </Space>
                            )}
                        />
                    </Table>
                </CommonLayout>
            </main>
        )
    }
}