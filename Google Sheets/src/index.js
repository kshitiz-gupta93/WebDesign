//This JS is the entry point for the webpack
//This JS imports the js and it's function and runs them on page load


import './presentation.js';
import { addTextObject} from './TextObject.js';
import { slideIt } from './slideshow';
import { addImageObject} from './ImageObject.js';

import { createNewSlide, mapX } from './NewSlides';

window.onload=function (){
    addTextObject(mapX);
    addImageObject(mapX);
    createNewSlide();
    slideIt(mapX);
 }