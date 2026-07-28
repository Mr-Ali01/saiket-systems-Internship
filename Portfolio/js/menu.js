const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sidebar = document.getElementById("sidebar");
function openMenu() {
    sidebar.classList.remove("translate-x-full")
}
function closeMenu(){
    sidebar.classList.add("translate-x-full");
}
menuBtn.addEventListener("click",openMenu);
closeBtn.addEventListener("click", closeMenu);
