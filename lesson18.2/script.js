let date = new Date().getHours()


function timesDay() {
    if (date >= 5 && date < 12) {
        let div = document.createElement('div');
        div.className = "alert";
        div.innerHTML = "<strong>Доброе утро!</strong> ";

    }
    else if (date >= 12 && date < 18) {
        let div = document.createElement('div');
        div.innerHTML = "<strong>Добрый день!</strong> ";
        document.body.append(div);
    }
    else if (date >= 18 && date < 24) {
        let div = document.createElement('div');
        div.innerHTML = "<strong>Добрый вечер!</strong> ";
        document.body.append(div);
        
    }
    else if (date >= 0 && date < 5) {
        let div = document.createElement('div');
        div.innerHTML = '<strong>Доброй ночи!</strong>';
        document.body.after(div);


    }

}

timesDay()
function whatDay() {
    let days = ['Воскресенье.', 'Понедельник.', 'Вторник.', 'Среда.', 'Четверг.', 'Пятница.', 'Суббота.' ];
    let DataDay = new Date();
    let hour = DataDay.getDay();
    // ("Сегодня " + days[hour]);
    // textcontent("Сегодня " + days[hour]);
    let p = document.createElement('p');
    p.innerHTML = "<strong>  Сегодня </strong>" + days[hour];
    document.body.append(p);
}
whatDay()

function now() {
    // let now = console.log("Время сейчас " + new Date().getHours() + ":" 
    // + new Date().getMinutes() + ":" 
    // + new Datxe().getSeconds()) 
    let p = document.createElement('p');
    p.innerHTML = "<strong>Текущее время:</strong> " +  new Date().getHours() + ":" 
    + new Date().getMinutes() + ":" 
    + new Date().getSeconds() + " PM"
    document.body.append(p);
    
}
now()


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
        let p = document.createElement('p');
        p.innerHTML = "<strong>До нового года осталось </strong>" +  daysLeft + dayname + "!";
        document.body.append(p);
        
    }
}
    return;
  }
  daysLeftNewYear()


