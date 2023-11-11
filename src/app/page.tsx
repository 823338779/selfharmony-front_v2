"use client";
import React, {useEffect, useRef} from "react";
import {useRouter} from "next/navigation";
import {jumpToLongin} from "@/app/common";

export default function Home() {

    const router = useRouter()

    useEffect(() => {
        let token = localStorage.getItem("jwt")
        if (token != null && token.length > 0) {
            router.push("/tip")
        } else {
            jumpToLongin()
        }
    })
    return (
        <div></div>
    )
}
