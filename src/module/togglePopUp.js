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

 export default togglePopUp;