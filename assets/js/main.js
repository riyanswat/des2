const hamburgerButton = document.getElementById("hamburger-button");
const mobileMenu = document.getElementById("mobile-menu");
const hamburgerIcon = hamburgerButton.querySelector("i");

hamburgerButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  if (mobileMenu.classList.contains("hidden")) {
    hamburgerIcon.classList.remove("ri-close-line");
    hamburgerIcon.classList.add("ri-menu-line");
  } else {
    hamburgerIcon.classList.remove("ri-menu-line");
    hamburgerIcon.classList.add("ri-close-line");
  }
});
