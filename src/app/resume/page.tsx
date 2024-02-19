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
                        <div style={{display: "inline", fontWeight: "bold"}}>ICPC/ACM竞赛 银奖；EC-Final铜奖；蓝桥杯竞赛浙江省一等奖；国赛二等奖等；</div>
                    </li>

                    <li style={{paddingLeft: 0, fontSize: 13, marginTop: 5, marginBottom: 5}}>字节跳动举办
                        <div style={{display: "inline", fontWeight: "bold"}}>ByteCamp程序设计竞赛</div>
                        员工榜团队排名第四；（2023/8）
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
                        <div style={{display: "inline", fontWeight: "bold"}}>工程能力</div>
                        ：熟悉InnoDB运行原理；golang服务端开发、ES、Redis等中间件；
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
                    <div style={{fontWeight: "bold"}}>字节跳动-抖音电商团队</div>
                    <div style={{fontSize: 13, verticalAlign: "middle"}}>2022年08月 - 至今</div>
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
                    <div style={{fontSize: 13, verticalAlign: "middle"}}>工作地 上海</div>
                </div>

                <ul style={{marginTop: 0, marginBottom: 0, paddingLeft: 20}}>
                    <li style={{paddingLeft: 0, fontSize: 13, marginTop: 5, marginBottom: 5}}>
                        <div style={{display: "inline", fontWeight: "bold"}}>业务维度</div>
                        ：负责电商相关业务需求迭代和技术演进
                        <ul className='menu_two' style={{
                            paddingLeft: 20
                        }}>
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


                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "space-between",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 3,
                    marginBottom: 3
                }}>
                    <div style={{fontWeight: "bold"}}>字节跳动-抖音盒子团队（实习）</div>
                    <div style={{fontSize: 13, verticalAlign: "middle"}}>2022年03月 - 2022年8月</div>
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
                    <div style={{fontSize: 13, verticalAlign: "middle"}}>工作地 上海</div>
                </div>

                <ul style={{marginTop: 0, marginBottom: 0, paddingLeft: 20}}>

                    <li style={{
                        paddingLeft: 0,
                        fontSize: 13,
                        marginTop: 5,
                        marginBottom: 5
                    }}>维护电商子页面，支持业务迭代；
                    </li>
                    <li style={{
                        paddingLeft: 0,
                        fontSize: 13,
                        marginTop: 5,
                        marginBottom: 5
                    }}>建设线上监控和报警等机制；
                    </li>
                </ul>


                <Header content={'项目经历'}></Header>

                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "space-between",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 3,
                    marginBottom: 3
                }}>
                    <div style={{fontWeight: "bold"}}>UI渲染动态化方案</div>
                </div>

                <ul style={{marginTop: 0, marginBottom: 0, paddingLeft: 20}}>
                    <li style={{paddingLeft: 0, fontSize: 13, marginTop: 5, marginBottom: 5}}>
                        <div style={{display: "inline", fontWeight: "bold"}}>初衷</div>
                        ：减少UI变更带来的业务迭代发版成本，实现UI视图块级别的动态化渲染，提升动态渲染性能。
                    </li>
                    <li style={{paddingLeft: 0, fontSize: 13, marginTop: 5, marginBottom: 5}}>
                        <div style={{display: "inline", fontWeight: "bold"}}>特点</div>
                        <ul className='menu_two' style={{
                            paddingLeft: 20
                        }}>
                            <li style={{
                                paddingLeft: 0,
                                fontSize: 13,
                                marginTop: 5,
                                marginBottom: 5
                            }}>基于自研协议来进行视图信息描述，实现动态化视图；
                            </li>
                            <li style={{
                                paddingLeft: 0,
                                fontSize: 13,
                                marginTop: 5,
                                marginBottom: 5
                            }}>通过前端代码进行协议的解析和渲染；
                            </li>
                            <li style={{
                                paddingLeft: 0,
                                fontSize: 13,
                                marginTop: 5,
                                marginBottom: 5
                            }}>显著减少前端UI代码量，提高需求迭代效率；
                            </li>
                        </ul>
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
                    <div style={{fontWeight: "bold"}}>页面级别动态化方案</div>
                </div>

                <ul style={{marginTop: 0, marginBottom: 0, paddingLeft: 20}}>
                    <li style={{paddingLeft: 0, fontSize: 13, marginTop: 5, marginBottom: 5}}>
                        <div style={{display: "inline", fontWeight: "bold"}}>初衷</div>
                        ：为了实现页面级别的动态化，进一步减少交互逻辑和UI渲染带来的业务发版；
                    </li>
                    <li style={{paddingLeft: 0, fontSize: 13, marginTop: 5, marginBottom: 15}}>
                        <div style={{display: "inline", fontWeight: "bold"}}>特点</div>
                        <ul className='menu_two' style={{
                            paddingLeft: 20
                        }}>
                            <li style={{
                                paddingLeft: 0,
                                fontSize: 13,
                                marginTop: 5,
                                marginBottom: 5
                            }}>通过数据交互协议实现页面样式和交互效果；
                            </li>
                            <li style={{
                                paddingLeft: 0,
                                fontSize: 13,
                                marginTop: 5,
                                marginBottom: 5
                            }}>
                                减少前端代码量，通过配置协议的方式实现页面动态化；
                            </li>
                            <li style={{
                                paddingLeft: 0,
                                fontSize: 13,
                                marginTop: 5,
                                marginBottom: 5
                            }}>
                                服务端具有更大的业务掌控力，简化业务迭代复杂度；
                            </li>
                        </ul>
                    </li>
                </ul>


                {/*<div style={{*/}
                {/*    display: "flex",*/}
                {/*    flexDirection: "column",*/}
                {/*    marginTop: 3,*/}
                {/*    marginBottom: 3*/}
                {/*}}>*/}
                {/*    <div style={{fontWeight: "bold"}}>负责电商子页面技术和需求迭代</div>*/}
                {/*    <div style={{fontSize: 13, marginTop: 5}}>业务负责人</div>*/}
                {/*</div>*/}

                {/*<ul style={{marginTop: 0, marginBottom: 0, paddingLeft: 20}}>*/}
                {/*    <li style={{paddingLeft: 0, fontSize: 13, marginTop: 5, marginBottom: 5}}>*/}
                {/*        基于渲染和页面级别动态化方案，实现电商业务;*/}
                {/*    </li>*/}
                {/*    <li style={{paddingLeft: 0, fontSize: 13, marginTop: 5, marginBottom: 5}}>*/}
                {/*        基于动态化方案长期支持业务迭代；*/}
                {/*    </li>*/}
                {/*    <li style={{paddingLeft: 0, fontSize: 13, marginTop: 5, marginBottom: 5}}>*/}
                {/*        优化用户体验和页面性能；*/}
                {/*    </li>*/}

                {/*</ul>*/}

            </div>
        </div>
    )
}

/**
 * 初衷：减少UI变更带来的业务迭代发版成本，实现UI视图块级别的动态化渲染。
 * 特点：
 * 基于自设计的协议来进行视图信息描述，实现动态化视图；
 * 通过客户端代码进行协议的解析和渲染；
 * 显著减少前端UI代码量，提高需求迭代效率；
 */