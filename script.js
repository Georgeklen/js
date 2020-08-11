// "use strict";
let money = prompt("Ваш месячный доход?");
// console.log (money);
// let addExpenses = prompt ("Перечислите возможные расходы за рассчитываемый период через запятую");
// console.log (addExpenses.split(",  "));
// let deposit;
// deposit = confirm ("У вас есть депозит в банке?");
// console.log (deposit);
// let expensesOne = prompt ("Введите обязательную статью расходов?");
// let expensesTwo = prompt ("Введите обязательную статью расходов?");
// console.log (expensesOne);
// console.log (expensesTwo);

// let budgetMonth;
// budgetMonth = money - (Number (amountOne) + Number (amountTwo));
// console.log(typeof budgetMonth)
// console.log(`Бюджет на месяц = ${budgetMonth}`);
let mission;
mission = 50000;
// mission = mission / budgetMonth;
// console.log (Math.ceil(mission));
// let budgetDay;
// budgetDay = budgetMonth / 30;
// console.log (Math.floor(budgetDay));
// if (budgetDay >= 1200) {
//     alert ("У вас высокий уровень дохода!")
// } else if (budgetDay >1200 || budgetDay>=600) {
//     alert("У вас средний уровень дохода")
// } else if (0 < budgetDay && budgetDay < 600){
//     alert("К сожалению у вас уровень дохода ниже среднего");
// } else  {
//  alert("Что то пошло не так")
// }

let amountOne = prompt ("Во сколько это обойдется?");
let amountTwo = prompt ("Во сколько это обойдется?");
let sum  = function () {
 console.log ( Number(amountOne) + Number(amountTwo));
}
sum();

let getAccumulatedMonth = function (){
   console.log ( money - (Number (amountOne) + Number (amountTwo) )) 
}

getAccumulatedMonth();


let accumulatedMonth = getAccumulatedMonth();

let getTargetMonth = function () {
    console.log  (Number ( mission / getAccumulatedMonth))
}
getTargetMonth()
