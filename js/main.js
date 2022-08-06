// Sidebar Nav Toggler
const sidebar_nav_toggler = document.getElementById("sidebar_nav_toggler");
const sidebar_nav_overlay = document.querySelector(".sidebar_nav_overlay");
const sidebar_nav = document.querySelector(".sidebar_nav");
let is_sidebar_fit_content = false;
function toggle_sidebar_nav() {
  is_sidebar_fit_content = !is_sidebar_fit_content;
  if (is_sidebar_fit_content) {
    sidebar_nav_overlay.style.display = "block";
    sidebar_nav.classList.add("toggle_sidebar_nav");
  } else {
    sidebar_nav_overlay.style.display = "none";
    sidebar_nav.classList.remove("toggle_sidebar_nav");
  }
}
sidebar_nav_toggler.addEventListener("click", toggle_sidebar_nav);
sidebar_nav_overlay.addEventListener("click", toggle_sidebar_nav);
