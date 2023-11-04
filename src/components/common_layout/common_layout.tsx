import React from "react";
import {Breadcrumb, Layout, Menu, MenuProps, theme} from 'antd';
import {MenuInfo} from "rc-menu/lib/interface";
import {useRouter} from "next/navigation";

const {Header, Content, Footer} = Layout;

export default function CommonLayout({children, selectedKey}: { children: React.ReactNode, selectedKey: string }) {
    const router = useRouter()

    return (
        <Layout style={{minHeight: "100%"}} className="layout">
            <Header style={{alignItems: 'center', width: "100%"}}>
                <div className="demo-logo"/>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={[selectedKey]}
                    items={
                        [{name: "Tip Page", url: "tip"},
                            {name: "Log Page", url: "log"},
                            // {name: "Book Page", url: "book"},
                            {name: "KV Page", url: "fast_kv"}
                        ].map((o, index) => {
                            const key = index + 1;
                            return {key, label: o.name, url: o.url};
                        })}
                    onClick={(o) => {
                        let path = ""
                        if (o.key == "1") {
                            path = "tip"
                        } else if (o.key == "3") {
                            path = "book"
                        } else if (o.key == "4") {
                            path = "fast_kv"
                        }
                        if (path.length > 0) {
                            router.push("/" + path)
                        }
                    }}
                />
            </Header>
            <Content style={{padding: '0 10px'}}>
                <div className="site-layout-content" style={{maxWidth: 1000, margin: "0 auto"}}>
                    {children}
                </div>
            </Content>
            <Footer style={{textAlign: 'center'}}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
    )
}