const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)

const initialColors = {
  backgroundBody: getStyle(html, "--background-body"),
}

const darkMode = {
  backgroundBody: "#282a36",
}

const transformKey = key => 
"--" + key.replace(/([A-Z])/g, "-$1").toLowerCase()

const changeColors = (colors) => {
    Object.keys(colors).map(key => 
      html.style.setProperty(transformKey(key), colors[key]) 
    )
}

checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})