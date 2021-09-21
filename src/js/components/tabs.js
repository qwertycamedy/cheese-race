if(document.querySelector('.product__card-tab-outer')) {
  function productCardTab() {
    const tabBtn = document.querySelectorAll('.product__card-tab-btn'),
      tabContent = document.querySelectorAll('.product__card-tab-content');
  
    tabBtn.forEach(onTabBtnClick);
  
    function onTabBtnClick(item) {
      item.addEventListener('click', () => {
        const currentBtn = item,
          tabId = currentBtn.getAttribute('data-product-card-tab'),
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
  
    document.querySelector('.product__card-tab-btn').click();
  }

  productCardTab();
}