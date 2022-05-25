import Navbar from "../components/Navbar"
import TitleSection from "../components/TitleSection"

function Contact() {
    return (
        <div>
            <Navbar></Navbar>
            <TitleSection></TitleSection>
            <div id="contactInfo">
                <p>👋 Hi, I'm <b>X-Legendary</b></p>
                <p>You can contact me through many platforms, but the quickest response from me would be from Discord.<br></br>
                Below is a list of all socials I have opened to the public.</p>
                <section id="socialMedia">
                    <a target="_blank" href="https://discord.com/users/613386247708344322" style={{ display: "inline-block" }}>
                        <button>Discord</button>
                    </a>
                    <a target="_blank" href="https://www.roblox.com/users/718743702/profile" style={{ display: "inline-block" }}>
                        <button>Roblox</button>
                    </a>
                    <a target="_blank" href="https://devforum.roblox.com/new-message?username=X7legendary&title=Contact+Me&body=Describe+why+are+you+contacting+me+here%2c+or+just+drop+by+and+say+hi!" style={{ display: "inline-block" }}>
                        <button>Roblox DevForum</button>
                    </a>
                    <a target="_blank" href="https://guilded.gg/profile/mGMEREL4" style={{ display: "inline-block" }}>
                        <button>Guilded</button>
                    </a>
                    <a target="_blank" href="https://github.com/X-Legendary" style={{ display: "inline-block" }}>
                        <button>GitHub</button>
                    </a>
                </section>
            </div>
        </div>
    )
}

export default Contact