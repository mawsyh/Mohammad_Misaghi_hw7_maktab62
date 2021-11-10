const menuBtn = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  const menuBar = document.querySelector(".drop-menu-list");
  menuBar.classList.toggle("active");
});
