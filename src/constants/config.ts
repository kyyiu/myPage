import pics from "@/static/pics"
import React, { ReactElement } from "react"

// export const headerItems = ['首页', 'jd', '文章','博客', '多媒体', '工具']
export const headerItems = ['首页', '简历', '博客']
export const firstPageItems = ['最近新文', '好书推荐', '读书笔记', '个人仓库', '视频']

export const BASE_URL = "http://127.0.0.1:7001"

interface cardItemLinksI {
  desc: string, 
  to: string, 
  img?: string,
  isSelf?: boolean
}

function cardItemGen(
  title: string, 
  more: string, 
  url: string, 
  extraUrl: string, 
  type: string,
  links: cardItemLinksI[]
) {
  return {
    title,
    more,
    url,
    extraUrl,
    type,
    links
  }
}

function cardItemLinksGen(desc: string, to: string, img?: string, isSelf?: boolean): cardItemLinksI {
  return {
    desc,
    img,
    to,
    isSelf
  }
}



export const cardItemArr = [
  cardItemGen('最近新文', '更多', '/jd', 'https://blog.csdn.net/kyyius', 'txt',[
    cardItemLinksGen(
      '缓存机制和实现',
      `130804090`,
      '',
      true
    ),
    cardItemLinksGen(
      'canvas清晰度问题',
      `130503749`,
      '',
      true
    ),
    cardItemLinksGen(
      '【代码结构优化】嵌套条件判断',
      `130503748`,
      '',
      true
    )
  ]), 
  // cardItemGen('好书推荐', '更多', '/jd', 'https://blog.csdn.net/kyyius/category_12234221.html', 'txt',[]), 
  cardItemGen('个人仓库', '更多', '/jd', 'https://github.com/kyyiu?tab=repositories', 'txt',[
    cardItemLinksGen(
      '去看看',
      `https://github.com/kyyiu?tab=repositories`
    )
  ]), 
  cardItemGen('视频剪辑', '更多', '/jd', 'https://space.bilibili.com/22656713/video', 'img', [
    cardItemLinksGen(
      '饥荒下',
      `https://www.bilibili.com/video/BV1JL411v7n9`,
      pics.starve2
    ),
    cardItemLinksGen(
      '饥荒上',
      `https://www.bilibili.com/video/BV1La4y1P75X`,
      pics.starve1
    ),
    cardItemLinksGen(
      '黑哥看恋恋',
      `https://www.bilibili.com/video/BV1Ah4y1W7wk`,
      pics.touhou
    )
    
  ],
  ),
  cardItemGen('我的其他线上网站', '更多', '', '', 'txt',[
    // cardItemLinksGen(
    //   '基于web3技术在sepolia区块链实现的nft小商店(翻墙)',
    //   `https://frosty-recipe-8169.on.fleek.co/`
    // ),
    cardItemLinksGen(
      'threejs学习-web3d等',
      // `https://billowing-shape-3323.on.fleek.co/`
      'https://kyyiu.github.io/github_pages/threejs_learn/'
    )
  ])
]
// https://winter-wind-5039.on.fleek.co
export const gossipArr = [0b000, 0b111, 0b011, 0b101, 0b001, 0b110, 0b010, 0b100, 0b000]
export const changeArr = [, 0b001, 0b010, 0b100]