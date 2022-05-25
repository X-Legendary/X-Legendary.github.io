import { useState } from "react"
import "../css/Navbar.css"

function Navbar() {
    const [state, setState] = useState("menu")

    function handleClick() {
        const newState = (state === "menu active") ? "menu" : "menu active"
        setState(newState)
    }

    return (
        <div id="navbarContainer">
            <div id="navbarMain">
                <h1 className="disable-select" id="navbarTitle"><a href="/">X-Legendary</a></h1>
                <button className="toggle disable-select" onClick={() => handleClick()}>MENU</button>
            </div>
            <div className={state} id="menu">
                <ul>
                    <li><a className="disable-select" onClick={() => handleClick()} href="/">Home</a></li>
                    <li><a className="disable-select" onClick={() => handleClick()} href="/#aboutMe">About</a></li>
                    <li><a className="disable-select" onClick={() => handleClick()} href="/contact">Contact</a></li>
                    <li><a className="disable-select" onClick={() => handleClick()} href="/projects">Projects</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar