import React, { Fragment, useEffect, useState } from 'react';

import ContentCard from '@/components/contentCard';
import { useParams } from 'react-router-dom';
import { Pagination } from '@arco-design/web-react'
import { useRequest } from 'ahooks';
import { BASE_URL } from '@/constants/config';
import axios from 'axios';
import {marked} from 'marked'  
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css'

function BlogPanel(props: any) {

  const {pages, id} = useParams()
  const [articles, setArticles] = useState([])

  const req = () => {
    if (pages) {
      return axios.get(`${BASE_URL}/admin/selectArticle`, {
        params: {
          pages,
          id
        }
      })
    }
    return axios.get(`${BASE_URL}/admin/getArticle/${id}`) 
  }

  const { loading, run } = useRequest(req, {
    manual: true,
    onSuccess: res => {
      console.log(res)
      setArticles(res.data.res)
    },
    onError: err => {
      console.log(err)
    }
  })

  useEffect(() => {
    run()
  }, [])

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

  console.log('blog--pp--:', loading)

  if (loading) {
    return <div>loading</div>
  }

  return (
    <div className='df fdc h100'>
      <div
        style={{ paddingTop: '10px' }}
        className='df fw jcsa acsa f1'>
        {
          Array.isArray(articles) ?
            articles.map((ele, idx) => {
              return (
                <ContentCard data={ele} key={idx}></ContentCard>
              )
            })
          :
            <div>没得</div>
        }

      </div>
      <div className='df jce'
        style={{
          marginRight: '20px',
          marginBottom: '10px'
        }}>
        <Pagination
          simple
          showTotal
          pageSize={3}
          size='small'
          total={10} />
      </div>

    </div>
  )
}

export default BlogPanel