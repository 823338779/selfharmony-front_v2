'use client';
import '@react-pdf-viewer/core/lib/styles/index.css';
import PdfRender from "@/components/pdf_render/pdf_render";
import {HOST} from "@/app/consts";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Card, List} from 'antd';
import {useRouter} from "next/navigation";
import CommonLayout from "@/components/common_layout/common_layout";

const getTipList = () => {
    return axios.get(HOST + 'books/book_list')
}
export default function BookList() {
    const [bookList, setBookList] = useState([])
    const router = useRouter()
    useEffect(() => {
        if(bookList.length <= 0) {
            getTipList().then((resp) => {
                console.log(resp.data)
                setBookList(resp.data)
            })
        }
    })
    return (
        <CommonLayout selectedKey={"3"}>
            <List
                grid={{gutter: 16, column: 1}}
                dataSource={bookList}
                renderItem={(item: string) => (
                    <List.Item>
                        <Card title={item} onClick={() => {
                            router.push("/book/read?id=" + item)
                        }}>{item}</Card>
                    </List.Item>
                )}
            />
        </CommonLayout>

    );
}
