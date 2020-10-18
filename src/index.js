'use strict';
import countTimer from './module/countTimer';
import calc from './module/calc';
import imageCommand from './module/imageCommand';
import sendForm from './module/sendForm';
import slider from './module/slider';
import tabs from './module/tabs';
import toggleMenu from './module/toggleMenu';
import togglePopUp from './module/togglePopUp';

//timer
countTimer('21, oct , 2020');
//menu
toggleMenu()
//popup
togglePopUp()
//табы
tabs();
// slider
slider();
// smena photo
imageCommand();
// calculator 
calc(100);
//send-ajax-form
sendForm();

