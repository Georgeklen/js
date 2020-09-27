"use strict";
//  получаю элементы со страницы
let btnPlus = document.getElementsByTagName('button')
let incomePlus = btnPlus[0]
let expensesPlus = btnPlus[1]
let start = document.querySelector("#start")
let plus = document.querySelector("button")
let plusTwo = (document.getElementsByTagName("button")[1])
let checkBox = document.querySelector("#deposit-check");
let additionalIncome = document.querySelectorAll(".additional_income-item");
let budgetMonthValue = document.getElementsByClassName("budget_month-value")[0]
let budgetDayValue = document.getElementsByClassName("budget_day-value")[0]
let expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0]
let budgetExpenses = document.getElementsByClassName("expenses_month-value")[0]
let budgetAdditional = document.getElementsByClassName("additional_income-value")[0]
let additionalExpensesValue = document.getElementsByClassName("additional_expenses-value")[0] 
let targetMonthValue = document.getElementsByClassName("target_month-value")[0]
let periodSelect = document.querySelector(".period-select");
let targetAmount = document.querySelector(".target-amount");
let additionalExpensesItem = document.querySelector(".additional_expenses-item");
let expensesTitle = document.querySelector(".expenses-title");
let expensesAmount = document.querySelector(".expenses-amount");
let additionalIncomeItem = document.querySelectorAll(".additional_income-item");
let incomeTitle = document.querySelector(".income-title");
let incomeAmount = document.querySelector(".income-amount");
let salaryAmount = document.querySelector(".salary-amount");
let expensesItems = document.querySelectorAll(".expenses-items");
let additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0];
let incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
let incomeItems = document.querySelectorAll('.income-items');
let incomeItem = document.querySelectorAll(".income-items")
let main = document.querySelector('.main');
let cancel = document.querySelector('#cancel')

// проверка на число

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
// проверка просто
let isString = function(b) {
    return isNaN(parseFloat(b)) && isFinite(b);
}
//блок кнопки
start.disabled=true;
// база переменных с данными
 
const AppData = function () {
  this.amount = 0;
  this.incomeMonth = 0;
  this.percentDeposit = 0;
  this.moneyDeposit = 0;
  this.budget = 0;
  this.budgetDay = 0;
  this.budgetMonth = 0;
  this.expensesMonth = 0;
  this.income = {};
  this.addIncome = [];
  this.expenses = {};
  this.addExpenses = [];
  this.deposit = false;
  this.period = 3;
};

AppData.prototype.disabledButton = function () {
  if (salaryAmount.value.trim()!==''){
    start.disabled=false;
}else{
    start.disabled=true;
}
};

AppData.prototype.start = function() {
  this.budget = +salaryAmount.value;
  this.getExpenses()
  this.getExpensesMonth()
  this.getAddExpenses()
  this.getaddIncome()
  this.getIncome()
  this.getBudget()
  this.toDisabled()
  this.showResult()
  this.showResetButton()

};
// appData
AppData.prototype.showResult = function() {
  const _this = this;
  budgetMonthValue.value = + this.budgetMonth;
  budgetDayValue.value = + this.budgetDay;
  expensesMonthValue.value = + this.expensesMonth;
  additionalExpensesValue.value =  this.addExpenses.join(', ')
  additionalIncomeValue.value = this.addIncome.join(', ')
  targetMonthValue.value = Math.ceil(this.getTargetMonth())
  incomePeriodValue.value = this.calcPeriod()
 


  periodSelect.addEventListener('input', function(){
    incomePeriodValue.value = _this.calcPeriod()
  })
};

// клонированние элементов по клику  (rasxodi)
AppData.prototype.addExpensesBlock = function() {
  let cloneExpensesItem = expensesItems[0].cloneNode(true)
  expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus)
  expensesItems = document.querySelectorAll(".expenses-items");
  if(expensesItems.length === 3) {
    expensesPlus.style.display = 'none'
  }
};

// клонированние дополнительного дохода
AppData.prototype.addIncomeBlock = function(){
  let cloneIncomeItem = incomeItems[0].cloneNode(true);
  incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
  incomeItems = document.querySelectorAll('.income-items');
  if(incomeItems.length === 3){
      incomePlus.style.display='none';
  }
};
// дополнительные расходы записываются через ,
AppData.prototype.getAddExpenses = function() {
  const _this = this;
  let addExpenses = additionalExpensesItem.value.split(', ')
  addExpenses.forEach(function(item) {
    item = item.trim()
    if (item !== '') {
      _this.addExpenses.push(item)
    }
  })
};
// значения полей расходов наименования к расходу
AppData.prototype.getExpenses = function() {
  const _this = this;
  expensesItems.forEach(function(item) {
    let itemExpenses = item.querySelector('.expenses-title').value;
    let cashExpenses = item.querySelector('.expenses-amount').value;
    if(itemExpenses !== '' && cashExpenses !== '') {
      _this.expenses[itemExpenses] = cashExpenses;

    }
  })
        
};
// добавляю доход в массив
AppData.prototype.getaddIncome = function() {
  const _this = this;
  additionalIncomeItem.forEach(function(item) {
    let itemValue = item.value.trim();
    if (itemValue !== '' ) {
      _this.addIncome.push(itemValue)
    }
  })
};
// значения полей расходов наименования к доходу
AppData.prototype.getIncome = function(){
  const _this = this;
  incomeItems.forEach(function(item){
      let itemIncome = item.querySelector('.income-title').value;
      let cashIncome = item.querySelector('.income-amount').value;
      if(itemIncome!==''&&cashIncome!==''){
          _this.income[itemIncome]=cashIncome;
      }
  });
  // присваивание incomeMonth - income 
  for(let key in this.income) {
    this.incomeMonth += +this.income[key]
  }
};
// сумма расходов

