const root = document.querySelector(":root")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)

const initialColors = {
  backgroundBody: getStyle(root, "--background-body"),
}

const darkMode = {
  backgroundBody: "#282a36",
}

const transformKey = key => 
"--" + key.replace(/([A-Z])/g, "-$1").toLowerCase()

const changeColors = (colors) => {
    Object.keys(colors).map(key => 
      root.style.setProperty(transformKey(key), colors[key]) 
    )
}

checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})