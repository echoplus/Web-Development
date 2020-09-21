const themeSwitch = document.getElementById("themeBtn");

const theme = localStorage.getItem("theme");
document.body.classList.add(theme);

if (theme === "dark") {
  themeSwitch.checked = "true";
  // setDarkTheme();
}

themeSwitch.addEventListener("click", () => {
  switch (themeSwitch.checked) {
    case true:
      setDarkTheme();
      break;
    case false:
      setLightTheme();
      break;
  }
});
function setDarkTheme() {
  document.body.classList.add("dark");
  document.body.classList.remove("light");
  localStorage.setItem("theme", "dark");
}
function setLightTheme() {
  document.body.classList.add("light");
  document.body.classList.remove("dark");
  localStorage.setItem("theme", "light");
}
