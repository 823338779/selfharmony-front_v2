export function Header({content}: { content: string }) {
    const color = "#009bd3";
    return <>
        <div style={{display: "flex", flexDirection: "column", marginBottom:6, marginTop:5}}>
            <div style={{color: color, fontWeight: "bold", marginBottom:3}}>{content}</div>
            <img src={"./blue_color.png"} style={{width: "100%", height: "2.1px"}} />
            {/*<div style={{width: "100%", height: "2.1px", backgroundColor: color}}></div>*/}
        </div>
    </>
}