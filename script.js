"use strict";
//   
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
//

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
let isString = function(b) {
    return isNaN(parseFloat(b)) && isFinite(b);
}
start.disabled=true;
  let appData = {
      amount: 0,
      incomeMonth: 0,
      percentDeposit: 0,
      moneyDeposit: 0,
      budget: 0,
      budgetDay: 0,
      budgetMonth: 0,
      expensesMonth: 0,
      income: {},
      addIncome: [],
      expenses: {},
      addExpenses:[],
      deposit: false,
      period: 3,
      start: function() {
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
     
    //  start.disabled=true;

    // appData.getInfoDeposit()
      },
      showResult: function() {
        budgetMonthValue.value = + this.budgetMonth;
        budgetDayValue.value = + this.budgetDay;
        expensesMonthValue.value = + this.expensesMonth;
        additionalExpensesValue.value =  this.addExpenses.join(', ')
        additionalIncomeValue.value = this.addIncome.join(', ')
        targetMonthValue.value = Math.ceil(this.getTargetMonth())
        incomePeriodValue.value = this.calcPeriod()
       


        periodSelect.addEventListener('input', function(){
          incomePeriodValue.value = appData.calcPeriod()
        })
      },


      addExpensesBlock: function() {
        let cloneExpensesItem = expensesItems[0].cloneNode(true)
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus)
        expensesItems = document.querySelectorAll(".expenses-items");
        if(expensesItems.length === 3) {
          expensesPlus.style.display = 'none'
        }
      },

      addIncomeBlock:function(){
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        incomeItems = document.querySelectorAll('.income-items');
        if(incomeItems.length === 3){
            incomePlus.style.display='none';
        }
    },

      getAddExpenses: function() {
        let addExpenses = additionalExpensesItem.value.split(', ')
        addExpenses.forEach(function(item) {
          item = item.trim()
          if (item !== '') {
            appData.addExpenses.push(item)
          }
        })
      },
      getExpenses: function() {
        expensesItems.forEach(function(item) {
          let itemExpenses = item.querySelector('.expenses-title').value;
          let cashExpenses = item.querySelector('.expenses-amount').value;
          if(itemExpenses !== '' && cashExpenses !== '') {
            appData.expenses[itemExpenses] = cashExpenses;

          }
        })
      },
      getaddIncome: function() {
        additionalIncomeItem.forEach(function(item) {
          let itemValue = item.value.trim();
          if (itemValue !== '' ) {
            appData.addIncome.push(itemValue)
          }
        })
      },
      getIncome:function(){
        incomeItems.forEach(function(item){
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if(itemIncome!==''&&cashIncome!==''){
                appData.income[itemIncome]=cashIncome;
            }
        });
    },

      getExpensesMonth: function() {
        for (let key in appData.expenses) {
            appData.expensesMonth += +appData.expenses[key];
        }
        return appData.expensesMonth
      },

         getBudget: function(){
            appData.budgetMonth = Number (appData.budget) + Number (appData.incomeMonth) - Number (appData.expensesMonth);
            appData.budgetDay = Math.floor(appData.budgetMonth / 30);
            return appData.budgetMonth;
      },
      getTargetMonth: function() {
        let res = Math.ceil((targetAmount.value) / appData.getBudget());
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
      calcPeriod: function() {
          return (appData.budgetMonth * periodSelect.value);
      },
      range: function(){
        let periodAmount = document.querySelector('.period-amount');
        periodAmount.textContent= periodSelect.value;
    },

    disabledButton: function(){
      if (salaryAmount.value.trim()!==''){
          start.disabled=false;
      }else{
          start.disabled=true;
      }
  },

  toDisabled: function(isDisabled = false) {
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
  },
  showResetButton: function() {
    appData.toDisabled(true);
    // periodSelect.textContent = 1;
    start.style.display = 'none';
    cancel.style.display = 'block';
  },
reset: function() {
  let inputs = main.querySelectorAll('input')
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = ''
    periodSelect.value = 0
    periodSelect.textContent = 1;

    appData.toDisabled(false);

    for (let i = 0; i < incomeItem.length; i++) {
			if (i !== 0) {
				incomeItem[i].remove();
			}
		}
		incomePlus.style.display = 'block';
		for (let i = 0; i < expensesItems.length; i++) {
			if (i !== 0) {
				expensesItems[i].remove();
			}
		}
		expensesPlus.style.display = 'block';
    start.style.display = 'block';
		cancel.style.display = 'none';
		
    start.disabled = true;

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
}
}
  start.addEventListener('click', appData.start.bind(appData));
  cancel.addEventListener('click', appData.reset.bind(appData));


  expensesPlus.addEventListener('click', appData.addExpensesBlock)
  incomePlus.addEventListener('click',appData.addIncomeBlock); 
  periodSelect.addEventListener('input',appData.range); 
  salaryAmount.addEventListener('input',appData.disabledButton);
