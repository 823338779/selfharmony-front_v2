"use client";
import Image from 'next/image'
import React, {useEffect, useRef} from "react";
import CommonLayout from "@/components/common_layout/common_layout";
import {useRouter} from "next/navigation";

export default function Home() {

    const router = useRouter()

    useEffect(() => {
        let token = localStorage.getItem("jwt")
        if (token != null && token.length > 0) {
            router.push("tip")
        } else {
            router.push("login")
        }
    })
    return (
        <div></div>
    )
}
