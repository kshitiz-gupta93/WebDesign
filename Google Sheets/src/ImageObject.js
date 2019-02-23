import { makeResizableDiv} from './presentation.js';
import {dragElement} from './draggable';


var src;
//This creates the image objects dynamically and assigns the resizable and draggable functionality to them
//This function accepts the object mapX which holds the ids of new slides
export function addImageObject(mapX){

  console.log("inside text obj")  
 
let textCursor = document.getElementById("file");

textCursor.addEventListener('change', function(e){

  
    
    change_cursor();
  
    
    src = URL.createObjectURL(event.target.files[0]);
  

    for (var key in mapX) {
        if (mapX.hasOwnProperty(key)) {
            console.log(key + " -> " + mapX[key]);
            document.getElementById(mapX[key]).addEventListener('mousedown', createDivOnClick);
        }
    }
    
})
    
    function createDivOnClick(e){

        let  original_mouse_x = e.pageX;
        let original_mouse_y = e.pageY;
        let parent = document.createElement("div");
        parent.setAttribute('class', 'resizable');
    
        let resizers = document.createElement("div");
        resizers.setAttribute("class","resizers clearfix");
    
        let child1 = document.createElement("div");
        child1.setAttribute('class', 'resizer top-left');
    
        let child2 = document.createElement("div");
        child2.setAttribute('class', 'resizer top-right');
    

        let child3 = document.createElement("img");
        child3.setAttribute('id', 'output');
        child3.src = src;

    
        let child4 = document.createElement("div");
        child4.setAttribute('class', 'resizer bottom-left');
    
        let child5 = document.createElement("div");
        child5.setAttribute('class', 'resizer bottom-right');
      
        let dragabbleDiv = document.createElement("div");
        dragabbleDiv.setAttribute('class', 'draggable');
        resizers.appendChild(dragabbleDiv);
        dragabbleDiv.innerHTML = "&nbsp;"
        
        let targetCanvas = e.target.id;
       
        let container = document.getElementById(targetCanvas);
    
        resizers.appendChild(child1);
        resizers.appendChild(child2);
        resizers.appendChild(child3);
        resizers.appendChild(child4);
        resizers.appendChild(child5);
        
        parent.appendChild(resizers);
    
        parent.style.left = original_mouse_x +  'px';
        parent.style.top = original_mouse_y + 'px';
        container.appendChild(parent);
        example_restore_cursor();
        makeResizableDiv();
        dragElement();
        for (var key in mapX) {
            if (mapX.hasOwnProperty(key)) {
                console.log(key + " -> " + mapX[key]);
                document.getElementById(mapX[key]).removeEventListener('mousedown', createDivOnClick);
            }
        }
      
    }
    //this function returns the image url that users choose to add on slide
    var loadFile = function(event) {
        
       return URL.createObjectURL(event.target.files[0]);
        
      };

    //this function changes the mouse cursor to move  
    function change_cursor() {
   
        document.body.style.cursor = "move";
    }

    //this function reverts the mouse cursor to default  
    function example_restore_cursor() {
        document.body.style.cursor = 'default';
    }
    
    
   
}

