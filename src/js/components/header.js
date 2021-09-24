let listButton = document.querySelector('.mobile-header__menu-button'),
  list = document.querySelector('.mobile-header__menu-outer'),
  body = document.body;


listButton.addEventListener('click', () => {
  if (!listButton.classList.contains('active')) {
    listButton.classList.add('active');
    list.classList.add('active');
    body.classList.add('lock');
  } else {
    listButton.classList.remove('active');
    list.classList.remove('active');
    body.classList.remove('lock');
  }
});