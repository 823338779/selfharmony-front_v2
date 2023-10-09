'use client';

import {IReactReaderStyle, ReactReader, ReactReaderStyle} from "react-reader";
import {useRef, useState} from "react";
import {Rendition} from "epubjs";

function updateTheme(rendition: Rendition) {
    const themes = rendition.themes
    switch ('dark') {
        case 'dark': {
            themes.override('color', '#fff')
            themes.override('background', '#000')
            break
        }
    }
}

export default function Sample() {
    const [location, setLocation] = useState<string | number>("epubcfi(/6/18!/4/2[calibre_pb_0]/2[calibre_pb_1]/2/1:0)")

    const rendition = useRef<Rendition | undefined>(undefined)
    // https://sfharmony.shenzhuo.vip/api/statics/c.epub
    return (
        <div
            style={{
                height: "100vh",
                width: "100vw",
            }}>
            <ReactReader
                getRendition={(_rendition) => {

                    updateTheme(_rendition)
                    rendition.current = _rendition
                }}
                readerStyles={darkReaderTheme}
                url="https://react-reader.metabits.no/files/alice.epub"
                epubInitOptions={{
                    openAs: 'epub',
                }}
                title={"AAAAAAAAAAA"}
                epubOptions={{
                    allowPopups: true, // Adds `allow-popups` to sandbox-attribute
                    allowScriptedContent: true, // Adds `allow-scripts` to sandbox-attribute
                }}

                location={location} locationChanged={(o) => {
                // epubInitOptions={{
                //     openAs: 'epub',
                // }}

                console.log(o)
            }}/>
        </div>
    );
}

const darkReaderTheme: IReactReaderStyle = {
    ...ReactReaderStyle,
    arrow: {
        ...ReactReaderStyle.arrow,
        color: 'white',
    },
    arrowHover: {
        ...ReactReaderStyle.arrowHover,
        color: '#ccc',
    },
    readerArea: {
        ...ReactReaderStyle.readerArea,
        backgroundColor: '#000',
        transition: undefined,
    },
    titleArea: {
        ...ReactReaderStyle.titleArea,
        color: '#ccc',
    },
    tocArea: {
        ...ReactReaderStyle.tocArea,
        background: '#111',
    },
    tocButtonExpanded: {
        ...ReactReaderStyle.tocButtonExpanded,
        background: '#222',
    },
    tocButtonBar: {
        ...ReactReaderStyle.tocButtonBar,
        background: '#fff',
    },
    tocButton: {
        ...ReactReaderStyle.tocButton,
        color: 'white',
    },
}