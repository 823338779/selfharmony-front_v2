import Search from "antd/es/input/Search";
import React from "react";

export function TipSearchBar({searchContent}: { searchContent: (value: string, e: any) => void }) {
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <div style={{display: "flex", alignItems: "center"}}>
                <p style={{flexGrow: 0, flexShrink: 0, marginRight: 10}}>Tip搜索：</p>
                <Search
                    placeholder="input search text"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={searchContent}
                />
            </div>
        </div>
    )
}
