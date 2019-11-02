window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  setTimeout(() => preloader.classList.add("preload-finish"), 3000);
});
