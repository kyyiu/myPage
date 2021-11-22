import React, {Fragment} from "react";

import {
  Layout
} from '@arco-design/web-react'

import './index.css'
import styles from './index.module.less'

const Footer = Layout.Footer

function MyFooter() {
  return (
    <Fragment>
      <div className={styles.b}>
        AAAAAAAAAAAAAAAAA
      </div>
      <Footer>
      hello world
    </Footer>
    </Fragment>
    
  )
}

export default MyFooter