let paragraph = document.querySelectorAll("p")

function randomColor() {
    return Math.floor(Math.random() * 256) 
}

document.getElementById("swapColor").addEventListener("click", () => {
    paragraph.forEach(paragraph => {
        let randomColorize = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`
        paragraph.style.color = randomColorize;
    })
})

document.getElementById("makeItBold").addEventListener("click", () => {
    paragraph.forEach(paragraph => {
        if (paragraph.style.fontWeight != "bold") {
            paragraph.style.fontWeight = "bold"
        } else {
            paragraph.style.fontWeight = ""
        }
    })
})

document.getElementById("hidden").addEventListener("click", () => {
    paragraph.forEach(paragraph => {
        if (paragraph.style.display != "none") {
            paragraph.style.display = "none"
        } else {
            paragraph.style.display = "block"
        }
    })
})