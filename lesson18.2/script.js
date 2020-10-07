
let date = new Date().getHours()


function timesDay() {
    if (date >= 5 && date < 12) {
        console.log("Доброе утро!")
    }
    else if (date >= 12 && date < 18) {
        console.log("Добрый день!")
    }
    else if (date >= 18 && date < 24) {
        console.log("Добрый вечер!")
    }
    else if (date >= 0 && date < 5) {
        console.log('Доброй ночи!')
    }

}

timesDay()

  let days = ['Воскресенье.', 'Понедельник.', 'Вторник.', 'Среда.', 'Четверг.', 'Пятница.', 'Суббота.' ];
  let DataDay = new Date();
  let hour = DataDay.getDay();
  console.log("Сегодня " + days[hour]);


let now = console.log("Время сейчас " + new Date().getHours() + ":" 
+ new Date().getMinutes() + ":" 
+ new Date().getSeconds())


function daysLeftNewYear() {  
    today = new Date()
    nextDate = new Date("December 31, 2020")
    // milisekundi v 1 dne
    msPerDay = 24*60*60*1000;
    // kol-vo dnei
    daysLeft = Math.round((nextDate.getTime() - today.getTime())/msPerDay);
    dayname = ""
    ds = ""+daysLeft
    // proverka
    if(daysLeft<0) {console.log("С новым годом!!!")}
    else {
    if(daysLeft==0) {console.log("Завтра новый год!")
    } else {
        console.log("До нового года осталось "+ daysLeft + dayname + "!")}
    }
    return;
  }
  daysLeftNewYear()
