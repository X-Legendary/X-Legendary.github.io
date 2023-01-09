/*
    modal.js
    Displays a modal window with a title, content, and buttons.
*/

const images = document.getElementsByClassName("modal-image")
const modal = document.getElementById("modal")
const modalImage = document.getElementById("modal-image-content")
const modalCaption = document.getElementById("modal-caption")

for (let i = 0; i < images.length; i++)
{
    let image = images[i]
    image.addEventListener("click", () => {
        modal.style.display = "block"
        modalImage.src = image.src
        modalCaption.innerHTML = image.alt
    })
}

const close = document.getElementsByClassName("modal-close")[0]

close.addEventListener("click", () => {
    modal.style.display = "none"
})