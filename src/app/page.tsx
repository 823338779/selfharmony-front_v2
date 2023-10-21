"use client";
import Image from 'next/image'
import React, {useEffect} from "react";
import CommonLayout from "@/components/common_layout/common_layout";
import {useRouter} from "next/navigation";
import TipManager from "@/app/tip/page";
import Link from "next/link";
import Sample from "@/components/pdf_render_v2/Sample";
import {checkInvalid} from "@/app/consts";

export default function Home() {

    const router = useRouter()

    useEffect(() => {
        if (checkInvalid()) {
            if (typeof window !== 'undefined') {
                const hostname = window.location.hostname;
                const searchParams = new URLSearchParams(window.location.search);
                const id = searchParams.get('id');
                router.push("tip" + "?id=" + id)
            }
        }
    })
    return (
        <main>
            {/*<Sample/>*/}
        </main>
    )
}
//http://localhost:3000?id=caijialun