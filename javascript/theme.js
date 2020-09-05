const lightThemeButton = document.querySelector("#light");
const darkThemeButton = document.querySelector("#dark");

darkThemeButton.addEventListener("click", setDarkTheme());

function setDarkTheme() {
  document.body.classList.add("dark");
  document.body.classList.remove("light");
  localStorage.setItem("theme", "dark");
}
const theme = localStorage.getItem("theme");
document.body.classList.add(theme);
if (theme === "dark") setDarkTheme();

console.log(document.body.classList);

document.querySelector("h1").style.color = "red";
