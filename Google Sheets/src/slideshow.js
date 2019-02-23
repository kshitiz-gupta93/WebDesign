//this function presents the slides in full screen
export function slideIt(){

let present = 	document.getElementById('presentation');

present.addEventListener('click', function(){
	let presentElem;
	
	let elem = document.getElementsByClassName('toggleDiv');
	for(let i=0; i<elem.length; i++)
	{
		if(elem[i].style.display==='block' || elem[i].style.display==='')
		{
			presentElem = elem[i];
		}
	}

	presentElem.webkitRequestFullscreen();

 })


	
}