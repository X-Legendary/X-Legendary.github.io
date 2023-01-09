import "../css/TitleSection.css"
import TextScroll from "./TextScroll"
import IconImage from "../assets/images/X-Legendary.png"

function TitleSection() {
    return (
        <section className="parallax" id="titleSection">
            <img src={IconImage} alt="X-Legendary" className="icon"></img>
            <h1>X-Legendary</h1>
            <TextScroll text={["Programmer", "Game Developer", "Scripter", "CS:GO Tryhard"]} centered></TextScroll>
        </section>
    )
}

export default TitleSection
