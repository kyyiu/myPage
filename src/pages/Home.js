import React, { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import { Card, Switch, Skeleton, Avatar, Link, Typography, Calendar, Link as Arco_Link } from '@arco-design/web-react';

import sty from './home.module.scss'


import Almanac from "../utils/almanac";

const label = ['视频', '视频', '视频', '视频', '视频']
const gossipArr = [, 0b111, 0b011, 0b101, 0b001, 0b110, 0b010, 0b100, 0b000]
const changeArr = [, 0b001, 0b010, 0b100]


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

const Gossip = React.memo(({idx, isUp}) => {
  
  const almanac = useMemo(() => new Almanac(), [])
  // 当前日期数据
  const [year, month, day, hour] = almanac.getCurTime() //[y, m, d, h]
  // 当前日期的积累日
  const days = useMemo(() => almanac.date2Day(year, month, day), [year, month, day])
  // 当前的生肖
  const animalName = useMemo(() => almanac.getThisYearAnimal(year), [year])
  // 获取这年的农历列表
  const { monthList } = useMemo(() => almanac.getThisYinYear(year), [year])
  // 计算当前日期在农历几月
  const yinMonthName = useMemo(() => {
    for (const i in monthList) {
      if (monthList[i].first_day <= days && monthList[i].last_day >= days) {
        return monthList[i].month
      }
    }
  }, [year])
  
 
  const yinYear = almanac.shengxiao.indexOf(animalName)
  const yinMonth = almanac.monthName.indexOf(yinMonthName)
  const yinDay = useMemo(() => days - (almanac.getClosestNewMoon(days)[1]>>0) + 1, [days])
  const yinTime = almanac.getChineseTime(hour)

  const sum = yinYear + yinMonth + yinDay

  // 转换为二进制表示，比如乾卦为1， 用0b111表示
  const topIdx = sum % 8
  const upGossip = gossipArr[topIdx ? topIdx : 8]
  const bottomIdx = (sum + yinTime) % 8
  const bottomGossip = gossipArr[bottomIdx ? bottomIdx : 8]

  const changeIdx = almanac.changeGossip(yinYear, yinMonth, yinDay, yinTime)
  const isTopChange = changeIdx < 4 ? 0 : 1
  const finalTop = isTopChange ? changeArr[changeIdx - 3] ^ upGossip : upGossip
  const finalBottom = isTopChange ? bottomGossip : changeArr[changeIdx - 3] ^ bottomGossip
  // (finalTop & changeArr[idx + 1]) 如果为真则是实线
  const showResult = isUp ? finalTop : finalBottom
  console.log('render') 
  return <div class={sty.gossip_container}>
    <div class={sty.l}></div>
    <div class={`${sty.m} ${(showResult & changeArr[idx + 1])  ? '' : sty.white_bg}`}></div>
    <div class={sty.r}></div>
  </div>
})

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

          <Skeleton
            loading={loading}
            animation
            text={{ rows: 6, width: ['100%', '100%', '100%', '100%', '100%', '100%']}}
          >
            {
              [0,1,2,2,1,0].map((ele, index) => {
                return  <Gossip idx={ele} isUp={index < 3} key={index}/>
              })
            }
          </Skeleton>
          
        </div>
      </div>
    </div>
  )
}

export default Home