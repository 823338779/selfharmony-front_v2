'use client';
import '@react-pdf-viewer/core/lib/styles/index.css';
import PdfRender from "@/components/pdf_render/pdf_render";
import {HOST} from "@/app/consts";
import {createRef, useEffect, useState} from "react";
import axios from "axios";
import {PageChangeEvent} from "@react-pdf-viewer/core";

export default function BookRead() {
    const [pdfName, setPdfName] = useState("")
    const [page, setPage] = useState(10)
    const [id, setId] = useState(-1)
    const [ok, setOk] = useState(false)
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        let pdfName = params.get("name")
        let page1 = parseInt(params.get("page") || "-1")
        let id = parseInt(params.get("id") || "-1")
        setPdfName(pdfName || "")
        if (page1 > 0) {
            setPage(page1)
        }
        if (id > 0) {
            setId(id)
        }
        console.log(page1)
        setOk(true)
    })

    return (
        <div style={{height: "100%"}}>
            {!ok ? null : <PdfRender url={HOST + pdfName} page={page} pageChangeCallBack={(e) => {
                console.log("change", e.currentPage)
                axios.post(HOST + "books/book_update", {
                        "book_id": id,
                        "page": e.currentPage
                    }
                )
            }}/>
            }
        </div>
    );
}
