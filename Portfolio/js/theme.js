const html = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const saveTheme = localStorage.getItem("theme");
if(saveTheme)
{
    html.classList.toggle("dark", saveTheme==="dark");
}
// else{
//     const preferDark = window.matchMedia("prefers-colors-scheme:dark").matches;
//     html.classList.toggle("dark",preferDark);
// }
// Toggle Theme
themeToggle.addEventListener("click",()=> {
    html.classList.toggle("dark");
    const currentTheme = html.classList.contains("dark")?"dark":"light";
    localStorage.setItem("theme", currentTheme);
})