"use client";
import React, {useRef} from "react";
import {useRouter} from "next/navigation";
import {Button, Input, InputRef} from "antd";
import axios from "axios";
import {openNotificationWithIcon} from "@/app/common";
import {HOST} from "@/settings";

export default function Home() {

    const router = useRouter()
    const passport = useRef<InputRef>(null)

    return (
        <div style={{height: "100%", width: "100%", alignItems: "center", display: "flex", justifyContent: "center"}}>
            <div style={{width: 300}}>
                <h4>请输入通行证后继续前进</h4>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <Input style={{flexGrow: "1", width: "auto"}} ref={passport} placeholder={"在此输入通行证"}></Input>
                    <Button style={{backgroundColor: "#caffbb"}} onClick={() => {
                        let inputPassport = passport.current?.input?.value
                        if (inputPassport != undefined && inputPassport.length > 0) {
                            axios.get(HOST + "login?passport=" + passport.current?.input?.value).then((resp) => {
                                let token = resp.data.data.token
                                let ok = resp.data.msg
                                localStorage.setItem("jwt", token)
                                if (ok) {
                                    router.push("tip")
                                } else {
                                    openNotificationWithIcon("权限不足")
                                    // localStorage.removeItem("jwt")
                                }
                            })
                        }
                    }}>确认</Button>
                </div>
            </div>
        </div>
    )
}
