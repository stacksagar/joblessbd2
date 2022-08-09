// Header
const profileOptionsToggler = document.getElementById(
  "profile-options-toggler"
);
if (profileOptionsToggler) {
  let show = false;
  function toggle() {
    if (show) {
      document.querySelector(".profile-options").classList.remove("show");
    } else {
      document.querySelector(".profile-options").classList.add("show");
    }

    show = !show;
  }
  profileOptionsToggler.addEventListener("click", toggle);
  profileOptionsToggler.addEventListener("blur", () => {
    console.log("work");
    setTimeout(() => {
      toggle();
    }, 100);
  });
}

// Sidebar Nav Toggler
const sidebar_nav_toggler = document.getElementById("sidebar_nav_toggler");
const sidebar_nav_overlay = document.querySelector(".sidebar_nav_overlay");
const sidebar_nav = document.querySelector(".sidebar_nav");
const content = document.querySelector(".content");
let is_sidebar_fit_content = false;
function toggle_sidebar_nav() {
  is_sidebar_fit_content = !is_sidebar_fit_content;
  if (is_sidebar_fit_content) {
    sidebar_nav_overlay.style.display = "block";
    sidebar_nav.classList.add("toggle_sidebar_nav");
    content.classList.add("full");
  } else {
    sidebar_nav_overlay.style.display = "none";
    sidebar_nav.classList.remove("toggle_sidebar_nav");
    content.classList.remove("full");
  }
}
sidebar_nav_toggler.addEventListener("click", toggle_sidebar_nav);
sidebar_nav_overlay.addEventListener("click", toggle_sidebar_nav);

// Copy Refarrel Link Text
const copy_btn = document.getElementById("copy_btn");
if (copy_btn) {
  copy_btn.addEventListener("click", function () {
    var copyText = document.getElementById("copy_refarrel_input");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    this.innerHTML = "Copied";
    setTimeout(() => {
      this.innerHTML = `<i class="fa-solid fa-copy"></i>`;
    }, 1000);
  });
}
const all_dropdown = document.querySelectorAll(".dropdown");

all_dropdown.forEach((dropdown) => {
  dropdown.addEventListener("mouseover", function () {
    sidebar_nav.style.paddingRight = "200px";
  });
  dropdown.addEventListener("mouseleave", function () {
    sidebar_nav.style.paddingRight = "10px";
  });
});
