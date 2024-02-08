const input = document.querySelector("input")
const button = document.querySelector("button")
const ul = document.querySelector("ul")

button.addEventListener("click", () => {
    if (input.value === "")
        alert("This note is empty!")
    else{
        let li = document.createElement("li")
        li.innerHTML = input.value
        ul.appendChild(li)

        let span = document.createElement("span")
        span.innerHTML = "&#x2715;"
        li.appendChild(span)
    }
    input.value = ""
    saveData()
})

ul.addEventListener("click", (e) => {
    if (e.target.tagName === "LI")
        e.target.classList.toggle("checked")
    else if(e.target.tagName === "SPAN")
        e.target.parentElement.remove()
    saveData()
})

function saveData() {
    localStorage.setItem("data", ul.innerHTML)
}

function showData() {
    ul.innerHTML = localStorage.getItem("data")
}
showData()