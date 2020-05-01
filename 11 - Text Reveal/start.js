(() => {
    function onScroll() {
        const secElems = Array.from(document.querySelectorAll('section'));
        // console.log(secElems);
        secElems.forEach((secElem)=>{
            const image = secElem.querySelector('img');
            const text = secElem.querySelector('.text');
            const scrollPosition = window.pageYOffset;
            const reviewPosition = image.offsetTop + image.offsetHeight/10; //length from top + img height/10
            if(scrollPosition >= reviewPosition)
            {
                text.classList.add('reveal');
            }
        })
    }
function run() {
    document.addEventListener('scroll',onScroll)
}
run();
})();
