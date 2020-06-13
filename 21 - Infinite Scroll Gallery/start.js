(() => {
  const key = 'XQl5G1YE5nmUuUHzfKM5r1Q3albqEqKQH4SILpPc5Yg';
  const galleryElem = document.querySelector('.gallery');
  const loaderElem = document.querySelector('.loader');
  let page = 1;

  function showLoader() {
    loaderElem.classList.add('visible');
  }

  function hideLoader() {
    loaderElem.classList.remove('visible');
  }


  function createImageElem(image) {
    const imageElem = document.createElement('img');
    imageElem.src = image.urls.small;
    galleryElem.appendChild(imageElem);  
  }

  async function displayImages() {
  showLoader();
  const result = await fetch(`https://api.unsplash.com/photos?client_id=${key}&page=${page}`);
  const images = await result.json();
  // console.log(images);
  images.forEach(image => {
    createImageElem(image);    
  });
  page++;
  hideLoader();
  }

function onScroll() {
  const {scrollTop, clientHeight, scrollHeight} = document.documentElement;
  if(scrollTop+clientHeight>=scrollHeight-10){    displayImages();
  }
}

  function run() {
   displayImages();
   document.addEventListener('scroll',onScroll);
  }
  run();
})();
