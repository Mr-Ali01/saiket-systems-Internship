// const html = document.documentElement;
// const themeToggle = document.getElementById("themeToggle");
// const saveTheme = localStorage.getItem("theme");
// if(saveTheme)
// {
//     html.classList.toggle("dark", saveTheme==="dark");
// }
// // else{
// //     const preferDark = window.matchMedia("prefers-colors-scheme:dark").matches;
// //     html.classList.toggle("dark",preferDark);
// // }
// // Toggle Theme
// themeToggle.addEventListener("click",()=> {
//     html.classList.toggle("dark");
//     const currentTheme = html.classList.contains("dark")?"dark":"light";
//     localStorage.setItem("theme", currentTheme);
// })

document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('themeToggle');

  // Toggle switch handler
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      updateToggleIcon(isDark);
    });
  }

  // Set icon state on initial load
  const isCurrentlyDark = document.documentElement.classList.contains('dark');
  updateToggleIcon(isCurrentlyDark);

  function updateToggleIcon(isDark) {
    if (!themeToggleBtn) return;
    // Toggles between Sun and Moon SVG
    if (isDark) {
      themeToggleBtn.innerHTML = `
        <svg class="h-5 w-5 text-amber-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="5"></circle>
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
        </svg>`;
    } else {
      themeToggleBtn.innerHTML = `
        <svg class="h-5 w-5 text-stone-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>`;
    }
  }
});