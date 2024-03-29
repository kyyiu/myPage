import React, { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import { Card, Switch, Skeleton, Avatar, Typography, Calendar, Link as Arco_Link, Carousel } from '@arco-design/web-react';
import { Link } from "react-router-dom";

import {
  cardItemArr,
  gossipArr,
  changeArr
} from '@/constants/config'

import sty from './home.module.less'
import './home_carousel.less'

import Almanac from "../utils/almanac";

import pics from "@/static/pics";

const imgSrc = [pics.nxe2022, pics.nxe2023, pics.academicAualifications, pics.sykj1, pics.sykj2]

const showYinInfo = {
  shengxiao: '',
  month: '',
  day: ''
}

const { Meta } = Card;

const getGossip = () => {
  const almanac = new Almanac()
  // 当前日期数据
  const [year, month, day, hour] = almanac.getCurTime() //[y, m, d, h]
  // 当前日期的积累日
  const days = almanac.date2Day(year, month, day)
  // 当前的生肖
  const animalName = almanac.getThisYearAnimal(year)
  // 获取这年的农历列表
  const { monthList } = almanac.getThisYinYear(year)
  monthList.forEach((ele, idx) => {
    // 闰月出现在今年阳历开头，判断是闰几月
    if (!ele.month && idx === 0) {
      // 下一个朔望月是正月说明，这个是闰腊月
      const cMonthNameIdx = almanac.monthName.indexOf(monthList[1].month)
      ele.month = `闰${cMonthNameIdx === 1 ? '腊月' : almanac.monthName[cMonthNameIdx - 1]}`
    }
    // 闰x月 出现在 x月的后面,比如 闰二月肯定在二月后面
    if (!ele.month) {
      ele.month = `闰${monthList[idx - 1].month}`
    }
  })
  // 计算当前日期在农历几月
  let yinMonthName = ''
  for (const i in monthList) {
    if (monthList[i].first_day <= days && monthList[i].last_day >= days) {
      yinMonthName = monthList[i].month
      break
    }
  }

  const yinYear = almanac.shengxiao.indexOf(animalName)
  const yinMonth = almanac.monthName.indexOf(yinMonthName)
  const yinDay = days - (almanac.getClosestNewMoon(days)[1] >> 0) + 1
  const yinTime = almanac.getChineseTime(hour)

  showYinInfo.shengxiao = animalName
  showYinInfo.month = yinMonthName
  showYinInfo.day = almanac.ChineseDay[yinDay]

  const sum = yinYear + yinMonth + yinDay

  // 转换为二进制表示，比如乾卦为1， 用0b111表示
  const topIdx = sum % 8
  const upGossip = gossipArr[topIdx ? topIdx : 8]
  const bottomIdx = (sum + yinTime) % 8
  const bottomGossip = gossipArr[bottomIdx ? bottomIdx : 8]

  const changeIdx = almanac.changeGossip(yinYear, yinMonth, yinDay, yinTime)
  const isTopChange = changeIdx < 4 ? 0 : 1
  const finalTop = isTopChange ? changeArr[changeIdx - 3] ^ upGossip : upGossip
  const finalBottom = isTopChange ? bottomGossip : changeArr[changeIdx] ^ bottomGossip

  return {
    finalTop,
    finalBottom,
    animalName,
    yinMonthName,
    chineseDay: showYinInfo.day
  }
}

const Gossip = React.memo(({ idx, isUp, data }) => {
  const {
    finalTop,
    finalBottom
  } = data

  // (finalTop & changeArr[idx + 1]) 如果为真则是实线
  const showResult = isUp ? finalTop : finalBottom
  console.log('render')
  return <div className={sty.gossip_container}>
    <div className={sty.l}></div>
    <div className={`${sty.m} ${(showResult & changeArr[idx + 1]) ? '' : sty.white_bg}`}></div>
    <div className={sty.r}></div>
  </div>
})

function CardItem({ data }) {
  const dic = {
    img: () => {
      return <div>
        {
          data.links.length ?
            data.links.map((e, idx) => {
              return <a className={sty.card_item} href={e.to} target="_blank" key={idx} style={{ display: "inline-block" }}>
                <img src={e.img} style={{ width: '160px' }} />
                <p>{e.desc}</p>
              </a>
            })
            :
            '暂无数据'
        }
      </div>
    },
    txt: () => {
      return data.links.length ?
        data.links.map((e, idx) => {
          return <p>
            {
              e.isSelf ?
                <Link to={`blog/${e.to}`}>{e.desc}</Link>
                :
                <a href={e.to} target="_blank" key={idx}>{e.desc}</a>
            }
          </p>
        })
        :
        '暂无数据'
    }
  }
  return dic[data.type] && dic[data.type]() || null
}

function Home(props) {
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(1);

  useEffect(() => {
    props.setCur('0')
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  const chooseDate = useCallback(() => {
    return setRefresh(Math.floor(Math.random() * 7) + 1)
  }, [])

  const gossipData = useMemo(() => {
    return getGossip()
  }, [])

  const getGossipName = () => {
    const dic = {
      0: ['坤', '地'], // 000
      1: ['震', '雷'], // 001
      2: ['坎', '水'], // 010
      3: ['兑', '泽'], // 011
      4: ['艮', '山'], // 100
      5: ['离', '火'], // 101
      6: ['巽', '风'], // 110
      7: ['乾', '天'], // 111
    }
    const { finalTop, finalBottom } = gossipData
    if (finalTop === finalBottom) {
      return `${dic[finalTop][0]}为${dic[finalTop][1]}`
    }
    return `${dic[finalTop][1]}${dic[finalBottom][1]}`
  }

  return (
    <Fragment>
      <div className={sty.home_layout}>
        <div className={sty.f1}>
          <div className={`dn`}>
            <Switch
              style={{ display: 'block', marginLeft: 20 }}
              checked={!loading}
              onChange={(checked) => setLoading(!checked)}
            />
          </div>

          {
            0 ?
              <Fragment>
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
                      <Arco_Link>More</Arco_Link>
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
                </Card> </Fragment> : null

          }
          <div className={sty.mr20}>
            <Skeleton
              loading={loading}
              text={{ rows: 0 }}
              image={{ style: { width: '100%', height: 400, margin: 0 } }}
            >
              <Carousel
                autoPlay={true}
                animation="card"
                style={{
                  width: "100%",
                  height: 400,
                }}>
                {
                  imgSrc.map((ele, idx) => (
                    <div key={idx} style={{ width: '50%' }}>
                      <img src={ele} className="w100 h100"></img>
                    </div>
                  ))
                }
              </Carousel>
            </Skeleton>
            <Fragment>
              {

                cardItemArr.map((ele, idx) => {
                  return <Card key={idx} title={ele.title} extra={
                    ele.extraUrl ?
                      <a href={ele.extraUrl} target="_blank">{ele.more}</a>
                      : null
                  }>
                    {
                      true ?
                        <CardItem data={ele} />
                        :
                        <Arco_Link href="https://arco.design/react/components/link" icon hoverable target={"_blank"}>arco</Arco_Link>
                    }
                    <p>...</p>
                  </Card>
                })
              }

            </Fragment>
          </div>
        </div>
        <div>
          <Calendar panel allowSelect={false} onPanelChange={chooseDate}></Calendar>

          <div className={`df of aic jcc ${sty.gossip}`}>
            <div style={{ width: '30%' }}>
              <Skeleton
                loading={loading}
                animation
                className={'gossip_sketon'}
                text={{ rows: 6, width: ['100%', '100%', '100%', '100%', '100%', '100%'] }}
              >
                {
                  [2, 1, 0, 2, 1, 0].map((ele, index) => {
                    return <Gossip idx={ele} isUp={index < 3} key={index} data={gossipData} />
                  })
                }
              </Skeleton>

            </div>
            {
              loading ? <div /> : <div className={sty.ml20}>
                <div>{gossipData.animalName}</div>
                <div>{gossipData.yinMonthName}</div>
                <div>{gossipData.chineseDay}</div>
                <div>{getGossipName()}</div>
              </div>
            }
          </div>
          {
            loading ? null : <div className={sty.streamer_content}>
              <div className={'streamer_before'}></div>
              <div className={sty['streamer_mflow-box']}>
                <span className={sty['mflow-box_span']}>
                  <div className={`tac`} style={{ fontSize: '20px' }}>
                    <a href="https://www.k366.com/gua/" target="_blank">去查{getGossipName()}卦</a>
                  </div>
                </span>
              </div>
              <div className={sty.streamer_after}></div>
            </div>
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Home