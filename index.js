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
        colors = [
            "AliceBlue",
            "AntiqueWhite",
            "Aqua",
            "Aquamarine",
            "Azure",
            "Beige",
            "Bisque",
            "Black",
            "BlanchedAlmond",
            "Blue",
            "BlueViolet",
            "Brown",
            "BurlyWood",
            "CadetBlue",
            "Chartreuse",
            "Chocolate",
            "Coral",
            "CornflowerBlue",
            "Cornsilk",
            "Crimson",
            "Cyan",
            "DarkBlue",
            "DarkCyan",
            "DarkGoldenRod",
            "DarkGray",
            "DarkGrey",
            "DarkGreen",
            "DarkKhaki",
            "DarkMagenta",
            "DarkOliveGreen",
            "DarkOrange",
            "DarkOrchid",
            "DarkRed",
            "DarkSalmon",
            "DarkSeaGreen",
            "DarkSlateBlue",
            "DarkSlateGray",
            "DarkSlateGrey",
            "DarkTurquoise",
            "DarkViolet",
            "DeepPink",
            "DeepSkyBlue",
            "DimGray",
            "DimGrey",
            "DodgerBlue",
            "FireBrick",
            "FloralWhite",
            "ForestGreen",
            "Fuchsia",
            "Gainsboro",
            "GhostWhite",
            "Gold",
            "GoldenRod",
            "Gray",
            "Grey",
            "Green",
            "GreenYellow",
            "HoneyDew",
            "HotPink",
            "IndianRed",
            "Indigo",
            "Ivory",
            "Khaki",
            "Lavender",
            "LavenderBlush",
            "LawnGreen",
            "LemonChiffon",
            "LightBlue",
            "LightCoral",
            "LightCyan",
            "LightGoldenRodYellow",
            "LightGray",
            "LightGrey",
            "LightGreen",
            "LightPink",
            "LightSalmon",
            "LightSeaGreen",
            "LightSkyBlue",
            "LightSlateGray",
            "LightSlateGrey",
            "LightSteelBlue",
            "LightYellow",
            "Lime",
            "LimeGreen",
            "Linen",
            "Magenta",
            "Maroon",
            "MediumAquaMarine",
            "MediumBlue",
            "MediumOrchid",
            "MediumPurple",
            "MediumSeaGreen",
            "MediumSlateBlue",
            "MediumSpringGreen",
            "MediumTurquoise",
            "MediumVioletRed",
            "MidnightBlue",
            "MintCream",
            "MistyRose",
            "Moccasin",
            "NavajoWhite",
            "Navy",
            "OldLace",
            "Olive",
            "OliveDrab",
            "Orange",
            "OrangeRed",
            "Orchid",
            "PaleGoldenRod",
            "PaleGreen",
            "PaleTurquoise",
            "PaleVioletRed",
            "PapayaWhip",
            "PeachPuff",
            "Peru",
            "Pink",
            "Plum",
            "PowderBlue",
            "Purple",
            "RebeccaPurple",
            "Red",
            "RosyBrown",
            "RoyalBlue",
            "SaddleBrown",
            "Salmon",
            "SandyBrown",
            "SeaGreen",
            "SeaShell",
            "Sienna",
            "Silver",
            "SkyBlue",
            "SlateBlue",
            "SlateGray",
            "SlateGrey",
            "Snow",
            "SpringGreen",
            "SteelBlue",
            "Tan",
            "Teal",
            "Thistle",
            "Tomato",
            "Turquoise",
            "Violet",
            "Wheat",
            "White",
            "WhiteSmoke",
            "Yellow",
            "YellowGreen",
          ];
        e.target.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];;
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

 