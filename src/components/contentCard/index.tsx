import React, { useEffect, useState } from "react";
import {
  Card,
  Image as Arco_Image
} from '@arco-design/web-react'

import sty from './index.module.scss'
import './index.scss'

import pics from "@/static/pics";

function ContentCard(props: any) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const Img = new Image()
    Img.src = pics.W
    Img.onload = () => {
      setLoading(!loading)
    }

  }, [])
  console.log('render_contentCard')
  return (
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
    
  )
}

export default React.memo(ContentCard)