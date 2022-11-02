(() => {
  const openMenu = document.querySelector(".mobile-open");
  const closeMenu = document.querySelector(".mobile-close");
  const mobileMenu = document.querySelector(".mobile-container");

  openMenu.addEventListener("click", toggleModal);
  closeMenu.addEventListener("click", toggleModal);
  function toggleModal() {
   mobileMenu.classList.toggle("is-hidden")
  }
})();
