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
import { CSSTransition } from 'react-transition-group'
import './index.less'
import { articleJson } from '@/types/article';

const pageSize = 10
function BlogPanel(props: any) {

  const {pages, id} = useParams()
  const [currentPage, setCurrentPage] = useState(`${pages},${pageSize}`)
  const [articles, setArticles] = useState<articleJson[]>([])
  const [show, setShow] = useState(true)

  const req = () => {
    if (pages) {
      return axios.get(`${BASE_URL}/admin/selectArticle`, {
        params: {
          pages: currentPage,
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
  }, [currentPage])

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
    // tables: true,
    // 是否支持github的换行符(需要开启gfm)
    breaks: false,
    // 自动渲染列表
    smartLists: true,
    // 如何进行代码高亮
    highlight: function (code: any) {
        return hljs.highlightAuto(code).value
    }
  })

  const pageChange = (n: any) => {
    setCurrentPage(`${n},${pageSize}`)
  }

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
              if (pages) {
                return (
                  <ContentCard data={ele} key={idx}></ContentCard>
                )
              }
              const html = marked(ele.article_content)
              return <div key={ele.id} dangerouslySetInnerHTML={{__html:  html}}></div>
            })
          :
            <div>没得</div>
        }

      </div>
      {
        0 ? <div>
        <button onClick={()=>setShow(!show)}></button>
          <CSSTransition in={show}
            classNames="card"
            timeout={1000}
            appear
            unmountOnExit={true}>

            <div className='dd'></div>
          </CSSTransition>
        </div> : null
      }
      <div className='df jce'
        style={{
          marginRight: '20px',
          marginBottom: '10px'
        }}>
        {
          pages ? <Pagination
          onChange={pageChange}
          simple
          showTotal
          pageSize={pageSize}
          size='small'
          total={articles.length} /> : null
        }
      </div>

    </div>
  )
}

export default BlogPanel