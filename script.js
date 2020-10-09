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
    // const closeBtn = document.querySelector('.close-btn');
    // const menuItems = menu.querySelectorAll('ul>li')
    const handlerMenu = () => {
        menu.classList.toggle('active-menu');
    };

    btnMenu.addEventListener('click', handlerMenu);

    menu.addEventListener('click', (event) => {
			let target = event.target;

			if (!target.classList.contains('close-btn')) {
				target = target.closest('li');
			}
      if (target) {
        handlerMenu();
      };
      
      });
    
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
    
    
    popup.addEventListener('click', (event) => {
      let target = event.target;

         if (target.classList.contains('popup-close')) {
           popup.style.display = 'none';
       } else {
           target = target.closest('.popup-content');

           if (!target) {
               popup.style.display = 'none';
           }
    }

         
    })

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
            // tabi
            const tabs = () => {
              const tabHeader = document.querySelector('.service-header'),
                tabs = tabHeader.querySelectorAll('.service-header-tab'),
                tabContents = document.querySelectorAll('.service-tab');
          
              const toggleTabContent = index => {
                for (let i = 0; i < tabContents.length; i++) {
                  if (index === i) {
                    tabs[i].classList.add('active');
                    tabContents[i].classList.remove('d-none');
                  } else {
                    tabs[i].classList.remove('active');
                    tabContents[i].classList.add('d-none');
                  }
                }
              };
          
              tabHeader.addEventListener('click', event => {
                let target = event.target;
                target = target.closest('.service-header-tab');
          
          
                if (target) {
                  tabs.forEach((item, i) => {
                    if (item === target) {
                      toggleTabContent(i);
                    }
                  });
                }
              });
            };
            


          tabs()
                
            // slider
            const slider = () => {
              const slide = document.querySelectorAll('.portfolio-item'),
                  // btn = document.querySelectorAll('.portfolio-btn'),
                  slider = document.querySelector('.portfolio-content'),
                  dots = document.querySelector('.portfolio-dots');
      
              let currentSlide = 0,
                  interval;
      
              const prevSlide = (elem, index, strClass) => {
                  elem[index].classList.remove(strClass);
              };
      
              const nextSlide = (elem, index, strClass) => {
                  elem[index].classList.add(strClass);
              };
      
      
              const currentDots = () => {
      //sozdanie new dot
                  for (let i = 0; i < slide.length; i++) {
                      let dot = document.createElement('li');
                      dot.classList.add('dot');
                      if (currentSlide === i) {
                          dot.classList.add('dot-active');
                      };
      
                      dots.appendChild(dot);
                  };
      
      
              };
              currentDots();

              const dot = document.querySelectorAll('.dot')
      
              const autoPlaySlide = () => {
      
                  prevSlide(slide, currentSlide, 'portfolio-item-active');
                  prevSlide(dot, currentSlide, 'dot-active');
                  currentSlide++;
                  if (currentSlide >= slide.length) {
                      currentSlide = 0;
                  }
                  nextSlide(slide, currentSlide, 'portfolio-item-active');
                  nextSlide(dot, currentSlide, 'dot-active');
      
              };
      
              const startSlide = (time = 3000) => {
                  interval = setInterval(autoPlaySlide, time);
              };
      
              const stopSlide = () => {
                  clearInterval(interval);
              };
      
              slider.addEventListener('click', (event) => {
                  event.preventDefault();
      
      
                  let target = event.target;
      
                  if (!target.matches('.portfolio-btn, .dot')) {
                      return;
                  }
      
                  prevSlide(slide, currentSlide, 'portfolio-item-active');
                  prevSlide(dot, currentSlide, 'dot-active');
      
                  if (target.matches('#arrow-right')) {
                      currentSlide++;
                  } else if (target.matches('#arrow-left')) {
                      currentSlide--;
                  } else if (target.matches('.dot')) {
                      dot.forEach((elem, index) => {
                          if (elem === target) {
                              currentSlide = index;
                          }
                      });
                  }
      
                  if (currentSlide >= slide.length) {
                      currentSlide = 0;
                  }
      
                  if (currentSlide < 0) {
                      currentSlide = slide.length - 1;
                  }
      
                  nextSlide(slide, currentSlide, 'portfolio-item-active');
                  nextSlide(dot, currentSlide, 'dot-active');
              });
      
              slider.addEventListener('mouseover', (event) => {
                  if (event.target.matches('.portfolio-btn') ||
                      event.target.matches('.dot')) {
                      stopSlide();
                  }
              });
      
              slider.addEventListener('mouseout', (event) => {
                  if (event.target.matches('.portfolio-btn') ||
                      event.target.matches('.dot')) {
                      startSlide();
                  }
              });
      
              startSlide(1500);
          };
        
          slider();
  };

  togglePopUp();

});


