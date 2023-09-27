'use client';
import '@react-pdf-viewer/core/lib/styles/index.css';
import PdfRender from "@/components/pdf_render/pdf_render";
import {custom_env} from "@/app/consts";
import RootLayout from "@/app/layout";

export default function BookRead() {

    return (
        <div style={{height: "100%"}}>
            <PdfRender url={custom_env.ONLINE_HOST + "static/a.pdf"}/>
        </div>
    );
}
