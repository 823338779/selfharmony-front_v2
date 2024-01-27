import React from "react";
import {Breadcrumb, Layout, Menu, MenuProps, theme} from 'antd';
import {MenuInfo} from "rc-menu/lib/interface";
import {useRouter} from "next/navigation";

const {Header, Content, Footer} = Layout;

export default function CommonLayout({children, selectedKey}: { children: React.ReactNode, selectedKey: string }) {
    const router = useRouter()

    function onTabClick(o: MenuInfo) {
        let path = ""
        switch (o.key) {
            case "1": {
                path = "tip"
                break
            }
            case "2": {
                router.push("https://weread.qq.com/")
                break
            }
            case "3": {
                path = "fast_kv"
                break
            }
        }
        if (path.length > 0) {
            router.push("/" + path)
        }
    }

    return (
        <Layout style={{minHeight: "100%"}} className="layout">
            <Header style={{alignItems: 'center', width: "100%"}}>
                <div className="demo-logo"/>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={[selectedKey]}
                    items={
                        [{name: "Tip Page"},
                            {name: "Book Page"},
                            {name: "KV Page"}
                        ].map((o, index) => {
                            const key = index + 1;
                            return {key, label: o.name};
                        })}
                    onClick={onTabClick}
                />
            </Header>
            <Content style={{padding: '0 10px'}}>
                <div className="site-layout-content" style={{maxWidth: 1000, margin: "0 auto"}}>
                    {children}
                </div>
            </Content>
            <Footer style={{textAlign: 'center', textDecoration: 'underline'}}>人生如赴宴 举止须从容</Footer>
        </Layout>
    )
}