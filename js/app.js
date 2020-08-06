// const root = document.querySelector(":root")
// const checkbox = document.querySelector("input[name=theme]")

// const getStyle = (element, style) => 
//     window
//         .getComputedStyle(element)
//         .getPropertyValue(style)

// const initialColors = {
//   backgroundBody: getStyle(root, "--background-body"),
// }

// const darkMode = {
//   backgroundBody: "#282a36",
// }

// const transformKey = key => 
// "--" + key.replace(/([A-Z])/g, "-$1").toLowerCase()

// const changeColors = (colors) => {
//     Object.keys(colors).map(key => 
//       root.style.setProperty(transformKey(key), colors[key]) 
//     )
// }

// checkbox.addEventListener("change", ({target}) => {
//     target.checked ? changeColors(darkMode) : changeColors(initialColors)
// })

if (window.CSS && CSS.supports("color", "var(--primary)")) {
  var toggleColorMode = function toggleColorMode(e) {
    // Switch to Light Mode
    if (e.currentTarget.classList.contains("light-hidden")) {
      // Sets the custom html attribute
      document.documentElement.setAttribute("color-mode", "light"); // Sets the user's preference in local storage

      localStorage.setItem("color-mode", "light");
      return;
    }
    /* Switch to Dark Mode
    Sets the custom html attribute */
    document.documentElement.setAttribute("color-mode", "dark"); // Sets the user's preference in local storage

    localStorage.setItem("color-mode", "dark");
  }; // Get the buttons in the DOM

  var toggleColorButtons = document.querySelectorAll(".color-mode-btn"); // Set up event listeners

  toggleColorButtons.forEach(function(btn) {
    btn.addEventListener("click", toggleColorMode);
  });
} else {
}