function telModal(openBtnSel, modalSel, closeBtnSel) {
  const openBtn = document.querySelectorAll(openBtnSel),
    modal = document.querySelector(modalSel),
    closeBtn = document.querySelectorAll(closeBtnSel);

  openBtn.forEach(function(item) {
    item.addEventListener('click', ()=> {
        modal.classList.add('active');
        body.classList.add('lock');
    });
  });
  closeBtn.forEach(function(item) {
    item.addEventListener('click', ()=> {
        modal.classList.remove('active');
        body.classList.remove ('lock');
    });
  });
}

telModal('.telModalOpen', '.telModal', '.close');

function writeModal(openBtnSel, modalSel, closeBtnSel) {
  const openBtn = document.querySelectorAll(openBtnSel),
    modal = document.querySelector(modalSel),
    closeBtn = document.querySelectorAll(closeBtnSel);

  openBtn.forEach(function(item) {
    item.addEventListener('click', ()=> {
        modal.classList.add('active');
        body.classList.add('lock');
    });
  });
  closeBtn.forEach(function(item) {
    item.addEventListener('click', ()=> {
        modal.classList.remove('active');
        body.classList.remove ('lock');
    });
  });
}

telModal('.telModalOpen', '.telModal', '.close');
writeModal('.writeModalOpen', '.writeModal', '.close');