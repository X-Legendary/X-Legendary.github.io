import Navbar from "../components/Navbar"
import TitleSection from "../components/TitleSection"

function NotFound() {
    return (
        <div>
            <Navbar></Navbar>
            <TitleSection></TitleSection>
            <div style={{ textAlign: "center" }}>
                <p><b>404</b> - Not Found</p>
                <p>It seems you got lost. Head back to the home page?</p>
                <a href="/">
                    <button>Home</button>
                </a>
            </div>
        </div>
    )
}

export default NotFound
