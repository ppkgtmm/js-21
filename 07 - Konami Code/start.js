(() => {
    const konamiCode = [
        'ArrowUp',
        'ArrowUp',
        'ArrowDown',
        'ArrowDown',
        'ArrowLeft',
        "ArrowRight",
        'ArrowLeft',
        "ArrowRight",
        'b',
        'a'
    ];

    let index = 0;
    function onKeyDown(event) {
        event.key === konamiCode[index] ? index++ : index = 0;
        if(index==konamiCode.length)
        {
            startSnowing();
        }
        console.log(event);
    }
    function run(){
        document.addEventListener('keydown',onKeyDown);

    }
    run();
})();
