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
import MyLoading from '../loading';
import { articleJson } from '@/types/article';
import b130804090 from '@/pages/sub/130804090';
import b130576528 from '@/pages/sub/130576528';
import b130503748 from '@/pages/sub/130503748';

const temporaryBlog = [{
  id: '130804090',
  html: b130804090
},{
  id: '130576528',
  html: b130576528
},{
  id: '130503748',
  html: b130503748
}]

const pageSize = 10
function BlogPanel(props: any) {

  const {pages, id} = useParams()
  const [currentPage, setCurrentPage] = useState(`${pages},${pageSize}`)
  const [articles, setArticles] = useState<articleJson[]>([])
  const [show, setShow] = useState(true)

  const req = () => {
    return new Promise(res => {
      setTimeout(() => {
        const o = require(`@/pages/sub/${id}`)
        res({})
        if (o && o.default) {
          setArticles([
            {
              addTime: '',
              article_content: o.default,
              father_id: '',
              id: 1,
              introduce: '',
              view_count: 0, 
              type_id:1,
              title:'',
              self_id: '',
              level: 1
            }
          ])
          return
        }
      }, 1500);
    }) 
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
      // setArticles(res.data.res)
    },
    onError: err => {
      console.log(err)
    },
    onFinally() {
      console.log("FFF")
    }
  })

  useEffect(() => {
    // const o = temporaryBlog.find(e => e.id === id)
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
    return <MyLoading/>
  }
  console.log(articles)
  return (
    <div className='df fdc h100'>
      <div
        style={{ paddingTop: '10px' }}
        className='df fw jcsa acsa f1'>
        {
          articles.length ?
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
            <div>
              没得数据--
              <a href='https://blog.csdn.net/kyyius'>点击这里看看别的</a>
            </div>
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