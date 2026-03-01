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
                        <b>ICPC/ACM竞赛
                        EC-Final铜奖；蓝桥杯竞赛浙江省一等奖；国赛二等奖等</b>
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
                <div style={{fontWeight: "", fontSize: 16}}><b>数据分析平台：数据任务调度负责人</b></div>
                <div style={{marginTop: 0, marginBottom: 0, paddingLeft: 0, paddingRight: 0}}>
                    <div style={{
                        paddingLeft: 0,
                        fontSize: 16,
                        marginTop: 5,
                        marginBottom: 5,
                        lineHeight: "21px"
                    }}><Block/><b>主导调度系统架构升级【开发语言Java】</b>
                        <div style={{margin:0, paddingLeft:20}}>
                            <div><Block1/><b>业务兼容与迁移：</b>设计DSL协议化SQL动态渲染机制，支持按日期拆分任务实例、自定义日历、手动补数等复杂业务场景；实现从内部调度系统到独立调度平台的灰度平滑迁移，确保方案级任务双向迁移的幂等性和最终一致性</div>
                            <div><Block1/><b>多引擎适配：</b>抽象调度执行层，适配Hologres、Doris、StarRocks等多种物理引擎的事务机制差异（如Hologres需显式BEGIN/COMMIT）</div>
                            <div><Block1/><b>跨任务数据依赖（Cube场景）：</b>利用业务时间、工作流实例ID等贯穿字段动态生成临时表名，实现上下游任务间临时表数据传递</div>
                            <div><Block1/><b>状态同步与一致性：</b>基于Kafka实现实例状态同步与运行信息同步，保证系统间最终一致性；设计审计机制确保数据可追溯</div>
                            <div><Block1/><b>性能优化：</b>针对PostgreSQL中超长TaskInstance表导致的IO和内存负载问题，拆分出TaskInstanceBasic表并冗余业务字段，减少多表联查，显著降低数据库压力</div>
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
                    <div style={{fontSize: 13, verticalAlign: "middle"}}>Base 上海</div>
                </div>

                <div style={{marginTop: 0, marginBottom: 0, paddingLeft: 0, paddingRight: 0}}>

                    <div style={{
                        paddingLeft: 0,
                        fontSize: 16,
                        marginTop: 5,
                        marginBottom: 5,
                        lineHeight: "21px"
                    }}><Block/><b>优化监控数据存储引擎【开发语言GoLang】</b>优化数据库引擎中倒排索引部分的刷盘策略，<span style={{paddingLeft:0}}>为原有的倒排索引建立内存维度的缓存，实现倒排索引数据批量刷盘，有效减少磁盘平均IO负载</span>
                    </div>

                    <div style={{
                        paddingLeft: 0,
                        fontSize: 16,
                        marginTop: 0,
                        marginBottom: 0
                    }}><Block/><b>数据库集群配置平台</b>
                        <div style={{margin:0, paddingLeft:20}}>
                            <div><Block1/> 通过配置平台实现集群配置变更，平台上的配置信息接入代码仓库，配置文件的内容同步到gitlab</div>
                            <div><Block1/> 使用jinja2的语法提供配置文件的模板，支持配置模板和配置数据之间动态绑定</div>
                            <div><Block1/> 设计"标签"的概念代替具体配置文件，使用中面向标签选择使用即可，有效降低操作门槛</div>
                        </div>
                        {/*来维护数据库集群的相关配置；通过给集群、宿主机维度添加标签来映射目标单位具备的配置值；使用jinja2语法做配置信息渲染生成整合、生成数据库设备所需配置文件*/}
                    </div>

                    <div style={{
                        paddingLeft: 0,
                        fontSize: 16,
                        marginTop: 5,
                        marginBottom: 5,
                        lineHeight: "21px"
                    }}><Block/><b>建设数据链路管理功能：</b>
                        {/*利用持久化树形结构，在管理平台上打通数据库引擎、kafka节点之间数据流订阅配置；实现数据源代理、数据库订阅信息等能力敏捷配置，实现监控链路可修改、可回溯的管理效果*/}
                        <div style={{margin:0, paddingLeft:20}}>
                            <div><Block1/> 利用持久化树形结构，在管理平台上提供数据链路的展示和变更操作，实现监控链路可修改、<br/><span>可回溯的管理效果</span></div>
                            <div><Block1/> 打通数据库引擎、kafka节点配置，实现数据源代理、数据库订阅信息等能力敏捷配置</div>
                        </div>
                    </div>

                    {/*<div style={{*/}
                    {/*    paddingLeft: 0,*/}
                    {/*    fontSize: 16,*/}
                    {/*    marginTop: 5,*/}
                    {/*    marginBottom: 5,*/}
                    {/*    lineHeight: "21px"*/}
                    {/*}}><Block/><b>集群运维脚本：</b>对现有的ansible运维脚本进行转义，通过重写的python脚本，实现插件化远程服务器运维操作*/}
                    {/*</div>*/}
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
                    <div style={{fontSize: 13, verticalAlign: "middle"}}>Base 上海</div>
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
