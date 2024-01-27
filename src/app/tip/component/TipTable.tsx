import {Button, Space, Table, TableColumnsType} from "antd";
import {Column} from "rc-table";
import React from "react";
import {PageCallBack, TipStruct} from "@/app/tip/models/models";

export function TipTable({tipList, callBack}: { tipList: TipStruct[], callBack: PageCallBack }) {

    function getStatusColor(status: number) {
        if (status == 0) {
            return "#dcc148"
        } else if (status == 1) {
            return "#309b21"
        } else if (status == 2) {
            return "#ff5454"
        }
    }

    const columns: TableColumnsType<TipStruct> = [
        {
            title: "Id",
            align: "center",
            dataIndex: "id",
        },
        {
            title: "Content",
            dataIndex: "content",
            render: (_: any, record: TipStruct) => {
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
            }
        },
        {
            title: "Author",
            align: "center",
            dataIndex: "author"
        },
        {
            title: "Action",
            key: "action",
            align: "center",
            render: (_: any, record: TipStruct) => (
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
            ),
            filters: [
                {
                    text: "-",
                    value: 0,
                },
                {
                    text: "√",
                    value: 1,
                },
                {
                    text: "×",
                    value: 2,
                }
            ],
            onFilter: (value, record) => {
                return record.status === value
            },
        },
    ];
    return (
        <Table dataSource={tipList} pagination={false} rowKey={"id"} columns={columns}/>
    )
}