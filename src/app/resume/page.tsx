"use client";
import React, {useEffect, useRef} from "react";
import {Header} from "@/app/resume/components/resume_component_header";
import {Name} from "@/app/resume/components/Name";

export default function Home() {

    return (<div style={{display: "flex", flexDirection: "column"}}>
            <img style={{height: 10, width: "100%", marginTop: 0}} src={"./blue_color.png"} alt={""}/>
            <div style={{display: "flex", flexDirection: "column", paddingLeft: 50, paddingRight: 50}}>
                <Name></Name>
                <Header content={'教育经历'}></Header>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "space-between",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 3,
                    marginBottom: 3
                }}>
                    <div style={{fontWeight: "bold", fontSize: 14}}>中国计量大学</div>
                    <div style={{fontSize: 13, verticalAlign: "middle"}}>2018年09月 - 2022年06月</div>
                </div>
                <div style={{fontSize: 13}}>计算机科学与技术 本科</div>
                <ul style={{marginTop: 0, marginBottom: 0, paddingLeft: 20}}>
                    <li style={{
                        paddingLeft: 0,
                        fontSize: 13,
                        marginTop: 5,
                        marginBottom: 5
                    }}>校一等奖学金（2018-2019）；其余奖学金多次；通过英语6级
                    </li>
                    <li style={{
                        paddingLeft: 0,
                        fontSize: 13,
                        marginTop: 5,
                        marginBottom: 5
                    }}>获得多种程序设计竞赛（ACM/ICPC）奖项
                    </li>
                </ul>

                <Header content={'ICPC/ACM竞赛经历'}></Header>
                <ul style={{marginTop: 0, marginBottom: 0, paddingLeft: 20}}>
                    <li style={{paddingLeft: 0, fontSize: 13, marginTop: 5, marginBottom: 5}}>本科期间 获得
                        <div style={{display: "inline", fontWeight: "bold"}}>ICPC/ACM竞赛 EC-Final铜奖</div>
                    </li>

                    <li style={{paddingLeft: 0, fontSize: 13, marginTop: 5, marginBottom: 5}}>蓝桥杯竞赛浙江省一等奖；国赛二等奖等
                    </li>
                </ul>

                <Header content={'个人技能'}></Header>
                <ul style={{marginTop: 0, marginBottom: 0, paddingLeft: 20}}>
                    <li style={{paddingLeft: 0, fontSize: 13, marginTop: 5, marginBottom: 5}}>
                        <div style={{display: "inline", fontWeight: "bold"}}>编程语言</div>
                        ：熟悉JAVA/Kotlin、golang；充分理解常用数据结构和算法：树形结构等
                    </li>
                    <li style={{
                        paddingLeft: 0,
                        fontSize: 13,
                        marginTop: 3,
                        marginBottom: 3,
                        lineHeight: "21px"
                    }}>
                        <div style={{display: "inline", fontWeight: "bold"}}>工程技能：</div>
                        熟悉springboot框架、golang服务端开发、Influxdb数据库<br/>熟悉Mysql、React前端框架；了解ElasticSearch、Redis、Kafka消息队列等中间件
                    </li>
                </ul>

                <Header content={'工作经历'}></Header>

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
                        <div style={{fontWeight: "bold",fontSize: 18}}>拼多多集团-TEMU基础架构团队</div>
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
                    <div style={{fontWeight: "", fontSize: 14}}><b>基础架构服务端</b></div>
                    <div style={{fontSize: 13, verticalAlign: "middle"}}>Base 上海</div>
                </div>

                <ul style={{marginTop: 0, marginBottom: 0, paddingLeft: 20, paddingRight: 0}}>

                    <li style={{
                        paddingLeft: 0,
                        fontSize: 14,
                        marginTop: 5,
                        marginBottom: 5,
                        lineHeight: "21px"
                    }}><b>建设监控链路管理模块</b>：利用可持久化树形结构，在SpringBoot服务框架下，快捷配置数据源代理、<br/>kafka节点、数据库订阅信息等能力，实现监控链路可修改、可回溯的管理效果
                    </li>

                    <li style={{
                        paddingLeft: 0,
                        fontSize: 14,
                        marginTop: 5,
                        marginBottom: 5,
                        lineHeight: "21px"
                    }}><b>优化数据库存储引擎</b>：优化监控时序数据库influxdb倒排索引持久化策略；<b>为倒排索引增加内存缓存模块</b><br/>减少倒排索引刷盘时带来的磁盘IO开销
                    </li>

                    <li style={{
                        paddingLeft: 0,
                        fontSize: 14,
                        marginTop: 5,
                        marginBottom: 5,
                        lineHeight: "21px"
                    }}><b>集群配置策略的能力</b>：通过web端，来维护数据库集群的相关配置；通过给集群、宿主机维度添加标签来映射目标单位具备的配置值；使用jinja2语法做配置信息渲染生成整合、生成数据库设备所需配置文件
                    </li>

                    <li style={{
                        paddingLeft: 0,
                        fontSize: 14,
                        marginTop: 5,
                        marginBottom: 5,
                        lineHeight: "21px"
                    }}><b>实现集群运维脚本</b>：对现有的ansible运维脚本进行转义，通过重写的python脚本，实现插件化远程服务器运维操作
                    </li>
                </ul>

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
                    <div style={{fontWeight: "", fontSize: 14}}><b>客户端开发工程师</b></div>
                    <div style={{fontSize: 13, verticalAlign: "middle"}}>Base 上海</div>
                </div>

                <ul style={{marginTop: 0, marginBottom: 0, paddingLeft: 20}}>
                    <li style={{paddingLeft: 0, fontSize: 14, marginTop: 5, marginBottom: 5}}>
                        <div style={{display: "inline", fontWeight: "bold"}}>业务维度</div>
                        ：负责抖音电商购物车模块业务需求迭代和技术演进
                        <ul className='menu_two' style={{
                            paddingLeft: 20
                        }}>
                            <li style={{
                                paddingLeft: 0,
                                fontSize: 14,
                                marginTop: 5,
                                marginBottom: 5,
                                lineHeight: "21px"
                            }}><b>从0到1参与开发服务端低代码渲染方案</b>，跨团队制定协议方案；对于原有购物车页面进行代码重构，<br/>
                                适配服务端渲染协议实现根据服务端配置view、actions等配置进行对接渲染和交互效果
                            </li>

                            <li style={{
                                paddingLeft: 0,
                                fontSize: 14,
                                marginTop: 5,
                                marginBottom: 5,
                                lineHeight: "21px"
                            }}><b>基于Golang微服务框架</b>，维护服务端Api层业务迭代；
                            </li>

                            <li style={{
                                paddingLeft: 0,
                                fontSize: 14,
                                marginTop: 5,
                                marginBottom: 5,
                                lineHeight: "21px"
                            }}>基于自研全局动态化方案长期支持业务和技术迭代；
                            </li>

                            <li style={{
                                paddingLeft: 0,
                                fontSize: 14,
                                marginTop: 5,
                                marginBottom: 5,
                                lineHeight: "21px"
                            }}>跟进业务需求迭代，用React、android-native等平台开发视图、交互、前端性能优化等
                            </li>
                        </ul>
                    </li>
                    <li style={{paddingLeft: 0, fontSize: 14, marginTop: 5, marginBottom: 5}}>
                        <div style={{display: "inline", fontWeight: "bold"}}>技术维度</div>
                        ：建设自研低代码UI渲染引擎和动态化交互方案
                        <ul className='menu_two' style={{
                            paddingLeft: 20
                        }}>
                            <li style={{
                                paddingLeft: 0,
                                fontSize: 14,
                                marginTop: 5,
                                marginBottom: 5,
                                lineHeight: "21px"
                            }}>通过自研协议实现高性能UI动态化渲染；减少前端样式改动导致的发版；
                            </li>
                            <li style={{
                                paddingLeft: 0,
                                fontSize: 14,
                                marginTop: 5,
                                marginBottom: 5,
                                lineHeight: "21px"
                            }}>通过后端和客户端数据流转协议实现页面交互动态化。使业务逻辑后移到服务端，<br/>大幅减少用户交互逻辑带来的客户端发版
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}
