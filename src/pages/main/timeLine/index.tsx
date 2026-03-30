import React, { Fragment, useEffect } from "react";
import styles from './index.module.less'

function MyTimeLine(props: any) {
    useEffect(() => {
        props.setCur('3')
    }, [])
    return (
        <Fragment>
            <div className={styles["timeline-container"]}>

                <div className={styles["timeline"]}>
                    <div className={styles["timeline-item"]}>
                        <div className={styles["timeline-marker"]}>
                            <div className={styles["timeline-dot"]}></div>
                            <div className={styles["timeline-date"]}>2024.03 — 2025.12</div>
                        </div>
                        <div className={styles["timeline-content"]}>
                            <div className={styles["job-title"]}>
                                全栈开发
                                <span className={styles["company"]}>🚀 成都云腾科技 · 量化交易系统</span>
                            </div>
                            <div className={styles["period-mobile"]}>2024.03 — 2025.12</div>
                            <div className={styles["description"]}>
                                基于 LangGraph 和 LangChain 构建的智能期权策略分析系统，聚焦财报发布前的期权交易策略生成与自然语言查询。
                            </div>
                            <div className={styles["description"]}>
                                设计并实现基于 LangGraph 的有向工作流引擎，自动完成数据库查询、指标计算、策略生成与风险评估的完整链路
                            </div>
                            <div className={styles["description"]}>
                                构建基于 LangChain 的数据库查询工具，支持自然语言转 SQL 的多表联查（期权链、ATR 概览等），实现交互式命令行查询体验
                            </div>
                            <div className={styles["description"]}>
                                集成大语言模型 作为策略分析引擎，实现对期权链与波动率数据的智能解读，输出结构化的交易建议与可执行下单清单
                            </div>
                            <div className={styles["description"]}>
                                相关数据参数、提示词等优化
                            </div>

                            <div className={styles["tech-stack"]}>
                                <span className={styles["tech-tag"]}>LangGraph</span>
                                <span className={styles["tech-tag"]}>LangChain</span>
                                <span className={styles["tech-tag"]}>LLM 应用开发</span>
                                <span className={styles["tech-tag"]}>期权策略</span>
                                <span className={styles["tech-tag"]}>数据分析</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles["timeline-item"]}>
                        <div className={styles["timeline-marker"]}>
                            <div className={styles["timeline-dot"]}></div>
                            <div className={styles["timeline-date"]}>2023.05 — 2024.02</div>
                        </div>
                        <div className={styles["timeline-content"]}>
                            <div className={styles["job-title"]}>
                                前端开发
                                <span className={styles["company"]}>🌍 成都双扬科技 · 榴莲校园</span>
                            </div>
                            <div className={styles["period-mobile"]}>2023.05 — 2024.02</div>
                            <div className={styles["description"]}>
                                学校端，家长端，学校办公平台、云盘资源共享、家校互动。把控业务迭代进度，参与代码规范从0到1建设。
                            </div>
                            <div className={styles["description"]}>
                                设计通用“时间片+资源位”数据结构，支持任意学校调课/单双周配置，组件复用率提升70%，交付多所重点学校定制需求。
                            </div>
                            <div className={styles["description"]}>
                                从0学习ECharts + Three.js，2周内落地“校园空间3D看板”，获校方好评。
                            </div>
                            <div className={styles["description"]}>
                                负责OA办公自动化模块：实现请假/调课审批、线下活动、公告下发、会议室预定等流程，行政事务线上化等，审批效率提升30%
                            </div>
                            <div className={styles["description"]}>
                                梳理多个路由与页面混乱映射，重构为“路径即页面”约定，定位文件时间从平均半分钟缩短至10秒，迭代速度显著提升。
                            </div>
                            <div className={styles["tech-stack"]}>
                                <span className={styles["tech-tag"]}>前端技能</span>
                                <span className={styles["tech-tag"]}>threejs</span>
                                <span className={styles["tech-tag"]}>数据可视化</span>
                                <span className={styles["tech-tag"]}>地图</span>
                                <span className={styles["tech-tag"]}>工程化</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles["timeline-item"]}>
                        <div className={styles["timeline-marker"]}>
                            <div className={styles["timeline-dot"]}></div>
                            <div className={styles["timeline-date"]}>2021.07 — 2023.03</div>
                        </div>
                        <div className={styles["timeline-content"]}>
                            <div className={styles["job-title"]}>
                                前端开发
                                <span className={styles["company"]}>📌 成都午牛科技-牛小二招聘</span>
                            </div>
                            <div className={styles["period-mobile"]}>2021.07 — 2023.03</div>
                            <div className={styles["description"]}>
                                招聘端+求职端双平台，核心功能含职位筛选、电话拨打、会员身份切换、信息发布/编辑、招新拉旧活动。
                            </div>
                            <div className={styles["description"]}>
                                独立承接“招新拉旧”高优运营需求，设计可配置活动弹窗组件，支撑3期裂变活动，32%的用户参与活动.
                            </div>
                            <div className={styles["description"]}>
                                重构招聘列表虚拟滚动，解决长列表白屏卡顿；实现身份切换时数据缓存同步，用户操作流畅度提升40%。
                            </div>
                            <div className={styles["description"]}>
                                制定小程序Git提交规范、ESLint规则，组织两次技术分享，推动团队代码复用率提升20%。
                            </div>
                            <div className={styles["tech-stack"]}>
                                <span className={styles["tech-tag"]}>HTML5/CSS3</span>
                                <span className={styles["tech-tag"]}>JavaScript</span>
                                <span className={styles["tech-tag"]}>ECharts</span>
                                <span className={styles["tech-tag"]}>Git</span>
                                <span className={styles["tech-tag"]}>微信小程序</span>
                                <span className={styles["tech-tag"]}>flutter</span>
                                <span className={styles["tech-tag"]}>Vue</span>
                                <span className={styles["tech-tag"]}>Taro/React</span>
                                <span className={styles["tech-tag"]}>python</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default MyTimeLine
