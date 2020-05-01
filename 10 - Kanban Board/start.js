(() => {

    function onDragStart(event) {
        // console.log(event);
        draggedElem = this;
    }
    function onDrop() {
        this.append(draggedElem);
        draggedElem = null;
    }
    function onDragOver(event) {
        event.preventDefault();
    }
    function onDragEnter(event) {
        event.preventDefault();
    }
    function run() {
        const tasks = Array.from(document.querySelectorAll('.task'));
        const dropZone = Array.from(document.querySelectorAll('.drop-zone'));
        tasks.forEach((task)=>{
         task.addEventListener('dragstart',onDragStart);
        })
        dropZone.forEach((zone)=>{
            zone.addEventListener('drop',onDrop);
            zone.addEventListener('dragover',onDragOver);
            zone.addEventListener('dragenter',onDragEnter);
        })
    }
run();
})();
