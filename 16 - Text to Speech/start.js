(() => {
    const message = new SpeechSynthesisUtterance();
    function onVoicesChanged() {
        const voices = speechSynthesis.getVoices();
        // console.log(voices);
        const thVoice = voices.find(voice => voice.lang === "th-TH");
        message.voice = thVoice;
    }
    function onClick(event) {
        message.text = event.target.getAttribute("alt");
        speechSynthesis.speak(message);
    }
    function run() {
        speechSynthesis.addEventListener('voiceschanged',onVoicesChanged);
        const imgElems = Array.from(document.querySelectorAll('img'));
        // console.log(imgElems);
        imgElems.forEach(imgElems => imgElems.addEventListener('click',onClick));
    }
    run();
})();
