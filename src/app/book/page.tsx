'use client';
import '@react-pdf-viewer/core/lib/styles/index.css';
import PdfRender from "@/components/pdf_render/pdf_render";
import {HOST} from "@/settings";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Card, List} from 'antd';
import {useRouter} from "next/navigation";
import CommonLayout from "@/components/common_layout/common_layout";
import {arrayOf} from "prop-types";

interface BookItem {
    id: number,
    book_name: string,
    page: number,
    path: string
}

const getBookList = () => {
    return axios.get(HOST + 'books/book_list')
}
export default function BookList() {
    const [bookList, setBookList] = useState<BookItem[]>([])
    const router = useRouter()
    useEffect(() => {
        if (bookList.length <= 0) {
            getBookList().then((resp) => {
                setBookList(resp.data)
            })
        }
    })
    return (
        <CommonLayout selectedKey={"3"}>
            <List
                grid={{gutter: 16, column: 1}}
                dataSource={bookList}
                renderItem={(item: BookItem) => (
                    <List.Item>
                        <Card title={item.book_name} onClick={() => {
                            router.push("/book/read?name=" + item.path + "&page=" + item.page + "&id=" + item.id)
                        }}>{item.book_name}；已读；{item.page}</Card>
                    </List.Item>
                )}
            />
        </CommonLayout>

    );
}
