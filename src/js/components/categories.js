if(document.querySelector('.category')) {
  const categoryLink = document.querySelectorAll('.all-products__tab-btn'),
   categoryInnerLink = document.querySelectorAll('.all-products__inner-link');

  for (var i = categoryLink.length - 1; i >= 0; i--) {
    if (categoryLink[i].href == document.URL) {
      categoryLink[i].classList.add('active');
    }
  };
  for (var i = categoryInnerLink.length - 1; i >= 0; i--) {
    if (categoryInnerLink[i].href == document.URL) {
      categoryInnerLink[i].classList.add('active');
    }
  };
}

