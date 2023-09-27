'use client';
import '@react-pdf-viewer/core/lib/styles/index.css';
import PdfRender from "@/components/pdf_render/pdf_render";
import {HOST} from "@/app/consts";
import {useEffect, useState} from "react";

export default function BookRead() {
    const [pdfName, setPdfName] = useState("")
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        let pdfName = params.get("id")
        setPdfName(pdfName || "")
    })
    return (
        <div style={{height: "100%"}}>
            <PdfRender url={HOST + pdfName}/>
        </div>
    );
}
