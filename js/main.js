(() => {
    const refs = {

      openModalBtn2: document.querySelector('[data-modal-open2]'),
      closeModalBtn2: document.querySelector('[data-modal-close2]'),
      modal2: document.querySelector('[data-modal2]'),

      openModalBtn3: document.querySelector('[data-modal-open3]'),
      closeModalBtn3: document.querySelector('[data-modal-close3]'),
      modal3: document.querySelector('[data-modal3]'),

    };

    refs.openModalBtn2.addEventListener('click', toggleModal2);
    refs.closeModalBtn2.addEventListener('click', toggleModal2);

    refs.openModalBtn3.addEventListener('click', toggleModal3);
    refs.closeModalBtn3.addEventListener('click', toggleModal3);


    function toggleModal2() {
      refs.modal2.classList.toggle('is-hidden2');
    }

    function toggleModal3() {
      refs.modal3.classList.toggle('is-hidden3');
    }

  })();

  