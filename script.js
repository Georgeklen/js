"use strict";
let money = prompt("Ваш месячный доход?");
console.log (money);
let addExpenses = prompt ("Перечислите возможные расходы за рассчитываемый период через запятую");
console.log (addExpenses.split(",  "));
let deposit;
deposit = confirm ("У вас есть депозит в банке?");
console.log (deposit);
let expensesOne = prompt ("Введите обязательную статью расходов?");
let expensesTwo = prompt ("Введите обязательную статью расходов?");
console.log (expensesOne);
console.log (expensesTwo);
let amountOne = prompt ("Во сколько это обойдется?");
let amountTwo = prompt ("Во сколько это обойдется?");
let mission = 50000;
console.log (Math.ceil(mission));
let budgetDay;


let getExpensesMonth  = function () {
    return ( Number(amountOne) + Number(amountTwo));
   }
console.log (getExpensesMonth())

let getAccumulatedMonth = function (){
    return ( money - (Number (amountOne) + Number (amountTwo) )) 
 }
 
 

 let accumulatedMonth = getAccumulatedMonth();
 budgetDay = accumulatedMonth / 30;
 console.log (Math.floor(accumulatedMonth));


let getTargetMonth = function () {
    return  (Number (mission)  /  Number(accumulatedMonth))
}
 console.log (getTargetMonth())

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
