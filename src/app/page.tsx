"use client";
import Image from 'next/image'
import React, {useEffect} from "react";
import CommonLayout from "@/components/common_layout/common_layout";
import {useRouter} from "next/navigation";

export default function Home() {

    const router = useRouter()

    useEffect(()=>{
        router.push("/tip")
    })
    return (
        <main>
            <CommonLayout selectedKey={"1"}>

            </CommonLayout>
        </main>
    )
}
