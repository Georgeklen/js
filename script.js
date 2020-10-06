
window.addEventListener('DOMContentLoaded', function(){
    function countTimer(deadline) {
        // получение элементов со страницы
      let timerHours = document.querySelector('#timer-hours')
      let timerMinutes = document.querySelector('#timer-minutes')
      let timerSeconds = document.querySelector('#timer-seconds')
      //
  
      function getTimeRemaining() {
      let dateStop = new Date (deadline).getTime();
      let dateNow = new Date().getTime();
      let timeRemaining = (dateStop - dateNow) / 1000;
      let seconds = Math.floor(timeRemaining % 60);
      let minutes =  Math.floor((timeRemaining / 60 ) % 60);
      let hours = Math.floor(timeRemaining / 60 / 60);
      return {timeRemaining, hours, minutes, seconds};
      }
      
  
      function updateClock() {
          let timer = getTimeRemaining();
          timerHours.textContent = ('0' + timer.hours).slice(-2);
          timerMinutes.textContent = ('0' + timer.minutes).slice(-2);
          timerSeconds.textContent = ('0' + timer.seconds).slice(-2);

          if(timer.timeRemaining > 0) {
              setInterval(updateClock, 1000);
          }

          if (timer.total <= 0) {
            clearInterval(countTimer());
          }
      }
      
      updateClock()
  
    }
    countTimer("7 oct 2020");
  
  });
  