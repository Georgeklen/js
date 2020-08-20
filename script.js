"use strict";
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
let money;
// console.log (money);
let addExpenses = prompt ("Перечислите возможные расходы за рассчитываемый период через запятую");
console.log (addExpenses.split(",  "));
let deposit;
deposit = confirm ("У вас есть депозит в банке?");
console.log (deposit);
// let expensesOne = prompt ("Введите обязательную статью расходов?");
// let expensesTwo = prompt ("Введите обязательную статью расходов?");

let amountOne , amountTwo;
let expensesOne , expensesTwo;
let mission = 50000;
console.log ("Ваша миссия = " +(Math.ceil(mission)));
let budgetDay;


let start;
do {
    money = prompt("Ваш месячный доход?");
  } while (!isNumber(money))
  console.log("Ваш доход = " + money)


let getExpensesMonth  = function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
        let guard;
        do {
            expensesOne = prompt ("Введите обязательную статью расходов?");
        } while (!isNumber(expensesOne))
// if ( i=== 0) {
//     expensesOne = prompt ("Введите обязательную статью расходов?");

// } else if ( i === 1) {
//     expensesTwo = prompt ("Введите обязательную статью расходов?")
// }



            sum+= +prompt("Во сколько это обойдется?")
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

//  console.log ("Период выполнения миссии = " + (getTargetMonth()))

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