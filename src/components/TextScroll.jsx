import "../css/TextScroll.css"

function TextScroll({ text, centered }) {
    const style = centered ? { textAlign: "center", margin: "auto", display: "flex", alignItems: "center", justifyContent: "center" } : {}
    return (
        <div className="scroller" style={style}>
            <span>
            {text[0]}<br/>
            {text[1]}<br/>
            {text[2]}<br/>
            {text[3]}
            </span>
      </div>
    )
}

export default TextScroll