;
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
     appData.budget = +salaryAmount.value;
     
     appData.getExpenses()
     appData.getExpensesMonth()
     appData.getAddExpenses()
     appData.getaddIncome()
     appData.getIncome()
     appData.getBudget()
     appData.showResult()
     console.log(this)
     salaryAmount.value='';
     start.disabled=true;
    // appData.getInfoDeposit()
      },
      showResult: function() {
        budgetMonthValue.value = +this.budgetMonth;
        budgetDayValue.value = +this.budgetDay;
        expensesMonthValue.value = +this.expensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(', ')
        additionalIncomeValue.value = appData.addIncome.join(', ')
        targetMonthValue.value = Math.ceil(appData.getTargetMonth())
        incomePeriodValue.value = appData.calcPeriod()
        periodSelect.addEventListener('input',this.showResult)
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
            this.expensesMonth += +this.expenses[key];
        }
        return appData.expensesMonth
      },

         getBudget: function(){
            this.budgetMonth = Number (this.budget) + Number (this.incomeMonth) - Number (this.expensesMonth);
            this.budgetDay = Math.floor(appData.budgetMonth / 30);
            return this.budgetMonth;
      },
      getTargetMonth: function() {
        let res = Math.ceil((targetAmount.value) / this.getBudget());
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
  }
 
}
  

  start.addEventListener('click', appData.start)
  expensesPlus.addEventListener('click', appData.addExpensesBlock)
  incomePlus.addEventListener('click',appData.addIncomeBlock); 
  periodSelect.addEventListener('input',appData.range); 
  salaryAmount.addEventListener('input',appData.disabledButton);