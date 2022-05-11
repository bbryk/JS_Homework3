// /* YOUR CODE HERE! */
let boxContainer = document.querySelector('.box-container');;
box  = document.querySelector('.box');
num = 1;

function setUpBox(box){
    let curXCoord = 0, curYCoord = 0, xCoord = 0, yCoord = 0;
    box.addEventListener('mousedown',trackDrag); 

    function trackDrag(e){
        if (e.which === 1) {
            e.preventDefault();

            xCoord = e.clientX;
            yCoord = e.clientY;
            
            document.addEventListener('mousemove', mouseMove);
            
            document.addEventListener('mouseup', mouseUp);


            function mouseUp(){
                document.removeEventListener('mousemove', mouseMove);
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
        
    }



    box.addEventListener('contextmenu', rightClick);
    function rightClick(e){
        e.target.style.backgroundColor = "green";
    }

    box.addEventListener('click', resize);
    
    function resize(e){
        if (e.shiftKey){
            box.classList.toggle('box-large');
        }
    }
    box.addEventListener('dblclick', doubleClick);
    function doubleClick(e){
        if (e.altKey){
            if (boxContainer.lastElementChild === boxContainer.firstElementChild) {
                return;
            }
            box.remove();

        }else{
            let newBox = e.target.cloneNode(true);
            num += 1;
            newBox.textContent = num;

            newBox.style.top = (e.target.offsetTop + 100) + 'px';
            newBox.style.left = (e.target.offsetLeft + 100) + 'px'
            boxContainer.appendChild(newBox);
            setUpBox(newBox);
        }

    } 
    
   
   
}
setUpBox(box);

 