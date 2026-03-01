"use client";
import React, {useEffect, useRef} from "react";
import {Header} from "@/app/resume/components/resume_component_header";
import {Name} from "@/app/resume/components/Name";
import {Block} from "@/app/resume/components/Block";
import {Block1} from "@/app/resume/components/Block1";

export default function Home() {

    return (<div style={{display: "flex", flexDirection: "column"}}>
            <img style={{height: 10, width: "100%", marginTop: 0}} src={"./blue_color.png"} alt={""}/>
            <div style={{display: "flex", flexDirection: "column", paddingLeft: 30, paddingRight: 30}}>
                <Name></Name>
                <Header content={'学校经历'}></Header>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "space-between",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 3,
                    marginBottom: 3
                }}>
                    <div style={{fontWeight: "bold", fontSize: 16}}>中国计量大学</div>
                    <div style={{fontSize: 15, verticalAlign: "middle"}}>2018年09月 - 2022年06月</div>
                </div>
                <div style={{fontSize: 15}}>计算机科学与技术-本科</div>
                <div style={{marginTop: 0, marginBottom: 0, paddingLeft: 0}}>
                    <div style={{
                        listStyle: "none",
                        paddingLeft: 0,
                        padding: 0,
                        fontSize: 15,
                        marginTop: 5,
                        marginBottom: 5
                    }}>
                        {/*<Block/> */}
                        校一等奖学金（2018-2019）与其余奖学金多次；通过英语6级
                    </div>
                    <div style={{
                        paddingLeft: 0,
                        fontSize: 15,
                        marginTop: 5,
                        marginBottom: 5
                    }}>
                        {/*<Block/>*/}
                        <b>ICPC/ACM竞赛银奖；蓝桥杯竞赛浙江省一等奖；国赛二等奖等</b>
                    </div>
                </div>

                {/*<Header content={'ICPC/ACM竞赛经历'}></Header>*/}
                {/*<ul style={{marginTop: 0, marginBottom: 0, paddingLeft: 20}}>*/}
                {/*    <li style={{paddingLeft: 0, fontSize: 13, marginTop: 5, marginBottom: 5}}>本科期间 获得*/}
                {/*        <div style={{display: "inline", fontWeight: "bold"}}>ICPC/ACM竞赛 EC-Final铜奖</div>*/}
                {/*    </li>*/}

                {/*    <li style={{paddingLeft: 0, fontSize: 13, marginTop: 5, marginBottom: 5}}>蓝桥杯竞赛浙江省一等奖；国赛二等奖等*/}
                {/*    </li>*/}
                {/*</ul>*/}

                <Header content={'个人技能'}></Header>
                <div style={{marginTop: 0, marginBottom: 0, paddingLeft: 0}}>
                    <div style={{
                        paddingLeft: 0,
                        fontSize: 15,
                        marginTop: 3,
                        marginBottom: 3,
                        lineHeight: "21px"
                    }}>
                        <div style={{display: "inline", fontWeight: "bold"}}>编程语言：</div>
                        熟练使用Java、GoLang
                    </div>
                    {/*<div style={{*/}
                    {/*    paddingLeft: 0,*/}
                    {/*    fontSize: 15,*/}
                    {/*    marginTop: 3,*/}
                    {/*    marginBottom: 3,*/}
                    {/*    lineHeight: "21px"*/}
                    {/*}}>*/}
                    {/*    <div style={{display: "inline", fontWeight: "bold"}}>后端框架：</div>*/}
                    {/*    Spring Boot、Spark*/}
                    {/*</div>*/}
                    <div style={{
                        paddingLeft: 0,
                        fontSize: 15,
                        marginTop: 3,
                        marginBottom: 3,
                        lineHeight: "21px"
                    }}>
                        <div style={{display: "inline", fontWeight: "bold"}}>数据存储：</div>
                        MySQL、PostgreSQL、Redis、Doris、StarRocks等OLAP引擎
                    </div>
                    <div style={{
                        paddingLeft: 0,
                        fontSize: 15,
                        marginTop: 3,
                        marginBottom: 3,
                        lineHeight: "21px"
                    }}>
                        <div style={{display: "inline", fontWeight: "bold"}}>中间件：</div>
                        Redis、Kafka、Spark
                    </div>
                </div>

                <Header content={'工作经历'}></Header>
                <div style={{height:10}}></div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "space-between",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 3,
                    marginBottom: 3
                }}>
                    <div style={{display: "flex", flexDirection: "row", alignContent: "center", alignItems: "center"}}>
                        <div style={{fontWeight: "bold", fontSize: 18}}>浙江大应科技-数据分析平台-数据任务调度系统</div>
                    </div>
                    <div style={{fontSize: 13, verticalAlign: "middle"}}><u>2025年04月 - 至今</u></div>
                </div>
                <div style={{fontWeight: "", fontSize: 16}}><b>数据分析平台-数据任务调度开发负责人【Java技术栈】</b></div>
                <div style={{marginTop: 0, marginBottom: 0, paddingLeft: 0, paddingRight: 0}}>
                    <div style={{
                        paddingLeft: 0,
                        fontSize: 16,
                        marginTop: 5,
                        marginBottom: 5,
                        lineHeight: "21px"
                    }}><Block/><b>【0到1主导】调度系统架构升级</b>
                        <div style={{margin:0, paddingLeft:20}}>
                            <div><Block1/><b>背景：</b>原调度模块内嵌于业务系统（基于Quartz近实时触发），存在历史遗留缺陷，运行时频繁生成长字符串导致<b>FullGC风险</b>；结合产品层改造，对调度业务改为T+1的方式执行。<b>全程主导需求分析→架构选型→方案落地→上线发布</b></div>
                            <div><Block1/><b>架构设计：</b>将调度模式从"近实时触发"改为<b>"T+1预生成"</b>，每日22点提前生成并固化次日任务实例；业务系统负责任务注册与元数据同步，调度系统独立执行，通过<b>Kafka</b>异步同步实例状态</div>
                            <div><Block1/><b>难点与解决方案：</b>
                                <div style={{margin:0, paddingLeft:20}}>
                                    <div><Block1/><b>DSL协议化设计：</b>针对独立调度服务无法承载大量业务定制化逻辑的问题，设计任务定义DSL协议，支持日期范围拆分、自定义日历、手动补数等动态场景；通过实例化插件将DSL渲染为真实执行实例数据，实现<b>协议与执行解耦</b></div>
                                    <div><Block1/><b>灰度平滑迁移：</b>实现新老双调度系统并行运行，支持<b>一键切换与容灾回滚</b>，确保迁移过程用户无感知</div>
                                    <div><Block1/><b>分布式一致性保障：</b>在无分布式事务支持下，设计基于<b>最终一致性</b>的任务注册机制。并构建任务信息、执行记录的对账，确保业务系统与调度服务间数据可靠同步</div>
                                    <div><Block1/><b>数据库性能优化：</b>针对任务实例表中大JSON字段导致的扫盘与内存压力，拆分出独立Basic表存储高频查询字段，<b>显著降低IO与CPU负载</b></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "space-between",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 3,
                    marginBottom: 3
                }}>
                    <div style={{display: "flex", flexDirection: "row", alignContent: "center", alignItems: "center"}}>
                        <img style={{height: 35, paddingRight: 15}} src={"./pdd.jpg"}/>
                        <div style={{fontWeight: "bold", fontSize: 18}}>拼多多集团-TEMU基础架构</div>
                    </div>
                    <div style={{fontSize: 13, verticalAlign: "middle"}}><u>2024年04月 - 2025年03月</u></div>
                </div>

                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "space-between",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 3,
                    marginBottom: 3
                }}>
                    <div style={{fontWeight: "", fontSize: 16}}><b>基础架构服务端：监控平台</b></div>
                    {/*<div style={{fontSize: 13, verticalAlign: "middle"}}>Base 上海</div>*/}
                </div>

                <div style={{marginTop: 0, marginBottom: 0, paddingLeft: 0, paddingRight: 0}}>

                    <div style={{
                        paddingLeft: 0,
                        fontSize: 16,
                        marginTop: 5,
                        marginBottom: 5,
                        lineHeight: "21px"
                    }}><Block/><b>监控存储引擎优化【GoLang】：</b>针对时序数据库倒排索引的刷盘瓶颈，设计内存缓存层实现<b>批量刷盘策略</b>，引入LSM-Tree思想优化写入路径，<b>磁盘IO降低约40%</b>
                    </div>

                    <div style={{
                        paddingLeft: 0,
                        fontSize: 16,
                        marginTop: 0,
                        marginBottom: 0
                    }}><Block/><b>数据库集群配置平台</b>
                        <div style={{margin:0, paddingLeft:20}}>
                            <div><Block1/> 践行<b>配置即代码（CaC）</b>理念，配置变更接入GitLab代码仓库，实现版本控制与审计追溯</div>
                            <div><Block1/> 基于Jinja2模板引擎实现<b>配置模板与配置参数分离</b>，模板中定义占位符，运行时动态填充业务数据生成最终配置，提升复用性</div>
                            <div><Block1/> 设计"标签"抽象层屏蔽底层配置细节，运维人员面向标签选择即可，<b>降低操作门槛</b></div>
                        </div>
                    </div>

                    <div style={{
                        paddingLeft: 0,
                        fontSize: 16,
                        marginTop: 5,
                        marginBottom: 5,
                        lineHeight: "21px"
                    }}><Block/><b>监控数据链路管理平台</b>
                        <div style={{margin:0, paddingLeft:20}}>
                            <div><Block1/> 基于持久化树形结构实现<b>数据链路可视化</b>，支持链路变更展示、历史回溯与版本对比</div>
                            <div><Block1/> 打通数据库引擎与Kafka节点配置，实现数据源代理、订阅信息等<b>一站式敏捷配置</b></div>
                        </div>
                    </div>
                </div>
                <div style={{height:10}}></div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "space-between",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 3,
                    marginBottom: 3
                }}>
                    <div style={{display: "flex", flexDirection: "row", alignContent: "center", alignItems: "center"}}>
                        <img style={{height: 35, paddingRight: 15}} src={"./bd1.svg"}/>
                        <div style={{fontWeight: "bold", fontSize: 18}}>字节跳动-电商团队</div>
                    </div>
                    <div style={{fontSize: 13, verticalAlign: "middle"}}><u>2022年03月 - 2024年04月</u></div>
                </div>

                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "space-between",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 3,
                    marginBottom: 3
                }}>
                    <div style={{fontWeight: "", fontSize: 16}}><b>客户端开发工程师</b></div>
                    {/*<div style={{fontSize: 13, verticalAlign: "middle"}}>Base 上海</div>*/}
                </div>

                <div style={{marginTop: 0, marginBottom: 0, paddingLeft: 0}}>
                    <div style={{paddingLeft: 0, fontSize: 16, marginTop: 5, marginBottom: 5}}>
                        <div style={{display: "inline", fontWeight: "bold"}}>业务维度</div>
                        ：负责抖音电商购物车模块业务需求迭代和技术演进
                        <div className='menu_two' style={{
                            paddingLeft: 20
                        }}>
                            <div style={{
                                paddingLeft: 0,
                                fontSize: 16,
                                marginTop: 5,
                                marginBottom: 5,
                                lineHeight: "21px"
                            }}><Block1/><b>从0到1参与开发服务端低代码渲染方案</b>，跨团队制定协议方案；对于原有购物车页面进行代码重构，<br/>
                                适配服务端渲染协议实现根据服务端配置view、actions等配置进行对接渲染和交互效果
                            </div>

                            <div style={{
                                paddingLeft: 0,
                                fontSize: 16,
                                marginTop: 5,
                                marginBottom: 5,
                                lineHeight: "21px"
                            }}><Block1/><b>基于Golang微服务框架</b>，维护服务端Api层业务迭代；
                            </div>

                            <div style={{
                                paddingLeft: 0,
                                fontSize: 16,
                                marginTop: 5,
                                marginBottom: 5,
                                lineHeight: "21px"
                            }}><Block1/>基于自研全局动态化方案长期支持业务和技术迭代；
                            </div>

                            <div style={{
                                paddingLeft: 0,
                                fontSize: 16,
                                marginTop: 5,
                                marginBottom: 5,
                                lineHeight: "21px"
                            }}><Block1/>跟进业务需求迭代，用React、android-native等平台开发视图、交互、前端性能优化等
                            </div>
                        </div>
                    </div>
                    <div style={{paddingLeft: 0, fontSize: 16, marginTop: 5, marginBottom: 5}}>
                        <div style={{display: "inline", fontWeight: "bold"}}>技术维度</div>
                        ：建设自研低代码UI渲染引擎和动态化交互方案
                        <div className='menu_two' style={{
                            paddingLeft: 20
                        }}>
                            <div style={{
                                paddingLeft: 0,
                                fontSize: 16,
                                marginTop: 5,
                                marginBottom: 5,
                                lineHeight: "21px"
                            }}><Block1/>通过自研协议实现高性能UI动态化渲染；减少前端样式改动导致的发版；
                            </div>
                            <div style={{
                                paddingLeft: 0,
                                fontSize: 16,
                                marginTop: 5,
                                marginBottom: 5,
                                lineHeight: "21px"
                            }}><Block1/>通过后端和客户端数据流转协议实现页面交互动态化。使业务逻辑后移到服务端，<br/>大幅减少用户交互逻辑带来的客户端发版
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
