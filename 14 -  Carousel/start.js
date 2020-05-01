(() => {
    let currentIndex = 0;
    function displayImage(images,newIndex){
        const lastIndex = images.length-1;
        if(newIndex<0)
            newIndex = lastIndex;
        else if(newIndex>lastIndex)
            newIndex = 0;
        const newImage = images[newIndex];
        newImage.scrollIntoView({behavior:'smooth'});
        currentIndex = newIndex;
    }
function run() {
    const images = document.querySelectorAll('img');
    const prevButton = document.querySelector('.previous');
    const nextButton = document.querySelector('.next');
    prevButton.addEventListener('click',()=>displayImage(images,currentIndex-1));
    nextButton.addEventListener('click',()=>displayImage(images,currentIndex+1))
}
run();
})();
