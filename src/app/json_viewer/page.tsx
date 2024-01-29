'use client'

import React, {ChangeEvent, ChangeEventHandler, useState} from "react";
import './json_viewer.css'
import ReactJson from "react-json-view";
import {list} from "postcss";
import TextArea from "antd/lib/input/TextArea";


export default function fastKvPage() {
    const [inputJson, setInputJson] = useState<string>("{\n" +
        "    \"root\": {\n" +
        "        \"titleNameMap\": {\n" +
        "            \"AAA\": true,\n" +
        "            \"ADSSAS\":\"ASSASD\"\n" +
        "        },\n" +
        "        \"nihao\": {\n" +
        "            \"BBB\": 123,\n" +
        "            \"AAA\":\"ASFA\",\n" +
        "            \"AGAFSA\":\"ASDWA\"\n" +
        "        },\n" +
        "        \"wocao\": {\n" +
        "            \"OK\": false\n" +
        "        }\n" +
        "    },\n" +
        "    \"list\":[\n" +
        "        {\n" +
        "            \"AAA\":\"ASFA\",\n" +
        "            \"AGAFSA\":\"ASDWA\"\n" +
        "        },\n" +
        "        {\n" +
        "            \"AAA\":\"ASFA\",\n" +
        "            \"AGAFSA\":\"ASDWA\"\n" +
        "        }\n" +
        "    ]\n" +
        "}")
    const [segment, setSegment] = useState<string[]>(["AAA"])

    const isObject = (o: any) => {
        return Object.prototype.toString.call(o) === '[object Object]'
    }

    const isArray = (o: any) => {
        return Array.isArray(o)
    }
    const isEmptyObject = (obj: any) => {
        for (let key in obj) {
            return false
        }
        return true
    };

    const dfs = (obj: any): any => {
        if (isObject(obj)) {
            let res: any = {}
            for (let objKey in obj) {
                if (segment.indexOf(objKey) != -1) {
                    res[objKey] = obj[objKey]
                } else if (isObject(obj[objKey]) || isArray(obj[objKey])) {
                    let temp = dfs(obj[objKey])
                    if (temp != null) {
                        res[objKey] = temp
                    }
                }
            }
            return !isEmptyObject(res) ? res : null
        } else if (isArray(obj)) {
            let res = []
            for (let o in obj) {
                let temp = dfs(obj[o])
                if (temp != null) {
                    res.push(temp)
                }
            }
            return res.length > 0 ? res : null
        }
    }
    const getOriJson = () => {
        try {
            return JSON.parse(inputJson)
        } catch (e) {
            return ""
        }
    }
    let obj: any = {}
    try {
        if (segment.length != 0) {
            obj = dfs(JSON.parse(inputJson))
        } else {
            obj = JSON.parse(inputJson)
        }
        if (obj == null) {
            obj = {}
        }
    } catch (e) {
    }

    const getSegmentsFormatted = () => {
        let res = ""
        for (let o in segment) {
            res = res + segment[o]
        }
        return res
    }


    return <>
        <div className="column_flex" style={{height: "100%"}}>

            <TextArea onChange={(e) => {
                setInputJson(e.target.value)
            }} rows={1} autoSize={{minRows: 1, maxRows: 6}} placeholder={"VALUE"}
                      value={inputJson}/>
            <div className="row_flex" style={{height: "100%"}}>
                <div style={{borderRight: "solid 1px", width: "40%", height: "100%"}}>
                    <ReactJson src={getOriJson()} theme={"google"} displayDataTypes={false} displayObjectSize={false}
                               name={false} style={{fontFamily: "consolas", fontSize: 15, height: "100%"}} enableClipboard={false}/>
                </div>
                <div style={{width: "60%"}}>
                    <input placeholder={"想找啥？可以用封号分隔多个"} onChange={(event) => {
                        setSegment(event.target.value.split(";"))
                    }} value={getSegmentsFormatted()} style={{width:"100%"}}
                    />
                    <ReactJson src={obj} theme={"google"} displayDataTypes={false} displayObjectSize={false}
                               name={false} style={{fontFamily: "consolas", fontSize: 15, height: "100%",paddingTop:"10px",boxSizing:"border-box"}}  enableClipboard={false}/>
                </div>
            </div>
        </div>
    </>
}
""