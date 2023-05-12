import './sass/main.scss';
(() => {
  const refs = {
    openModalBtn: document.querySelector('[contacts-franchise-modal-open]'),
    closeModalBtn: document.querySelector('[contacts-franchise-modal-close]'),
    modal: document.querySelector('[contacts-franchise-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
