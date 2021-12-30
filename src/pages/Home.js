import React, { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import { Card, Switch, Skeleton, Avatar, Link, Typography, Calendar, Link as Arco_Link } from '@arco-design/web-react';

import sty from './home.module.scss'

const label = ['视频', '视频', '视频', '视频', '视频']

const { Meta } = Card;

function isYinGossip(num) {
   // <!-- 第一行 n % 2 有余数则实 -->
  //   <!-- 第二行 （n+1)&2 为真则为实 -
  //   <!-- 第三行 n <5 则为实-> -->
  return (idx) => {
    switch(idx) {
      case 0: {
        return !(num % 2)
      }
      case 1: {
        return !((num + 1) & 2)
      }
      case 2: {
        return !(num < 5)
      }
    }
  }
}

function Gossip({idx, num}) {
  const checkYin = useCallback(() => {
    console.log('共享变化')
    return isYinGossip(num)
  }, [num])
  const isYin = useMemo(() => {
    console.log('序列变化')
    return checkYin(idx)
  }, [idx])
  
  return [0,1,2].map(ele => <div class={sty.gossip_container} key={ele}>
    <div class={sty.l}></div>
    <div class={`${sty.m} ${isYin ? sty.white_bg : ''}`}></div>
    <div class={sty.r}></div>
  </div>)
}

const useDidMount = (setLoading) => {
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
}

function Home() {
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(1);
  useDidMount(setLoading)

  const chooseDate = (e) => {
    setRefresh(Math.floor(Math.random() * 7) + 1)
    console.log('func---', e.$d, +new Date(e.$d).getTime())
  }
  

  return (
    <div className={sty.home_layout}>
      <div className={sty.f1}>
        <Switch
          style={{ display: 'block', marginLeft: 20 }}
          checked={!loading}
          onChange={(checked) => setLoading(!checked)}
        />
        <Card
          style={{ display: 'inline-block', verticalAlign: 'top', width: 384, margin: 20 }}
          cover={
            <Skeleton
              loading={loading}
              text={{ rows: 0 }}
              image={{ style: { width: 352, height: 188, margin: '16px 16px 0 16px' } }}
            >
              <div
                style={{
                  height: 204,
                  overflow: 'hidden',
                }}
              >
                <img
                  style={{ width: '100%', transform: 'translateY(-20px)' }}
                  alt='dessert'
                  src='//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp'
                />
              </div>
            </Skeleton>
          }
        >
          <Meta
            avatar={
              <Skeleton
                style={{ display: 'flex', alignItems: 'center', marginTop: 4 }}
                loading={loading}
                text={{ rows: 1, width: 64 }}
                image={{ shape: 'circle', style: { width: 24, height: 24 } }}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar size={24} style={{ marginRight: 8 }}>
                    A
                  </Avatar>
                  <Typography.Text>Username</Typography.Text>
                </div>
              </Skeleton>
            }
            title={
              <Skeleton loading={loading} style={{ marginTop: 0 }} text={{ rows: 1, width: 72 }}>
                Card title
              </Skeleton>
            }
            description={
              <Skeleton loading={loading} text={{ rows: 1, width: 150 }}>
                This is the description
              </Skeleton>
            }
          />
        </Card>
        <Card
          style={{ display: 'inline-block', verticalAlign: 'top', width: 384, margin: 20 }}
          title={
            <Skeleton loading={loading} text={{ rows: 1, width: 72 }}>
              Arco Card
            </Skeleton>
          }
          extra={
            <Skeleton
              loading={loading}
              text={{ rows: 1, width: '100%', style: { width: 30, float: 'right' } }}
            >
              <Link>More</Link>
            </Skeleton>
          }
        >
          <Skeleton loading={loading} text={{ rows: 2, width: ['100%', '80%'] }}>
            ByteDance's core product, Toutiao ('Headlines'), is a content platform in China and around
            the world.
          </Skeleton>

          <Meta
            avatar={
              <Skeleton
                style={{ display: 'flex', alignItems: 'center', marginTop: 4 }}
                loading={loading}
                text={{ rows: 1, width: 64 }}
                image={{ shape: 'circle', style: { width: 24, height: 24 } }}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar size={24} style={{ marginRight: 8 }}>
                    A
                  </Avatar>
                  <Typography.Text>Username</Typography.Text>
                </div>
              </Skeleton>
            }
          />
        </Card>

        <div className={sty.mr20}>
          <Card title='Arco Card'>
            <Arco_Link href="https://arco.design/react/components/link" icon hoverable target={"_blank"}>arco</Arco_Link>
          </Card>
        </div>
      </div>
      <div>
        <Calendar panel allowSelect={false} onChange={e => console.log(e)} onPanelChange={chooseDate} className={`${sty.posi_ab} ${sty.r0}`}></Calendar>

        <div className={sty.gossip}>
          {
            <Fragment>
            <Gossip idx={0} num={refresh}/>
            <Gossip idx={1} num={refresh}/>
            <Gossip idx={2} num={refresh}/>
            </Fragment>
          }
        </div>
      </div>
    </div>
  )
}

export default Home