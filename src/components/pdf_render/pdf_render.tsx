'use client';
import {ScrollMode, SpecialZoomLevel, Viewer, ViewMode, Worker} from "@react-pdf-viewer/core";
import '@react-pdf-viewer/core/lib/styles/index.css';
import React, {useEffect, useState} from "react";
import {render} from "react-dom";
import {HOST} from "@/app/consts";

interface CjlState {
    url: string,
    nowPage: number
}

export default class PdfRender extends React.Component <any, CjlState> {
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {url: "", nowPage: 0}
    }

    componentDidMount() {
        console.log("mount")
    }

    render() {
        return (
            <div style={{height: "100%", width: "100%"}}>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                    <Viewer defaultScale={SpecialZoomLevel.PageWidth} fileUrl={HOST+"statics/爱的艺术_9787020145348.pdf"}
                            scrollMode={ScrollMode.Page}
                            viewMode={ViewMode.SinglePage}
                            enableSmoothScroll={false}
                            initialPage={this.state.nowPage}
                            onPageChange={() => {
                                console.log("change")
                            }}
                    />
                </Worker>
                <div style={{
                    position: "fixed",
                    display: "flex",
                    flexDirection: "row",
                    top: 0,
                    backgroundColor: "rgba(255,0,0,0.34)",
                    height: "100%",
                    width: "100%",
                    zIndex: 10
                }}>
                    <div style={{flexGrow: 1, width: 0, verticalAlign: "center"}}
                         onClick={() => {
                             console.log("BBB")
                             this.setState({...this.state, nowPage:10})
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
                             console.log("AAA")
                             this.setState({...this.state, nowPage:10})
                         }}
                    >right
                    </div>
                </div>
            </div>
        )
    }


}