import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  Image,
  Grid,
} from '@arco-design/web-react'
import {
  headerItems
} from '@/constants/config'
import {
  IconMenu,
  IconDriveFile,
  IconBook,
  IconTool
} from '@arco-design/web-react/icon'
import pics from '@/static/pics'

const Row = Grid.Row
const Col = Grid.Col

const MenuItem = Menu.Item

const headerItemIcoArr = [<IconMenu />, <IconDriveFile />, <IconBook />, <IconTool />]

const contentPath = ['/', '/jl', '/blog', '/tool']

interface MyHeaderProps {
  showWhichItem: string
}


function MyHeader(props: MyHeaderProps) {
  const {
    showWhichItem
  } = props
  
  // 1是亮背景
  const [curTheme, setCurTheme] = useState(true)

  const toggleTheme = () => {
    setCurTheme(!curTheme)
    document.body.setAttribute('arco-theme',curTheme ? 'dark' : 'lilght')
  }

  const headerItemsIco = useMemo(() => {
    return headerItemIcoArr.map((ele, idx) => ({
      path: contentPath[idx],
      ico: ele
    }))
  }, [])

  return <Menu mode={'horizontal'} selectedKeys={[showWhichItem]} ellipsis={false}>
  <Row className={'w100'}>
    <Col span={10}>
      <MenuItem disabled className={'normal_cursor'} key={'x'}>
        <Image className={'normal_cursor'} style={{ height: '30px' }} src={pics.H} />
      </MenuItem>
      {
        headerItems.map((ele, idx) => <Link to={headerItemsIco[idx].path} key={String(idx)}><MenuItem key={String(idx)}>
           {headerItemsIco[idx].ico} {ele}
        </MenuItem></Link>)
      }
    </Col>
    <Col span={0} flex='auto' className={'r2l'}>
      <MenuItem disabled className={'normal_cursor ico_row'} key={'y'}>
        <Image 
        preview={false} 
        src={ curTheme ? pics.Light : pics.Dark} 
        className={'normal_cursor theme_ico'} 
        onClick={toggleTheme} />
      </MenuItem>
    </Col>
  </Row>
</Menu>
}

export default MyHeader