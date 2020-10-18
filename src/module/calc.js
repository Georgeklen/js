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

  export default calc;