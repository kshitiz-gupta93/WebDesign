// this function makes the DIV element draggable:
export function dragElement() {
    
    let elements = document.getElementsByClassName("draggable");
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    for(let i = 0; i< elements.length; i++)
    {
        
       let drag = elements[i];
       
       drag.onmousedown = dragMouseDown;
       let elmnt = drag.parentElement.parentElement;
      
        function dragMouseDown(e) {
          e = e || window.event;
          e.preventDefault();
          
          pos3 = e.clientX;
          pos4 = e.clientY;
          document.onmouseup = closeDragElement;
          
          document.onmousemove = elementDrag;
        }
      
        function elementDrag(e) {
          e = e || window.event;
          e.preventDefault();
        
          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY;
          
          elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
          elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }
      
        function closeDragElement() {
        
          document.onmouseup = null;
          document.onmousemove = null;
        }

    }
  
}