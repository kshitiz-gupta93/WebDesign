var count = 1;
export var mapX = {"1":"canvas"};
var canvasValue = 1001;

//this function creates new slides
export function createNewSlide()
{

let add = document.getElementById('add');
add.addEventListener('click', function(e){   
    count++;
    canvasValue++;
  
    let slideBar = document.getElementById("slideBar");
    
    let slideNo = document.createElement("div");
    slideNo.innerText=count;
    slideNo.setAttribute("id", count);
    slideNo.setAttribute("class", "slideNo");
    slideBar.appendChild(slideNo);
   
    mapX[count] = canvasValue;

    let canvas = document.createElement("div");
    
    canvas.setAttribute("id", canvasValue);
       canvas.setAttribute("class", "clearfix canvas toggleDiv");
       let container = document.getElementById('cont');
       container.appendChild(canvas);
    
    let defaultSlide = document.getElementById('1');
    defaultSlide.addEventListener('click', loadCanvas);

    slideNo.addEventListener('click', loadCanvas);

    function loadCanvas(e)
    {
        let mCanvas = document.getElementsByClassName("toggleDiv")
        for(let i =0; i< mCanvas.length; i++)
        {
          let canvas = mCanvas[i];
          canvas.style.display="none";
        }

       let targetId =  e.target.id;
       let canvas = document.getElementById(mapX[targetId]);
       canvas.style.display="block";

    }


})
}

