(() => {
  // open the mobile menu
  const openMenu = document.querySelector(".mobile-open");
  // close the mobile menu
  const closeMenu = document.querySelector(".mobile-close");
  // to add / remove class 'is-hidden'
  const mobileMenu = document.querySelector(".mobile");

  // click and open mobile menu
  openMenu.addEventListener("click", toggleModal);
  // click and close mobile menu
  closeMenu.addEventListener("click", toggleModal);

  // function to add 'is-hidden' class to mobile
  function toggleModal() {
   mobileMenu.classList.toggle("is-hidden")
  }
})();