AppData.prototype.getExpensesMonth = function() {
  const _this = this;
  for (let key in this.expenses) {
      this.expensesMonth += +_this.expenses[key];
  }
  return this.expensesMonth
};

// операции с бюджетом 
AppData.prototype.getBudget = function(){
     this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
      // this.budgetMonth =  Number(this.income) + Number (this.budget)  + Number (this.incomeMonth) - Number (this.expensesMonth);
      this.budgetDay = Math.floor(this.budgetMonth  / 30);
      return this.budgetMonth;
};
// расчетный период по назначению
AppData.prototype.getTargetMonth = function() {
  let res = Math.ceil((targetAmount.value) / this.getBudget());
  return res;
};
//уровень дохода
AppData.prototype.getStatusIncome = function() {
  if (this.budgetDay >= 1200) {
return ('У вас высокий уровень дохода');
} else if (this.budgetDay >= 600 || this.budgetDay < 1200) {
return ('У вас средний уровень дохода');
} else if (this.budgetDay < 600 && this.budgetDay === 0) {
return ('К сожалению у вас уровень дохода ниже среднего');
} else {
return ('Что то пошло не так');
}
};
// вопросы про банк
AppData.prototype.getInfoDeposit = function() {
    if(this.deposit) {
      do {
          this.percentDeposit = prompt("Какой годовой процент?", 10)
        } while (!isNumber(this.percentDeposit))
        do {
          this.moneyDeposit = prompt("Какаяя сумма заложенна" , 10000)
        } while (!isNumber(this.moneyDeposit))
      }
};

AppData.prototype.calcPeriod = function() {
    return (this.budgetMonth * periodSelect.value);
};
//значение ползунка 
AppData.prototype.range = function(){
  let periodAmount = document.querySelector('.period-amount');
  periodAmount.textContent= periodSelect.value;
};
// блок кнопки старт
AppData.prototype.disabledButton = function(){
if (salaryAmount.value.trim()!==''){
    start.disabled=false;
}else{
    start.disabled=true;
}
};
//блокировка полей после ввода  
AppData.prototype.toDisabled = function(isDisabled = false) {
salaryAmount.disabled = isDisabled;
additionalIncomeItem[0].disabled = isDisabled
additionalIncomeItem[1].disabled = isDisabled

incomeItems.forEach(function(item) {
item.querySelectorAll('input').forEach(function (input) {
  input.disabled = isDisabled
});
});

expensesItems.forEach(function(item) {
  item.querySelectorAll('input').forEach(function(input) {
    input.disabled = isDisabled
  });
});
additionalExpensesItem.disabled = isDisabled;
targetAmount.disabled = isDisabled;
};
AppData.prototype.showResetButton = function() {
  this.toDisabled(true);
// periodSelect.textContent = 1;
start.style.display = 'none';
cancel.style.display = 'block';
};
//функция сброса с нуля
AppData.prototype.reset = function() {
let inputs = main.querySelectorAll('input')
for (let i = 0; i < inputs.length; i++) {
inputs[i].value = ''
periodSelect.value = 0
periodSelect.textContent = 1;

this.toDisabled(false);
//удаления поля дополнительного
for (let i = 0; i < incomeItems.length; i++) {
if (i !== 0) {
  incomeItems[i].remove();
}
}
incomePlus.style.display = 'block';
//удаления поля дополнительного
for (let i = 0; i < expensesItems.length; i++) {
if (i !== 0) {
  expensesItems[i].remove();
}
}

expensesPlus.style.display = 'block';
//скрываю кнопку сброс показываю старт
start.style.display = 'block';
cancel.style.display = 'none';

start.disabled = true;
//обнуление при клику по сброс
this.budget =0,
this.budgetDay = 0,
this.budgetMonth = 0,
this.expensesMonth = 0,
this.income = {},
this.incomeMonth = 0,
this.addIncome = [],
this.expenses = {},
this.addExpenses = [],
this.deposit = false,
this.percentDeposit = 0,
this.moneyDeposit = 0,
this.period = 0
}
// навешеваиние слушателя
};

AppData.prototype.eventsListeners = function() {
  start.addEventListener('click', appData.start.bind(appData));
  cancel.addEventListener('click', appData.reset.bind(appData));
  expensesPlus.addEventListener('click', appData.addExpensesBlock)
  incomePlus.addEventListener('click',appData.addIncomeBlock); 
  periodSelect.addEventListener('input',appData.range); 
  salaryAmount.addEventListener('input',appData.disabledButton);
};

const appData = new AppData();
appData.eventsListeners()
console.log(appData)




  