const navIcon = document.querySelector(".header__mobile-nav > i");
const mobileNav = document.querySelector("#mobile-nav");

navIcon.addEventListener("click", function () {
  if (mobileNav.classList.contains("none")) {
    mobileNav.style.display = "none";
    mobileNav.classList.remove("none");
  } else {
    mobileNav.style.display = "flex";
    mobileNav.classList.add("none");
  }
});
