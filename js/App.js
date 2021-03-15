const modal = document.getElementById("modal");
const hamburger = document.getElementById("hamburger");
const navItems = [...document.querySelectorAll(".nav-item-modal")];

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  modal.classList.toggle("active");
});

navItems.forEach((el) => {
  el.addEventListener("click", () => {
    if (el.classList[1] === "active") {
      el.classList.remove("active");
    } else {
      navItems.forEach((item) => {
        item.classList.remove("active");
      });
      el.classList.add("active");
    }
  });
});
