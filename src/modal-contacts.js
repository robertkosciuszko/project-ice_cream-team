import './sass/main.scss';
(() => {
  const refs = {
    openModalBtn: document.querySelector('[contacts-location-modal-open]'),
    closeModalBtn: document.querySelector('[contacts-location-modal-close]'),
    modal: document.querySelector('[contacts-location-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
