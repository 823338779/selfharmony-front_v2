'use client';
import {ScrollMode, SpecialZoomLevel, Viewer, ViewMode, Worker} from "@react-pdf-viewer/core";
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/page-navigation/lib/styles/index.css';
import {pageNavigationPlugin} from '@react-pdf-viewer/page-navigation';
import {useEffect} from "react";

export default function PdfRender({url, page}: { url: string, page: number, pa: string }) {
    const pageNavigationPluginInstance = pageNavigationPlugin();

    useEffect(()=>{
        pageNavigationPluginInstance.jumpToPage(page)
    }, [page])

    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer defaultScale={SpecialZoomLevel.PageWidth} fileUrl={url}
                    scrollMode={ScrollMode.Page}
                    viewMode={ViewMode.SinglePage}
                    enableSmoothScroll={false}
                    initialPage={page}
                    plugins={[pageNavigationPluginInstance]}
            />
        </Worker>
    )
}