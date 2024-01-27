import React from "react";
import {InboxOutlined} from "@ant-design/icons";
import type {UploadProps} from 'antd';
import {message, Upload} from 'antd';
import {getRealHost} from "@/settings";

const {Dragger} = Upload;

const props: UploadProps = {
    name: 'file',
    multiple: true,
    // action:""//  getRealHost()+"/upload_file",
    // onChange(info) {
    //     const {status} = info.file;
    //     if (status !== 'uploading') {
    //         console.log(info.file, info.fileList);
    //     }
    // },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};

export function UpLoadFile() {
    return (
        <Dragger {...props}>
            <p className="ant-upload-drag-icon">
                <InboxOutlined/>
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                banned files.
            </p>
        </Dragger>
    )
}