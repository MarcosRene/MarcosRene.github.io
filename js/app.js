if (window.CSS && CSS.supports("color", "var(--primary)")) {
  var toggleColorMode = function toggleColorMode(e) {
    if (e.currentTarget.classList.contains("light-hidden")) {
      document.documentElement.setAttribute("color-mode", "light");

      localStorage.setItem("color-mode", "light");
      return;
    }
    
    document.documentElement.setAttribute("color-mode", "dark"); 

    localStorage.setItem("color-mode", "dark");
  }; 

  var toggleColorButtons = document.querySelectorAll(".color-mode-btn");

  toggleColorButtons.forEach(function(btn) {
    btn.addEventListener("click", toggleColorMode);
  });
} else {
}