"use client";
import Image from 'next/image'
import React, {useEffect} from "react";
import CommonLayout from "@/components/common_layout/common_layout";
import {useRouter} from "next/navigation";
import TipManager from "@/app/tip/page";
import Link from "next/link";
import Sample from "@/components/pdf_render_v2/Sample";

export default function Home() {

    const router = useRouter()

    // useEffect(()=>{
    //     router.push("tip")
    // })
    return (
        <main>
            <Sample/>
        </main>
    )
}
