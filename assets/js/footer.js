let footer = document.getElementById("footer")

let texts = [
    "👀 Made You Look",
    "Made with code",
    "Why are you reading this?",
    "Made with code lol",
    "JavaScript is bestest"
]

let text = texts[Math.floor(Math.random() * texts.length)]

footer.innerText = text