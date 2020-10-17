window.addEventListener('DOMContentLoaded', function(){
  'use strict';

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

countTimer('21, oct , 2020');




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

  //popup

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
  // // modmenu 3
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
          }
          togglePopUp()
      
/////


//табы

const tabs = ()=>{
  const tabHeader = document.querySelector('.service-header'),
          tab = tabHeader.querySelectorAll('.service-header-tab'),
          tabContent = document.querySelectorAll('.service-tab');

  const toggleTabContent = (index)=>{
      for (let i=0;i<tabContent.length;i++){
          if(index === i){
              tab[i].classList.add('active');
              tabContent[i].classList.remove('d-none');
          }else{
              tab[i].classList.remove('active');
              tabContent[i].classList.add('d-none');
          }
      }
  };
  tabHeader.addEventListener('click', (event)=>{
      let target = event.target;
      target=target.closest('.service-header-tab');
             
          if(target){
          tab.forEach((item,i)=>{
              if(item===target){
                  toggleTabContent(i);
              }
          });
      }
  });
};
tabs();

//слайдер 

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

// smena photo
const imageCommand = () => {

  const command = document.querySelectorAll('#command .row img');

  let url;
  command.forEach(el => {

    el.addEventListener('mouseenter', (evt) => {
      url = evt.target.src;
      let target = evt.target;
      target.src = target.getAttribute('data-img');     
    });

    el.addEventListener('mouseout', (evt) => {      
      let target = evt.target;
      target.src = url;
    });
  });   
};

imageCommand();

// block vvoda bukv
const calcIn = () =>{
  let  calcBlocks = document.getElementById('calc');
  let  inputs = calcBlocks.querySelectorAll('input');

  inputs.forEach((item)=>{
      item.addEventListener('input',()=>{

          item.value=item.value.replace(/[\D]/g,'');

      });
  });

};
calcIn();


// calculator 
const calc = (price = 100) => {
  let  calcBlock = document.querySelector('.calc-block');
  let calcType = document.querySelector('.calc-type');
  let calcSquare = document.querySelector('.calc-square');
  let calcDay = document.querySelector('.calc-day');
  let calcCount = document.querySelector('.calc-count');
  let totalValue = document.getElementById('total');

  const countSum = () => {
    let total = 0;
    let countValue = 1;
    let dayValue = 1;
    const typeValue = calcType.options[calcType.selectedIndex].value;
    const squareValue = +calcSquare.value;
    
    if(calcCount.value > 1) {
      countValue += (calcCount.value - 1) / 10;

    }


    if(calcDay.value && calcDay.value < 5) {
      dayValue *= 2;

    } else if(calcDay.value && calcDay.value < 10) {
      dayValue *= 1.5;
    }


    if(typeValue && squareValue) {
      total = price * typeValue * squareValue * countValue * dayValue;

    } 

    totalValue.textContent = Math.ceil(total);
  }


  calcBlock.addEventListener('change', (event) => {
    const target  = event.target;
    if(target.matches('.calc-type') || target.matches('.calc-square')
     || target.matches('.calc-day') || target.matches('.calc-count')) {
      countSum();
    }

  });

};
calc(100);

//send-ajax-form

const sendForm =()=>{
    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

    forms(document.getElementById('form1'));
    forms(document.getElementById('form2'));
    forms(document.getElementById('form3'));

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText='font-size: 2rem; color: white;';
    
  
    function forms(item){ 

        let inputsArr = [...item.elements].filter(item => {
            return item.tagName.toLowerCase() !== 'button' &&
            item.type !== 'button'; 
        });

        // валидация
        inputsArr.forEach((item)=>{
            item.addEventListener('input',()=>{
                
                if(item.name === 'user_phone' ){

                    item.value=item.value.replace(/[^0-9\+]/, '');

                }else if(item.name === 'user_name'){

                    item.value=item.value.replace(/[^а-яё ]/gi,'');

                }else if(item.name === 'user_message'){

                    item.value=item.value.replace(/[^а-яё0-9.,;:!?@#/$№\-)(=`<>|}{}\+\]["'_*&^ ]/gi,'');

                }
                else if(item.name === 'user_email'){

                    item.value=item.value.replace(/[^a-z0-9\.@\.\_]/gi,'');

                }
            });
        });


        item.addEventListener('submit', (event) => {
            event.preventDefault();
            item.append(statusMessage);
            statusMessage.textContent = loadMessage;

            const formData = new FormData(item);
            let body = {};
           
            formData.forEach((val,key)=>{
                body[key]=val;
            });

            postData(body)
            .then(()=>{
                statusMessage.textContent = successMessage;
            })
            .catch(error =>{statusMessage.textContent = errorMessage;
                console.error(error);}
            );

            //Сброс инпутов
            inputsArr.forEach((item)=>{
                item.value='';
            });
    });
    }

    const postData = (body) => {

        return new Promise((resolve,reject)=>{
            const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', ()=>{
            if(request.readyState !== 4){
                return;
            }

            if(request.status === 200){

                resolve();
            } else {
                reject(request.status);
            }
        });

        request.open('post', './server.php');

        request.setRequestHeader('Content-Type', 'application/json');
       
        request.send(JSON.stringify(body));

        });

        
    };

};
sendForm();

});



