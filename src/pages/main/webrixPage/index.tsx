import React, { useEffect, useState } from "react";
import { Layout } from '@arco-design/web-react';
import { useRequest } from "ahooks";
import { IconCaretRight, IconCaretLeft } from '@arco-design/web-react/icon';
import { Outlet } from "react-router-dom";

import { webrixPath } from '@/router/path'
import BlogSider from "@/components/blogSider";

import './index.less'

const Sider = Layout.Sider;
const Content = Layout.Content

const req = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve('成功');
        } else {
            reject(new Error('失败'));
        }
        }, 1000);
    } )
}

function WebrixPage() {

    const { loading, run } = useRequest(req, {
        manual: true,
        onSuccess: res => {
            console.log(res)
        },
        onError: err => {
            console.log(err)
        }
    })
    
    useEffect(() => {
        run()
    }, [])

    const [collapsed, setCollapsed] = useState(true)


    const handleCollapsed = () => {
        setCollapsed(!collapsed)
    }

    return (
        <Layout className='layout-collapse-demo'>
            <Sider collapsed={collapsed}
                onCollapse={handleCollapsed}
                collapsible
                trigger={collapsed ? <IconCaretRight /> : <IconCaretLeft />}>
                <BlogSider pathRoute={webrixPath} />
            </Sider>

            <Layout>
                <Content>
                    <Outlet></Outlet>
                </Content>
            </Layout>
        </Layout>
    );
}

export default WebrixPage;