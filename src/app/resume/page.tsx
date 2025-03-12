"use client";
import React, {useEffect, useRef} from "react";
import {Header} from "@/app/resume/components/resume_component_header";
import {Name} from "@/app/resume/components/Name";

export default function Home() {

    return (<div style={{display:"flex", flexDirection:"column"}}>
            <img style={{height: 10, width: "100%", marginTop:0}} src={"./blue_color.png"} alt={""}/>
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
                    <div style={{fontWeight: "bold", fontSize:14}}>中国计量大学</div>
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
                        ：熟悉JAVA/Kotlin、golang；充分理解常用数据结构和算法
                    </li>
                    <li style={{
                        paddingLeft: 0,
                        fontSize: 13,
                        marginTop: 3,
                        marginBottom: 3
                    }}>
                        <div style={{display: "inline", fontWeight: "bold"}}>工程技能：</div>
                        熟悉springboot框架、dubbo分布式rpc；golang服务端开发、ES、Redis等中间件；
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
                    <div style={{display:"flex", flexDirection:"row", alignContent:"center", alignItems:"center"}}>
                        <img style={{height:35, paddingRight:15}} src={"./pdd.jpg"}/>
                        <div style={{fontWeight: "bold"}}>拼多多集团-TEMU跨境电商-基础架构团队</div>
                    </div>
                    <div style={{fontSize: 13, verticalAlign: "middle"}}>2024年04月 - 2025年03月</div>
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
                    <div style={{fontWeight: "", fontSize: 14}}>基础架构服务端</div>
                    <div style={{fontSize: 13, verticalAlign: "middle"}}>Base 上海</div>
                </div>

                <ul style={{marginTop: 0, marginBottom: 0, paddingLeft: 20, paddingRight: 0}}>

                    <li style={{
                        paddingLeft: 0,
                        fontSize: 13,
                        marginTop: 5,
                        marginBottom: 5
                    }}>建设监控链路管理模块：利用可持久化树形结构，在SpringBoot服务框架下，快捷配置数据源代理、kafka节点、数据库订阅信息等能力<br/>实现监控链路可修改改、可回溯的管理效果
                    </li>

                    <li style={{
                        paddingLeft: 0,
                        fontSize: 13,
                        marginTop: 5,
                        marginBottom: 5
                    }}>优化数据库存储：对于监控时序数据库，优化内部倒排索引持久化策略；为倒排索引更新增加内存缓存模块，减少倒排索引刷盘时带来的磁盘IO开销
                    </li>

                    <li style={{
                        paddingLeft: 0,
                        fontSize: 13,
                        marginTop: 5,
                        marginBottom: 5
                    }}>对现有的ansible运维脚本进行转义，通过重写的python脚本，实现独立于ansible框架的插件化运维，实现维护远程服务器
                    </li>

                    <li style={{
                        paddingLeft: 0,
                        fontSize: 13,
                        marginTop: 5,
                        marginBottom: 5
                    }}>新指集群配置策略的能力：通过web端，来维护数据库集群的相关配置；通过给集群的维度、服务器的维度打标签，再为标签配置独有的配置信息，实现配置动态化调整的效果，达到通过web端来维护多份配置信息并且进行整合、覆盖等场景
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
                    <div style={{display:"flex", flexDirection:"row", alignContent:"center", alignItems:"center"}}>
                        <img style={{height:35, paddingRight:15}} src={"./bd1.svg"}/>
                        <div style={{fontWeight: "bold"}}>字节跳动-电商团队</div>
                    </div>
                    <div style={{fontSize: 13, verticalAlign: "middle"}}>2022年03月 - 2024年04月</div>
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
                    <div style={{fontWeight: "", fontSize: 14}}>客户端开发工程师</div>
                    <div style={{fontSize: 13, verticalAlign: "middle"}}>Base 上海</div>
                </div>

                <ul style={{marginTop: 0, marginBottom: 0, paddingLeft: 20}}>
                    <li style={{paddingLeft: 0, fontSize: 13, marginTop: 5, marginBottom: 5}}>
                        <div style={{display: "inline", fontWeight: "bold"}}>业务维度</div>
                        ：负责抖音电商购物车模块业务需求迭代和技术演进
                        <ul className='menu_two' style={{
                            paddingLeft: 20
                        }}>
                            <li style={{
                                paddingLeft: 0,
                                fontSize: 13,
                                marginTop: 5,
                                marginBottom: 5
                            }}>从零到一参与开发服务端动态渲染方案，跨团队制定协议方案，
                            </li>

                            <li style={{
                                paddingLeft: 0,
                                fontSize: 13,
                                marginTop: 5,
                                marginBottom: 5
                            }}>对整体页面重构，接入全局前端动态化方案，大幅提升业务迭代效率；
                            </li>
                            <li style={{
                                paddingLeft: 0,
                                fontSize: 13,
                                marginTop: 5,
                                marginBottom: 5
                            }}>基于自研全局动态化方案长期支持业务和技术迭代；
                            </li>
                            <li style={{
                                paddingLeft: 0,
                                fontSize: 13,
                                marginTop: 5,
                                marginBottom: 5
                            }}>基于Golang微服务维护BFF层相关业务迭代；
                            </li>
                            <li style={{
                                paddingLeft: 0,
                                fontSize: 13,
                                marginTop: 5,
                                marginBottom: 5
                            }}>通过技术改造优化用户体验和前端性能；
                            </li>
                        </ul>
                    </li>
                    <li style={{paddingLeft: 0, fontSize: 13, marginTop: 5, marginBottom: 5}}>
                        <div style={{display: "inline", fontWeight: "bold"}}>技术维度</div>
                        ：建设自研UI渲染引擎和动态化交互方案
                        <ul className='menu_two' style={{
                            paddingLeft: 20
                        }}>
                            <li style={{
                                paddingLeft: 0,
                                fontSize: 13,
                                marginTop: 5,
                                marginBottom: 5
                            }}>通过自研协议实现高性能UI动态化渲染；减少前端样式改动导致的发版；
                            </li>
                            <li style={{
                                paddingLeft: 0,
                                fontSize: 13,
                                marginTop: 5,
                                marginBottom: 5
                            }}>通过后端和客户端数据流转协议实现页面交互动态化。使业务逻辑后移到服务端，减少用户交互逻辑带来的客户端发版
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}
