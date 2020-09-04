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
      amount: 0,
      percentDeposit: 0,
      moneyDeposit: 0,
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


        if(confirm("Есть ли у вас дополнительный заработок?")) {
            let cashIncome;
            let itemIncome;
            do {
                itemIncome = prompt ("Какой у вас есть дополнительный зарабаток?", "Таксую") 
            } while (isString(itemIncome))
                

            do {
                cashIncome = prompt ("Какую сумму вы зарабатываете?", 15000)
            }while(!isNumber(appData.income[itemIncome] = cashIncome));
             
            appData.income[itemIncome] = cashIncome;
        }


        let addExpenses = prompt ("Перечислите возможные расходы за рассчитываемый период через запятую", "asdads");
        appData.addExpenses = addExpenses.split(',').map
        (function (word) {
			word = word.trim();
			return word.charAt(0).toUpperCase() + word.slice(1);
		});

        appData.deposit = confirm ("У вас есть депозит в банке?"); 
        let result;
        let sum = 0;
        let expensesArr = [];
    for (let i = 0; i < 2; i++) {
        do {
            expensesArr[i] = prompt ("Введите обязательную статью расходов?");
          } while (isString(expensesArr[i]))
    
        
        do{
        sum = +prompt ("Во сколько это обойдется?");
        if (!isNumber(sum)) { 
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

         getBudget: function(){
            appData.budgetMonth = appData.budget - appData.expensesMonth;
            appData.budgetDay = Math.floor(appData.budgetMonth / 30);
            return appData.budgetMonth;
      },
      getTargetMonth: function() {
        let res = Math.ceil((appData.mission) / appData.getBudget());
        return res;
      },
      
      getStatusIncome: function() {
        if (appData.budgetDay >= 1200) {
			return ('У вас высокий уровень дохода');
		} else if (appData.budgetDay >= 600 || appData.budgetDay < 1200) {
			return ('У вас средний уровень дохода');
		} else if (appData.budgetDay < 600 && appData.budgetDay === 0) {
			return ('К сожалению у вас уровень дохода ниже среднего');
		} else {
			return ('Что то пошло не так');
		}
      },
      getInfoDeposit: function() {
          if(appData.deposit) {
            do {
                appData.percentDeposit = prompt("Какой годовой процент?", 10)
              } while (!isNumber(appData.percentDeposit))
              do {
                appData.moneyDeposit = prompt("Какаяя сумма заложенна" , 10000)
              } while (!isNumber(appData.moneyDeposit))
            }
      },
      calcSavedMoney: function() {
          return (appData.budgetMonth * appData.period);
      }
  }

appData.asking();
console.log ("Ваши затраты = " + appData.getExpensesMonth())
if (appData.getTargetMonth() > 0) {
	console.log('Цель будет достигнута за ' + appData.getTargetMonth());
} else if(appData.getTargetMonth() < 0) {
	console.log('Цель не будет достигнута');
}
console.log (appData.addExpenses)
console.log ("Ваша миссия = " +(Math.ceil(appData.mission)));
console.log(appData.getStatusIncome());
console.log ("Ваш дневной бюджет = " + (Math.floor(appData.budgetDay)));
appData.getInfoDeposit()
console.log(appData.moneyDeposit,appData.percentDeposit,appData.calcSavedMoney())
// for (let key in appData) {
//     console.log("Наша программа включает в себя данные:  "  + key + "   Значение  " + appData[key] )
// }
function checkAddExpenses() {
    for (let key of appData.addExpenses) {
        key = word.charAt(0).toUpperCase();
    }
    
}

// let calculate = document.start("#start");

const calculate = document.querySelector("#start")
const plus = document.querySelector("button")
const plusTwo = (document.getElementsByTagName("button")[1])
const checkBox = document.querySelector("#deposit-check")
const additionalIncome = document.querySelectorAll(".additional_income-item")
const budgetMonthI = document.getElementsByClassName("budget_month-value")
const budgetDayI = document.getElementsByClassName("budget_day-value")
const budgetExpenses = document.getElementsByClassName("expenses_month-value")
const budgetAdditional = document.getElementsByClassName("additional_income-value")
const additional_expenses = document.getElementsByClassName("additional_expenses-value") 
const income_period = document.getElementsByClassName("income_period-value") 
const target_month = document.getElementsByClassName("target_month-value")
const period_select = document.querySelector(".period-select")
const target_amount = document.querySelector(".target-amount")
const additional_expenses_item = document.querySelector(".additional_expenses-item")
const expenses_title = document.querySelector(".expenses-title")
const expenses_amount = document.querySelector(".expenses-amount")
const eadditional_income_item_one = document.querySelector(".additional_income-item")
const eadditional_income_item_two = document.querySelector(".additional_income-item")
const income_title = document.querySelector(".income-title")
const income_amount = document.querySelector(".income-amount")
const salary_amount = document.querySelector(".salary-amount")