// "use strict";
let money;
money = prompt("Ваш месячный доход?");
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
console.log (amountOne);
let amountTwo = prompt ("Во сколько это обойдется?");
console.log (amountTwo);
let budgetMonth;
budgetMonth = money - amountTwo;
console.log(`Бюджет на месяц = ${budgetMonth}`);
let mission = 50000;
mission = mission / budgetMonth;
console.log (Math.ceil(mission));
let budgetDay;
budgetMonth = budgetMonth / 30;
console.log (Math.floor(budgetMonth));



budgetDay = prompt ("Какой у вас дневной бюджет?")
if (budgetDay >= 1200) {
    alert ("У вас высокий уровень дохода!")
}

else if (budgetDay >1200 || budgetDay>=600) {
    alert("У вас средний уровень дохода")
}
else if (0 < budgetDay && budgetDay < 600){
    alert("К сожалению у вас уровень дохода ниже среднего");
}

else  {
 alert("Что то пошло не так")
}