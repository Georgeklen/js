"use strict";
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
let isString = function(b) {
    return isNaN(parseFloat(b)) && isFinite(b);
}
let money;
let start;
do {
    money = prompt("Ваш месячный доход?");
  } while (!isNumber(money))
  console.log("Ваш доход = " + money)

let addExpenses = prompt ("Перечислите возможные расходы за рассчитываемый период через запятую");
console.log (addExpenses.split(",  "));
let deposit;
deposit = confirm ("У вас есть депозит в банке?");
console.log (deposit);
let amount;
let expenses;
let mission = 50000;
console.log ("Ваша миссия = " +(Math.ceil(mission)));
let budgetDay;

let getExpensesMonth  = function () {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
       do {
            expenses = prompt ("Введите обязательную статью расходов?");
        }  
        while (isString(expenses))

        // sum += +expenses
        do {
            amount = prompt ("Во сколько это обойдется?");
        } while (!isNumber(amount))
                
        sum += +amount;
        
    }



    console.log("Ваши затраты = " + sum)
    return sum;
   }
   let expensesAmount = getExpensesMonth();
   

let getAccumulatedMonth = function (){
    return money - expensesAmount; 
 }
 
 

 let accumulatedMonth = getAccumulatedMonth();
 budgetDay = accumulatedMonth / 30;
 console.log ("Ваш дневной бюджет = " + (Math.floor(accumulatedMonth)));


let getTargetMonth = function () {
    return  (Number (mission)  /  Number(accumulatedMonth))
}
 {
    if (getTargetMonth() < 0 ) {
        console.log ("Цель не будет достигнута.")
    }
    else if (getTargetMonth() > 0)
    console.log ("Цель будет достигнута за = " + (Math.floor(getTargetMonth())))
}
    getTargetMonth()

 function getStatusIncome() {
 if (accumulatedMonth >= 1200) {
    return ("У вас высокий уровень дохода!")
} else if (budgetDay >1200 || budgetDay>=600) {
    return("У вас средний уровень дохода")
} else if (0 < budgetDay && budgetDay < 600){
    return("К сожалению у вас уровень дохода ниже среднего");
} else  {
 return("Что то пошло не так")
}
}
console.log(getStatusIncome())

let showTypeOf = function(data) {
    console.log(data, typeof(data));
}

showTypeOf(money);
