import Navbar from "../components/Navbar"
import Project from "../components/Project"
import TitleSection from "../components/TitleSection"

function Projects() {
    return (
        <div>
            <Navbar></Navbar>
            <TitleSection></TitleSection>
            <section style={{ textAlign: "center" }}>
                <h3>My Projects</h3>
                <h4>Below is a list of <b>all</b> of my <b>public</b> projects, aswell as a link to them.</h4>
            </section>
            <section id="projects">
                <section id="roblox">
                    <Project
                        name="Galactic Horizons"
                        description="
                            Inspired from Star Citizen and Elite Dangerous, Galactic Horizons is a massive open world space simulator with millions of systems to visit. Game is still in development as of writing this."
                        link="https://discord.gg/BGetMgnTUD"
                        special
                    >
                    </Project>
                    <Project
                        name="Parkour Race"
                        description="
                            Probably one of the biggest projects I've lead, Parkour Race is a game where you race other people to finish the parkour first.
                            I've worked with this on my friend in 2021, but I stopped as I decided to work on Galactic Horizons instead."
                        link="https://www.roblox.com/games/6127826153/Parkour-Race"
                    >
                    </Project>
                    {/*<Project
                        name="Button of Doom"
                        description="An old game I made in Roblox. It was a game where you had to press a button and and it would choose a random event to happen. Really fun to play, but I don't think it's worth my time anymore."
                        link="https://www.roblox.com/games/5713612889/Button-of-Doom"
                    >
                    </Project>*/}
                    <Project
                        name="Building System Test"
                        description="
                            As it's name suggests, this is a test of a Roblox building system that I made a long time ago.
                            It isn't relevant to my skills anymore."
                        link="https://www.roblox.com/games/5880964219/Building-System-Test"
                    >
                    </Project>
                    <Project
                        name="Just Climb"
                        description="Well, just climb, as simple as that. A game I made in under 1 hour to prove that I can do it to my friends. Never really finished it, but I'm pretty sure it's still playable."
                        link="https://www.roblox.com/games/5966878976/Just-Climb"
                    >
                    </Project>
                    <Project
                        name="Terrain Generation"
                        description="A project where I learnt the basics of how to use Perlin Noise (as well as Simplex Noise) to generate terrain. Nothing more, nothing less."
                        link="https://www.roblox.com/games/6086168409/Terrain-Generation"
                    >
                    </Project>
                </section>
                <section id="nodejs" style={{ marginTop: "100px" }}>
                    <Project
                        name="Away from Discord"
                        description="Discord rich-presence that displays how long you've been AFK for for Windows."
                        link="https://github.com/X-Legendary/away-from-discord"
                        special
                    >
                    </Project>
                    {/*<Project
                        name="Byte"
                        description="Utility and moderation Discord bot I made for the official ByteCode Studios Discord Server. Equipped with a plethora of commands (including slash commands now too!), including moderation, utility, and more."
                        link="https://discord.com/invite/JNgfEcTKBn"
                    >
                    </Project>
                    <Project
                        name="Byte Music"
                        description="As its name suggests, it's Byte but just music commands. Primarly made for ByteCode Studios, it is used in other smaller affiliated servers."
                        link="https://discord.com/invite/JNgfEcTKBn"
                    >
                    </Project>*/}
                </section>
                <h3 style={{ textAlign: "center" }}>I've made many other projects, but they're either comissions, private work, or something I forgot to add here.</h3>
            </section>
        </div>
    )
}

export default Projects
