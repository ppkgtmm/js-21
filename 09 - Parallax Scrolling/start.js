(() => {
    function onScroll() {
        const moon = document.querySelector('.moon');
        const wish = document.querySelector('.wish');
        moon.style.transform = `translate(${window.scrollY*0.7}%,${window.scrollY* -0.7}%)` //move
        wish.style.transform = `translateY(${window.scrollY* -1.3}%)` //move
        // console.log(window.scrollY);
    }
    function run() {
        document.addEventListener("scroll",onScroll)
    }
    run();
})();
