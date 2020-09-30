"use strict";
//  получаю элементы со страницы
const btnPlus = document.getElementsByTagName('button')
const incomePlus = btnPlus[0]
const expensesPlus = btnPlus[1]
const start = document.querySelector("#start")
const plus = document.querySelector("button")
const plusTwo = (document.getElementsByTagName("button")[1])
const checkBox = document.querySelector("#deposit-check");
const additionalIncome = document.querySelectorAll(".additional_income-item");
const budgetMonthValue = document.getElementsByClassName("budget_month-value")[0]
const budgetDayValue = document.getElementsByClassName("budget_day-value")[0]
const expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0]
const budgetExpenses = document.getElementsByClassName("expenses_month-value")[0]
const budgetAdditional = document.getElementsByClassName("additional_income-value")[0]
const additionalExpensesValue = document.getElementsByClassName("additional_expenses-value")[0] 
const targetMonthValue = document.getElementsByClassName("target_month-value")[0]
const periodSelect = document.querySelector(".period-select");
const targetAmount = document.querySelector(".target-amount");
const additionalExpensesItem = document.querySelector(".additional_expenses-item");
const expensesTitle = document.querySelector(".expenses-title");
const expensesAmount = document.querySelector(".expenses-amount");
const additionalIncomeItem = document.querySelectorAll(".additional_income-item");
const incomeTitle = document.querySelector(".income-title");
const incomeAmount = document.querySelector(".income-amount");
const salaryAmount = document.querySelector(".salary-amount");
let expensesItems = document.querySelectorAll(".expenses-items");
const additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0];
const incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
let incomeItems = document.querySelectorAll('.income-items');
const incomeItem = document.querySelectorAll(".income-items")
const main = document.querySelector('.main');
const cancel = document.querySelector('#cancel')
// 
// проверка на число

const isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
// проверка просто
const isString = function(b) {
    return isNaN(parseFloat(b)) && isFinite(b);
}
//блок кнопки
start.disabled=true;
// база переменных с данными
 
class AppData {
  constructor() {
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
  }
  disabledButton () {
    if (salaryAmount.value.trim()!==''){
      start.disabled=false;
  }else{
      start.disabled=true;
  }
  }
  start () {
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
   
  }
 showResult  () {
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
  }
  range(){
  let periodAmount = document.querySelector('.period-amount');
  periodAmount.textContent= periodSelect.value;
  
}
  addExpensesBlock() {
    let cloneExpensesItem = expensesItems[0].cloneNode(true)
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus)
    expensesItems = document.querySelectorAll(".expenses-items");
    if(expensesItems.length === 3) {
      expensesPlus.style.display = 'none'
    }
  }
  addIncomeBlock (){
  let cloneIncomeItem = incomeItems[0].cloneNode(true);
  incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
  incomeItems = document.querySelectorAll('.income-items');
  if(incomeItems.length === 3){
      incomePlus.style.display='none';
  }
}
  getAddExpenses () {
    const _this = this;
    let addExpenses = additionalExpensesItem.value.split(', ')
    addExpenses.forEach((item) => {
      item = item.trim()
      if (item !== '') {
        _this.addExpenses.push(item)
      }
    })

  }
// значения полей расходов наименования к расходу
getExpenses () {
  const _this = this;
  expensesItems.forEach(function(item) {
    let itemExpenses = item.querySelector('.expenses-title').value;
    let cashExpenses = item.querySelector('.expenses-amount').value;
    if(itemExpenses !== '' && cashExpenses !== '') {
      _this.expenses[itemExpenses] = cashExpenses;

    }
  })
        
}
getaddIncome () {
  const _this = this;
  additionalIncomeItem.forEach(function(item) {
    let itemValue = item.value.trim();
    if (itemValue !== '' ) {
      _this.addIncome.push(itemValue)
    }
  })
}
getIncome (){
  const _this = this;
  incomeItems.forEach((item) => {
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
}
getExpensesMonth() {
  const _this = this;
  for (let key in this.expenses) {
      this.expensesMonth += +_this.expenses[key];
  }
  return this.expensesMonth
}

getBudget (){
  this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
   // this.budgetMonth =  Number(this.income) + Number (this.budget)  + Number (this.incomeMonth) - Number (this.expensesMonth);
   this.budgetDay = Math.floor(this.budgetMonth  / 30);
   return this.budgetMonth;
}
// расчетный период по назначению
getTargetMonth () {
  let res = Math.ceil((targetAmount.value) / this.getBudget());
  return res;
}

getStatusIncome () {
  if (this.budgetDay >= 1200) {
return ('У вас высокий уровень дохода');
} else if (this.budgetDay >= 600 || this.budgetDay < 1200) {
return ('У вас средний уровень дохода');
} else if (this.budgetDay < 600 && this.budgetDay === 0) {
return ('К сожалению у вас уровень дохода ниже среднего');
} else {
return ('Что то пошло не так');
}
}
// вопросы про банк
getInfoDeposit () {
  if(this.deposit) {
    do {
        this.percentDeposit = prompt("Какой годовой процент?", 10)
      } while (!isNumber(this.percentDeposit))
      do {
        this.moneyDeposit = prompt("Какаяя сумма заложенна" , 10000)
      } while (!isNumber(this.moneyDeposit))
    }
}
calcPeriod() {
  return (this.budgetMonth * periodSelect.value);
  
}
// block start
disabledButton(){
  if (salaryAmount.value.trim()!==''){
      start.disabled=false;
  }else{
      start.disabled=true;
  }
  }

  toDisabled (isDisabled = false) {
    salaryAmount.disabled = isDisabled;
    additionalIncomeItem[0].disabled = isDisabled
    additionalIncomeItem[1].disabled = isDisabled
    
    incomeItems.forEach(function(item) {
    item.querySelectorAll('input').forEach( (input) => {
      input.disabled = isDisabled
    });
    });
    
    expensesItems.forEach((item) => {
      item.querySelectorAll('input').forEach((input) => {
        input.disabled = isDisabled
      });
    });
    additionalExpensesItem.disabled = isDisabled;
    targetAmount.disabled = isDisabled;
    }

    showResetButton() {
      this.toDisabled(true);
    start.style.display = 'none';
    cancel.style.display = 'block';
    }
    reset () {
      let inputs = main.querySelectorAll('input')
      let periodAmountr = document.querySelector('.period-amount')
      for (let i = 0; i < inputs.length; i++) {

      inputs[i].value = ''
      periodSelect.value = 0
      periodAmountr.textContent= 1
     
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
      }
      eventsListeners() {
        start.addEventListener('click', appData.start.bind(appData));
        cancel.addEventListener('click', appData.reset.bind(appData));
        expensesPlus.addEventListener('click', appData.addExpensesBlock)
        incomePlus.addEventListener('click',appData.addIncomeBlock); 
        periodSelect.addEventListener('input',appData.range); 
        salaryAmount.addEventListener('input',appData.disabledButton);
      };
  }
//function

const appData = new AppData();
appData.eventsListeners()
console.log(appData)
