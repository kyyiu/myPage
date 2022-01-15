import React, { Fragment, useEffect, useState } from "react";
import {
  Card,
  Image as Arco_Image
} from '@arco-design/web-react'
import {
  useRequest
} from 'ahooks'

import sty from './index.module.scss'
import './index.scss'

import pics from "@/static/pics";

function getData(params: any) {
  console.log('getData', params)
  return new Promise((res, rej) => {
    setTimeout(() => {
      if(Math.random() > 0.5) {
        res('成功')
        return
      }
      rej('失败')
    })
  })
}

function ContentCard(props: any) {
  console.log('contentCard_props', props)

  const { loading, run } = useRequest(getData)

  useEffect(() => {
    const Img = new Image()
    Img.src = pics.W
    Img.onload = () => {
      console.log('图片加载成功')
    }

  }, [])
  return (
    <Fragment>
      {
        loading ?
        <div>loading</div>
        : 
        <div className={sty.card_content}>
          {
            Array(6).fill(0).map((ele, idx) => {
              return <Card style={{width: '40rem', height: '25rem'}}>
                <div className="cC_image_container">
                  <Arco_Image 
                    src={pics.W} 
                    className={sty.fadeIn} 
                    loader 
                    loaderClassName={sty.ocuppied}></Arco_Image>
                </div>
              </Card>
            })
          }
        </div>
      }
    </Fragment>
  )
}

export default React.memo(ContentCard)