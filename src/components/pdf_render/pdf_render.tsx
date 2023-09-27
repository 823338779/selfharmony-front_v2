'use client';
import {ScrollMode, SpecialZoomLevel, Viewer, ViewMode, Worker} from "@react-pdf-viewer/core";
import '@react-pdf-viewer/core/lib/styles/index.css';

export default function PdfRender({url}: { url: string }) {

    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer defaultScale={SpecialZoomLevel.PageWidth} fileUrl={url} scrollMode={ScrollMode.Page}
                    viewMode={ViewMode.SinglePage}/>
        </Worker>
    )
}