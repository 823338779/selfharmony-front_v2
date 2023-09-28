'use client';
import '@react-pdf-viewer/core/lib/styles/index.css';
import PdfRender from "@/components/pdf_render/pdf_render";
import {HOST} from "@/app/consts";
import {useEffect, useState} from "react";

export default function BookRead() {
    const [pdfName, setPdfName] = useState("")
    const [page, setPage] = useState(0)
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        let pdfName = params.get("id")
        setPdfName(pdfName || "")
    })

    return (
        <div style={{height: "100%"}}>
            <PdfRender url={HOST + pdfName} page={page} pa={page.toString()}/>
            <div style={{
                position: "fixed",
                display: "flex",
                flexDirection: "row",
                top: 0,
                backgroundColor: "rgba(255,0,0,0.05)",
                height: "100%",
                width: "100%",
                zIndex: 10
            }}>
                <div style={{flexGrow: 1, width: 0, verticalAlign: "center"}}
                     onClick={() => {
                         setPage(Math.max(0, page - 1))
                     }}
                >left
                </div>
                <div style={{
                    flexGrow: 1,
                    width: 0,
                    justifyContent: "center",
                    alignContent: "center",
                    lineHeight: "100px"
                }}
                     onClick={() => {
                         setPage(Math.max(0, page + 1))
                     }}
                >right
                </div>
            </div>
        </div>
    );
}
