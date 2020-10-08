window.addEventListener('DOMContentLoaded', function(){
  'use strict';

  // Timer
  function countTimer(deadLine){
      let timerHours = document.querySelector('#timer-hours'),
          timerMinutes = document.querySelector('#timer-minutes'),
          timerSeconds = document.querySelector('#timer-seconds');

      function getTimeRemaining() {
          let dateStop = new Date(deadLine).getTime(),
              dateNow = new Date().getTime(),
              timeRemaining = (dateStop - dateNow) / 1000,
              seconds = Math.floor(timeRemaining % 60),
              minutes = Math.floor((timeRemaining / 60) % 60),
              hours = Math.floor(timeRemaining / 60 / 60);
              
              return{timeRemaining, hours, minutes, seconds};
             
      }
      
      function updateClock() {
          let timer = getTimeRemaining();

          //add zero
          let addZero = function(num){
              if (num >= 0 && num < 10) { 
                    return '0' + num;
                } else {
                    return num;
                }
            };
          
          timerHours.textContent = addZero(timer.hours);
          timerMinutes.textContent = addZero(timer.minutes);
          timerSeconds.textContent = addZero(timer.seconds);

          if(timer.timeRemaining < 0){ 
              clearInterval(idInterval); 

              timerHours.textContent = '00'; 
              timerMinutes.textContent = '00';
              timerSeconds.textContent = '00';
          }
        
      }
      
      let idInterval = setInterval(updateClock, 1000);
      
  }
  countTimer('20, oct , 2020');

  //menu

  let toggleMenu = () => {
    const btnMenu = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = document.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul>li')
    const handlerMenu = () => {
        menu.classList.toggle('active-menu');
    };

    btnMenu.addEventListener('click',handlerMenu);

   closeBtn.addEventListener('click', handlerMenu)

  

   menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu))
  };
  toggleMenu()

  // popup

  const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
    popupBtn = document.querySelectorAll('.popup-btn'),
    popupClose = document.querySelector('.popup-close'),
    popupContent = document.querySelector('.popup-content');

    popupBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
            popup.style.display = 'block';
        });
    });
    
    
    popupClose.addEventListener('click', () => {
        popup.style.display = 'none';
    });
    // modmenu
    popupBtn[0].addEventListener('click', ()=> {
    let count = 0;
    let menuAnimate = (function() {
      count++;
    
      if(count < 150) {
        popupContent.style.top = count + 'px';
        setTimeout(menuAnimate, 6)
      } 
      if (document.documentElement.clientWidth < 768) {
        popup.style.display = count = 0;
    }
    })
   
  menuAnimate()
    })
// modmenu 2
    popupBtn[1].addEventListener('click', ()=> {
        let count = 0;
        let menuAnimate = (function() {
          count++;
        
          if(count < 150) {
            popupContent.style.top = count + 'px';
            setTimeout(menuAnimate, 6)
          } 
          if (document.documentElement.clientWidth < 768) {
            popup.style.display = count = 0;
        }
        })
       
      menuAnimate()
        })
// modmenu 3
        popupBtn[2].addEventListener('click', ()=> {
            let count = 0;
            let menuAnimate = (function() {
              count++;
            
              if(count < 150) {
                popupContent.style.top = count + 'px';
                setTimeout(menuAnimate, 6)
              } 

             if (document.documentElement.clientWidth < 768) {
                   popup.style.display = count = 0;
               }
            })
           
          menuAnimate()
            })
            
                
            
           
    
  };

  togglePopUp();

});

