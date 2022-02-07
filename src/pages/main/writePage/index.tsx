import React, { useState } from 'react';
import { Input, Button } from '@arco-design/web-react';


import {marked} from 'marked'  
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css'
import './code.css'
const TextArea = Input.TextArea;

export default () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const renderer = new marked.Renderer()
    // 配置marked
    marked.setOptions({
        renderer,
        // 启动类似github的样式
        gfm: true,
        // 是否严格markdown，false会进行错误的markdown写法调整
        pedantic: false,
        // 是否忽略html
        sanitize: false,
        // 是否允许输出表格，github的样式(需要开启gfm)
        tables: true,
        // 是否支持github的换行符(需要开启gfm)
        breaks: false,
        // 自动渲染列表
        smartLists: true,
        // 如何进行代码高亮
        highlight: function (code: any) {
            return hljs.highlightAuto(code).value
        }
    })

    const html = marked(content)

    const handleInput = (func: Function, e: any) => {
        console.log(e, typeof e)
        func(e)
    }

    return <div >
        <div>
            <Input
                style={{ width: 350 }}
                allowClear
                placeholder='Please Enter something'
                onChange={(e) => handleInput(setTitle, e)}
                value={title}
            />
        </div>
        <div className='df'>
            <TextArea
                placeholder='Please enter ...'
                style={{ flex: 1 }}
                onChange={(e) => handleInput(setContent, e)}
                value={content}
            />
            <div dangerouslySetInnerHTML={{ __html: html}}></div>
        </div>
        <Button onClick={() => {
            console.log(title, content)
        }}></Button>
    </div>
}
