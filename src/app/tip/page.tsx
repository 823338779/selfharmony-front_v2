'use client';
import CommonLayout from "@/components/common_layout";
import React from "react";
import {changeStatus, getTipList} from "@/app/tip/api/api";
import {openNotificationWithIcon} from "@/app/common";
import {TipInsert} from "@/app/tip/component/TipInsert";
import {TipStruct} from "@/app/tip/models/models";
import {TipSearchBar} from "@/app/tip/component/TipSearchBar";
import {TipTable} from "@/app/tip/component/TipTable";

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
                <div style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                    <TipSearchBar searchContent={this.searchContent}/>
                    <TipInsert callBack={this.refreshList}/>
                </div>
                <TipTable tipList={this.state.tipList} callBack={{updateStatus: this.changeTipStatus}}/>
            </CommonLayout>
        )
    }
}