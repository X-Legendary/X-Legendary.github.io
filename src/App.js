import "./css/App.css"
import Navbar from "./components/Navbar"
import AboutMe from "./components/AboutMe"
import TitleSection from "./components/TitleSection"

function App() {
    return (
        <div>
            <Navbar></Navbar>
            <TitleSection></TitleSection>
            <AboutMe></AboutMe>
            <i className="mobile" style={{ marginTop: "30px" }}>👀 btw, you're viewing this page on mobile, right? 🤔</i>
        </div>
    )
}

export default App