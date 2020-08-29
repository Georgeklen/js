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




  let appData = {
      budget: money,
      budgetDay: 0,
      budgetMonth: 0,
      expensesMonth: 0,
      income: {},
      addIncome: [],
      expenses: {},
      addExpenses:[],
      deposit: false,
      mission: 50000,
      period: 3,
      asking: function() {
        let addExpenses = prompt ("Перечислите возможные расходы за рассчитываемый период через запятую");
        appData.addExpenses = addExpenses.split(",  ");
        appData.deposit = confirm ("У вас есть депозит в банке?"); 
        let result;
        let sum = 0;
        let expensesArr = [];
    for (let i = 0; i < 2; i++) {
        expensesArr[i] = prompt ("Введите обязательную статью расходов?");
       do {
        sum = +prompt ("Во сколько это обойдется?");
        if (isNumber(sum)) {
           result += +sum  
        }

     } while (!isNumber(sum));
    
       
                appData.expenses[expensesArr[i]] = sum;
        
    }
    return appData.expenses
      },
      getExpensesMonth: function() {
        for (let key in appData.expenses) {
            appData.expensesMonth += appData.expenses[key];
        }
        return appData.expensesMonth
      },
      getAccumulatedMonth: function() {

      },
      getTargetMonth: function() {

      },
      getStatusIncome: function() {

      }
  }
  appData.asking();
console.log ("Ваши затраты = " +  appData.result)

let amount;
console.log ("Ваша миссия = " +(Math.ceil(appData.mission)));

   let expensesAmount = appData.getExpensesMonth();
   

let getAccumulatedMonth = function (){
    return money - expensesAmount; 
 }
 
 

 let accumulatedMonth = getAccumulatedMonth();
 appData.budgetDay = accumulatedMonth / 30;
 console.log ("Ваш дневной бюджет = " + (Math.floor(accumulatedMonth)));


let getTargetMonth = function () {
    return  (Number (appData.mission)  /  Number(accumulatedMonth))
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
} else if (appData.budgetDay >1200 || appData.budgetDay>=600) {
    return("У вас средний уровень дохода")
} else if (0 < appData.budgetDay && appData.budgetDay < 600){
    return("К сожалению у вас уровень дохода ниже среднего");
} else  {
 return("Что то пошло не так")
}
}
console.log(getStatusIncome())
