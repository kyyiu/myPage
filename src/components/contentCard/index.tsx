import React, { Fragment, useEffect, useState } from "react";
import {
  Card,
  Image as Arco_Image
} from '@arco-design/web-react'
import {
  useRequest
} from 'ahooks'

import sty from './index.module.less'
import './index.less'

import pics from "@/static/pics";
import { Link as RLink } from "react-router-dom";

function getData(params: any) {
  console.log('getData', params)
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        res('成功')
        return
      }
      rej('失败')
    })
  })
}

interface Props {

}

function ContentCard(props: any) {
  console.log('contentCard_props', props)
  const {
    self_id,
    introduce
  } = props.data
  const { loading, run } = useRequest(getData)

  useEffect(() => {
    const Img = new Image()
    Img.src = pics.W
    Img.onload = () => {
      // console.log('图片加载成功')
    }

  }, [])
  return (
    <Fragment>
      {
        loading ?
          <div>loading</div>
          :
          <RLink to={`/blog/${self_id}`}>
            <div className={sty.card_content} >
              <Card style={{ width: '28rem', height: '18rem', cursor: 'pointer' }}>
                <div className="df jcc cC_image_container">
                  <Arco_Image
                    title={"我是一个标题"}
                    description={"我是一份描述"}
                    src={pics.W}
                    className={sty.fadeIn}
                    loader
                    loaderClassName={sty.ocuppied}></Arco_Image>
                </div>
                <div className={sty.card_introduce}>
                  {introduce}
                </div>
              </Card>
            </div>
          </RLink>
      }
    </Fragment>
  )
}

export default React.memo(ContentCard)