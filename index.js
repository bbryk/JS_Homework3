// /* YOUR CODE HERE! */

function setUpBox(){
    box  = document.querySelector('.box');
    let curXCoord = 0, curYCoord = 0, xCoord = 0, yCoord = 0;
    box.addEventListener('mousedown',trackDrag); 

    function trackDrag(e){

        xCoord = e.clientX;
        yCoord = e.clientY;
        
        document.addEventListener('mousemove', mouseMove);
        
        document.addEventListener('mouseup', mouseUp);


        function mouseUp(){
            document.removeEventListener('mousemove', mouseMove);
        }
        
    }

    function mouseMove(e) {
        curXCoord = xCoord - e.clientX;
        curYCoord = yCoord - e.clientY;
        xCoord = e.clientX;
        yCoord = e.clientY;
        box.style.top = (box.offsetTop - curYCoord) + "px";
        box.style.left = (box.offsetLeft - curXCoord) + "px";
    }
}
setUpBox();

