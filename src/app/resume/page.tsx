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


                <Header content={'个人优势'}></Header>
                <div style={{
                    paddingLeft: 0,
                    fontSize: 15,
                    marginTop: 6,
                    marginBottom: 6,
                    lineHeight: "21px"
                }}>
                    具备多种业务场景下的问题分析与解决经验，能够结合业务需求进行<b>系统架构设计</b>，提供<b>业务系统层面的整体解决方案</b>。
                </div>

                <Header content={'个人技能'}></Header>
                <div style={{marginTop: 0, marginBottom: 0, paddingLeft: 0}}>
                    <div style={{
                        paddingLeft: 0,
                        fontSize: 15,
                        marginTop: 6,
                        marginBottom: 6,
                        lineHeight: "21px"
                    }}>
                        <div style={{display: "inline", fontWeight: "bold"}}>编程语言：</div>
                        熟练使用Java、GoLang
                    </div>
                    <div style={{
                        paddingLeft: 0,
                        fontSize: 15,
                        marginTop: 6,
                        marginBottom: 6,
                        lineHeight: "21px"
                    }}>
                        <div style={{display: "inline", fontWeight: "bold"}}>开发组件：</div>
                        Redis、Kafka；MySQL、PostgreSQL、Doris、StarRocks等OLAP引擎
                    </div>
                    <div style={{
                        paddingLeft: 0,
                        fontSize: 15,
                        marginTop: 6,
                        marginBottom: 6,
                        lineHeight: "21px"
                    }}>
                        <div style={{display: "inline", fontWeight: "bold"}}>大数据技术：</div>
                        具有Flink、Spark、Hive使用经验
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
                        <img style={{height: 35, paddingRight: 15}} src={"./aloudata.png"} alt={""}/>
                        <div style={{fontWeight: "bold", fontSize: 18}}>浙江大应科技-数据分析平台</div>
                    </div>
                    <div style={{fontSize: 13, verticalAlign: "middle"}}><u>2025年04月 - 至今</u></div>
                </div>
                <div style={{fontWeight: "", fontSize: 16}}><b>JAVA开发/系统架构设计</b></div>
                <div style={{marginTop: 0, marginBottom: 0, paddingLeft: 0, paddingRight: 0}}>
                    <div style={{
                        paddingLeft: 0,
                        fontSize: 16,
                        marginTop: 5,
                        marginBottom: 5,
                        lineHeight: "21px"
                    }}><Block/><b>大数据Agent方案</b>
                        <div style={{margin:0, paddingLeft:20}}>
                            <div><Block1/>设计以<b>Git为Agent侧与平台引擎侧隔离边界</b>的方案，通过符合dbt协议的YAML文件维护业务模型定义，作为平台指标、维度、数据集的定义来源；后续数据查询、分析操作均以这些定义为基准，实现<b>yml文件即语义</b></div>
                            <div><Block1/>在<b>理解dbt、MetricFlow开源代码实现的基础上</b>，围绕<b>数据建模、SQL生成等能力建设</b>开展<b>二次开发</b>，具体包括：
                                <div style={{margin:0, paddingLeft:20}}>
                                    <div>1. 去除运行时本地文件依赖，改为从业务数据库读取模型内容，并封装为<b>无状态Python服务</b></div>
                                    <div>2. 扩展<b>维度值映射</b>业务定义，在查询SQL中直接<b>关联维度值映射表</b>，将数值编码等原始维度值转换为对应的实际业务内容</div>
                                    <div>3. 支持更完备的多通路设计，支持不同原表上的指标<b>各自指定维度关联路径</b>进行查询</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{
                        paddingLeft: 0,
                        fontSize: 16,
                        marginTop: 5,
                        marginBottom: 5,
                        lineHeight: "21px"
                    }}><Block/><b>调度系统架构升级</b>
                        <div style={{margin:0, paddingLeft:20}}>
                            <div><Block1/><b>主导需求分析、架构选型至上线发布</b>，将内嵌于业务系统的Quartz调度模块拆分为独立服务；结合产品改造，采用<b>T+1任务实例预生成</b>，通过Kafka异步同步执行状态</div>
                            <div><Block1/>设计<b>任务定义DSL与实例化插件</b>，支持日期范围拆分、自定义日历和手动补数，解耦业务任务定义与调度执行</div>
                            <div><Block1/>设计基于<b>最终一致性</b>的任务注册及任务信息、执行记录对账机制；支持新旧系统并行、灰度切换与容灾回滚，保障迁移与跨系统数据同步</div>
                        </div>
                    </div>
                    <div style={{
                        paddingLeft: 0,
                        fontSize: 16,
                        marginTop: 5,
                        marginBottom: 5,
                        lineHeight: "21px"
                    }}><Block/><b>数据物化与Spark构建</b>
                        <div style={{margin:0, paddingLeft:20}}>
                            <div><Block1/>基于指标、维度、筛选配置生成<b>SQL模板与OLAP物化表</b>；在调度实例生成阶段计算动态值，执行阶段渲染补数SQL、替换占位符，通过<b>INSERT OVERWRITE</b>写入物化表</div>
                            <div><Block1/>提供<b>Spark数据构建能力</b>，支持大体量数据的物化构建</div>
                            <div><Block1/>支持数据物化场景的<b>业务流量回放</b>，重放客户已有的物化任务，在版本发布前对比<b>新旧版本物化补数结果的一致性</b></div>
                        </div>
                    </div>
                    <div style={{
                        paddingLeft: 0,
                        fontSize: 16,
                        marginTop: 5,
                        marginBottom: 5,
                        lineHeight: "21px"
                    }}><Block/><b>通用批量异步任务中台</b>
                        <div style={{margin:0, paddingLeft:20}}>
                            <div><Block1/>设计由<b>集群实例定期从数据库获取任务并执行</b>的异步任务中台；抽象统一的任务接入与执行能力，由业务遵循中台约定接入，减少业务专用适配逻辑</div>
                        </div>
                    </div>
                    <div style={{
                        paddingLeft: 0,
                        fontSize: 16,
                        marginTop: 5,
                        marginBottom: 5,
                        lineHeight: "21px"
                    }}><Block/><b>性能优化</b>
                        <div style={{margin:0, paddingLeft:20}}>
                            <div><Block1/><b>PostgreSQL缓存与大表优化：</b>针对任务实例表中大JSON字段带来的读取压力，将高频查询字段拆至独立Basic表，降低查询IO与CPU负载</div>
                            <div><Block1/><b>维度映射查询优化：</b>将维度值替换从Java内存处理下沉为<b>维度映射表与SQL JOIN</b>，支持自定义映射规则，减少应用侧CPU与内存开销</div>
                        </div>
                    </div>
                </div>
                <div style={{height:20}}></div>

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
                    }}><Block/><b>InfluxDB引擎优化【GoLang】：</b>针对时序数据库倒排索引的刷盘瓶颈，设计内存缓存层实现<b>批量刷盘策略</b>，引入LSM-Tree思想优化写入路径，<b>磁盘IO降低约40%</b>
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
                <div style={{height:20}}></div>
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
