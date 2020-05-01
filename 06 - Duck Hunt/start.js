(() => {
    function random(max,min){
        return Math.floor(Math.random()* max - min + 1) + min
    }
    function createDucks() {
        return [...Array(5)].map(()=>{
            return {
                x: random(window.innerWidth,0),
                y: random(window.innerHeight,0),
                speedX: random(50,-50),
                speedY: random(30,0)
            }
            }
        )
        // console.log(ducks)
    }
    function getDuckBackgroundImage(duck,duckElement) {
        const direction = duck.speedX > 0 ? 'right' : 'left'
        return duckElement.style.backgroundImage.indexOf('1') !== -1 ?
            `url(./${direction}-2.png)` : `url(./${direction}-1.png)`
    }
    function moveDuck(duck,duckElement) {
        const {left,top} = duckElement.getBoundingClientRect() //return position on screen
        duck.x = left + duck.speedX
        duck.y = top - duck.speedY // move up
        const outOfBoundX = duck.x > window.innerWidth || duck.x < 0
        const outOfBoundY = duck.y > window.innerHeight || duck.y < 0
        if(outOfBoundX)
        {
            duck.speedX *= -1
        }
        if(outOfBoundY)
        {
            duck.speedY *= -1
        }
        duckElement.style.left = `${duck.x}px` //template string
        duckElement.style.top = `${duck.y}px`
        duckElement.style.backgroundImage = getDuckBackgroundImage(duck,duckElement)
    }
    function setUpDuckElement(duck) {
        const duckElement = document.createElement('div')
        duckElement.className = 'duck'
        duckElement.style.left = `${duck.x}px` //template string
        duckElement.style.top = `${duck.y}px`
        duckElement.style.backgroundImage = 'url(./left-1.png)'
        document.body.appendChild(duckElement)
        return {duck,duckElement}
    }
    function shootDuck(event) {
        const duckElement = event.target
        duckElement.style.transition = 'top 2s' //move down from current pos
        duckElement.style.top = `${window.innerHeight}px`
        clearInterval(duckElement.interval)
        setTimeout(()=>{
            document.body.removeChild(duckElement)
           const duck =  document.querySelector('.duck')
            if(!duck)
            {
                const winingElement = document.querySelector('.winning')
                winingElement.style.opacity = 1;
            }
        })
    }
    function run() {
        const ducks = createDucks()
        const duckElements = ducks.map(setUpDuckElement)
        duckElements.forEach(({duck,duckElement}) =>{
            duckElement.interval = setInterval(()=>{
                moveDuck(duck,duckElement)
                duckElement.addEventListener('click',shootDuck)
            },100)
        })
    }
    run()
})();
