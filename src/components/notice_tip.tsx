import React, {useEffect, useState} from "react";


export function NoticeTip() {
    const [visible, setVisible] = useState(true);

    const onClick = () => {
        setVisible(false)
    }

    return <>
        <div style={{
            backgroundColor: "#fff6ba",
            paddingTop: 3,
            paddingBottom: 3,
            justifyContent: "center",
            marginBottom: 6,
            display: visible ? "flex" : "none",
        }}
             onClick={onClick}
        >
            放过自己 但不是放弃自己
        </div>
    </>
}