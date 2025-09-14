document. addEventListener ("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const dropdownMenu = document.querySelector(".menu-icon-container ul");
    if (menuIcon && dropdownMenu) {
    menuIcon.addEventListener("click", function () {
      dropdownMenu.classList.toggle("show-dropdown");
    });
  } else {
    console.warn("Elementele nu au fost gasite in DOM");
  }
});