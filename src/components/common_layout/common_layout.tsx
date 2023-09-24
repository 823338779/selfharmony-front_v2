import React from "react";
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;

export default function CommonLayout({children, selectedKey}: { children: React.ReactNode, selectedKey: string }){

    return (
        <Layout className="layout">
            <Header style={{ alignItems: 'center', width:"100%"}}>
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={[selectedKey]}
                    items={
                        ["Tip Page", "Log Page", "Book Page"].map((o, index) => {
                            const key = index + 1;
                            return {key, label: o,};
                        })}
                />
            </Header>
            <Content style={{ padding: '0 10px' }}>
                <div className="site-layout-content" style={{maxWidth:1000, margin:"0 auto"}}>
                    {children}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
    )
}