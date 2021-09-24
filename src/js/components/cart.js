if(document.querySelector('.cart')) {
  function contactPayment() {
    const contactPay = document.querySelector('.Contact'),
      noContactPay = document.querySelector('.NoContact'),
      ContactBlock = document.querySelector('.ContactBlock');
  
    contactPay.addEventListener('click', function () {
      ContactBlock.classList.add('active');
    });
  
    noContactPay.addEventListener('click', function () {
      ContactBlock.classList.remove('active');
    });
  }
  contactPayment();
  
  function radioClick() {
    const radioLabelOne = document.querySelectorAll('.radioLabel-1'),
      radioLabelTwo = document.querySelectorAll('.radioLabel-2');
  
    radioLabelOne.forEach(function (item) {
      item.addEventListener('click', (e) => {
        let currentItem = item;
        if (!currentItem.classList.contains('active')) {
          radioLabelOne.forEach((item) => {
            item.classList.remove('active');
          });
        }
        currentItem.classList.add('active')
      });
    });
  
    document.querySelector('.radioLabel-1').click();
  
    radioLabelTwo.forEach(function (item) {
      item.addEventListener('click', (e) => {
        let currentItem = item;
        if (!currentItem.classList.contains('active')) {
          radioLabelTwo.forEach((item) => {
            item.classList.remove('active');
          });
        }
        currentItem.classList.add('active')
      });
    });
  
    document.querySelector('.radioLabel-2').click();
  }
  radioClick();
  
  
  function cartTab() {
    const tabBtn = document.querySelectorAll('.cart__tab-btn'),
      tabContent = document.querySelectorAll('.cart__tab-content');
  
    tabBtn.forEach(onTabBtnClick);
  
    function onTabBtnClick(item) {
      item.addEventListener('click', () => {
        const currentBtn = item,
          tabId = currentBtn.getAttribute('data-cart-tab'),
          currentTabContent = document.querySelector(tabId);
  
  
        if (!currentBtn.classList.contains('acitve')) {
          tabBtn.forEach((item) => {
            item.classList.remove('active');
          });
          tabContent.forEach((item) => {
            item.classList.remove('active');
          });
  
  
          currentBtn.classList.add('active');
          currentTabContent.classList.add('active');
        }
      });
    }
  
    document.querySelector('.cart__tab-btn').click();
  }
  cartTab();
}

