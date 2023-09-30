import {
    PageChangeEvent,
    ScrollMode,
    SpecialZoomLevel,
    TextDirection,
    Viewer,
    ViewMode,
    Worker
} from "@react-pdf-viewer/core";
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/page-navigation/lib/styles/index.css';
import {pageNavigationPlugin} from '@react-pdf-viewer/page-navigation';
import {useEffect} from "react";
import {themePlugin} from '@react-pdf-viewer/theme';
import {DarkIcon, LightIcon} from '@react-pdf-viewer/theme';
import {Button, theme} from "antd";

import {zoomPlugin} from '@react-pdf-viewer/zoom';

// Import styles
import '@react-pdf-viewer/zoom/lib/styles/index.css';

export default function PdfRender({url, page, pageChangeCallBack}: {
    url: string,
    page: number,
    pageChangeCallBack: (e: PageChangeEvent) => void
}) {
    const pageNavigationPluginInstance = pageNavigationPlugin();
    const themePluginInstance = themePlugin();
    const zoomPluginInstance = zoomPlugin({enableShortcuts: true});
    useEffect(() => {
        console.log("jump")
        console.log(page)
        pageNavigationPluginInstance.jumpToPage(page)
    }, [page])

    return (
        <div style={{height: "100%", width: "100%", display: "flex", flexDirection: "column"}}>
            <div style={{width: "100%", height: "0", flexGrow: 1}}>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                    <Viewer defaultScale={SpecialZoomLevel.PageFit} fileUrl={url}
                            scrollMode={ScrollMode.Page}
                            viewMode={ViewMode.SinglePage}
                            enableSmoothScroll={false}
                            initialPage={page}
                            onPageChange={pageChangeCallBack}
                            plugins={[pageNavigationPluginInstance, themePluginInstance, zoomPluginInstance]}
                    />
                </Worker>
            </div>
            <div style={{
                flexShrink: 1,
                // position: "fixed",
                bottom: 0,
                display: "flex",
                height: "60px",
                flexDirection: "row",
                width: "100%",
                alignItems: "center"
            }}>
                <Button style={{flexGrow: 1, textAlign: "center", height: "100%"}}
                        onClick={() => {
                            pageNavigationPluginInstance.jumpToPreviousPage()
                        }}
                >LAST
                </Button>
                <div style={{justifyContent: "center", display: "flex", margin: "0 10px"}}>
                    <pageNavigationPluginInstance.CurrentPageLabel/>
                    /
                    <pageNavigationPluginInstance.NumberOfPages/>
                </div>
                <Button style={{flexGrow: 1, textAlign: "center", height: "100%"}} onClick={() => {
                    pageNavigationPluginInstance.jumpToNextPage()
                }}>NEXT
                </Button>
            </div>
        </div>
    )
}