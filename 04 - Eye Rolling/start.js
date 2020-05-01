(() => {
    function run() {
        const body = document.querySelector('body')
        const eyes = document.querySelectorAll('.eye') // 2 eyes
        function onMouseMove({pageX,pageY}){
            eyes.forEach((eye)=>{
                const {left,top} = eye.getBoundingClientRect()
                const eyeCenterX = left + eye.offsetWidth / 2
                const eyeCenterY = top + eye.offsetHeight / 2
                const radian = Math.atan2(pageY - eyeCenterY, pageX - eyeCenterX)
                const degree = radian*180/Math.PI - 1
                eye.style.transform = `rotate(${degree}deg)`

            })
        }
        body.addEventListener('mousemove',onMouseMove)
    }
    run()
})();
