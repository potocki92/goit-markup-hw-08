(() => {
  const ref = {
    // open the modal
    open: document.querySelector("[data-modal-open]"),
    // close the modal
    close: document.querySelector("[data-modal-close]"),
    // to add / remove class 'is-hidden'
    toggle: document.querySelector("[data-modal]"),
  };

  // click and open backdrop
  ref.open.addEventListener("click", toggleModal);
  // click and close backdrop
  ref.close.addEventListener("click", toggleModal);

  // function to add 'is-hidden' class
  function toggleModal() {
    ref.toggle.classList.toggle("is-hidden");
  }
})();
