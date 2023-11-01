// 'use client';
//
// import {IReactReaderStyle, ReactReader, ReactReaderStyle} from "react-reader";
// import {useRef, useState} from "react";
// import {Rendition} from "epubjs";
//
// function updateTheme(rendition: Rendition) {
//     const themes = rendition.themes
//     switch ('dark') {
//         case 'dark': {
//             themes.override('color', '#cccccc')
//             themes.override('background', '#000', true)
//             break
//         }
//     }
// }
//
// export default function Sample() {
//     const [location, setLocation] = useState<string | number>("epubcfi(/6/18!/4/2[calibre_pb_0]/2[calibre_pb_1]/2/1:0)")
//
//     const rendition = useRef<Rendition | undefined>(undefined)
//     return (
//         <div
//             style={{
//                 height: "100vh",
//                 width: "100vw",
//             }}>
//             <ReactReader
//                 getRendition={(_rendition) => {
//                     updateTheme(_rendition)
//                     rendition.current = _rendition
//                 }}
//                 readerStyles={darkReaderTheme}
//                 url="https://react-reader.metabits.no/files/alice.epub"
//                 title={"AAAAAAAAAAA"}
//                 showToc={false}
//                 location={location}
//                 locationChanged={(o) => {
//                     setLocation(o)
//                 console.log(o)
//             }}/>
//         </div>
//     );
// }
//
// const darkReaderTheme: IReactReaderStyle = {
//     ...ReactReaderStyle,
//     container: {
//         ...ReactReaderStyle.container,
//         padding: 0
//     },
//     readerArea: {
//         ...ReactReaderStyle.readerArea,
//         backgroundColor: '#000',
//         transition: undefined,
//     },
//     containerExpanded: {
//         ...ReactReaderStyle.containerExpanded,
//     },
//     titleArea: {
//         ...ReactReaderStyle.titleArea,
//         color: '#cccccc',
//     },
//     reader: {
//         ...ReactReaderStyle.reader,
//         // backgroundColor: "#f0f",
//         inset: "50px 0 0 0"
//     },
//     prev: {
//         ...ReactReaderStyle.prev,
//         backgroundColor: "rgba(255,0,0,0)",
//         width: "30%",
//         height: "100%",
//         top: 0,
//         margin: 0,
//         padding: 0,
//         color: "rgba(255,255,255,0.2)",
//         textAlign: "left"
//     },
//     next: {
//         ...ReactReaderStyle.next,
//         backgroundColor: "rgba(255,0,0,0)",
//         width: "30%",
//         height: "100%",
//         top: 0,
//         margin: 0,
//         padding: 0,
//         color: "rgba(255,255,255,0.2)",
//         textAlign: "right"
//     }
//     // tocArea: {
//     //     ...ReactReaderStyle.tocArea,
//     //     background: '#111',
//     // },
//     // tocButtonExpanded: {
//     //     ...ReactReaderStyle.tocButtonExpanded,
//     //     background: '#222',
//     // },
//     // tocButtonBar: {
//     //     ...ReactReaderStyle.tocButtonBar,
//     //     background: '#fff',
//     // },
//     // tocButton: {
//     //     ...ReactReaderStyle.tocButton,
//     //     color: 'white',
//     // },
// }