(() => {
    const audioElem = document.querySelector('audio');
    const play = document.querySelector('.play');
    const bar = document.querySelector('.progress-bar');
    const startTime = document.querySelector('.start-time');
    const endTime = document.querySelector('.end-time');
    function onClick() {
        if(audioElem.paused)
        {
            audioElem.play();
            play.className = 'pause';
        }
        else
        {
            audioElem.pause();
            play.className = 'play';
        }
    }
    function getDuration(time) {
            const minutes = Math.floor(time / 60 % 60).toString();
            const seconds = Math.floor(time % 60).toString().padStart(2,'0');
            return `${minutes}:${seconds}`;

    }
    function onTimeUpdate() {
            startTime.innerHTML = getDuration(audioElem.currentTime);
            bar.value = audioElem.currentTime;
    }
    function onLoadedData() {
        endTime.innerHTML = getDuration(audioElem.duration);
        bar.max = audioElem.duration;
    }
    function onInput() {
        audioElem.currentTime = bar.value;
    }
    function onEnded() {
        play.className = 'play';
        audioElem.currentTime = 0;
    }
    function run() {
    play.addEventListener('click',onClick);
    audioElem.addEventListener('timeupdate',onTimeUpdate);
    audioElem.addEventListener('loadeddata',onLoadedData);
    audioElem.addEventListener('ended',onEnded);
    bar.addEventListener('input',onInput)
    }
    run();
})();
