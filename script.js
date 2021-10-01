let daysId = document.getElementById('days')
let hoursId = document.getElementById('hours')
let minsId = document.getElementById('mins')
let secondsId = document.getElementById('seconds')

let now_day = document.getElementById('now_day')
let now_month = document.getElementById('now_month')
let now_year = document.getElementById('now_year')
let now_hh = document.getElementById('now_hh') 

let btnGet = document.getElementById('btn_date')

const week = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]


let currentDate = new Date();
let newYear = '1 Jan ' + (currentDate.getFullYear()+1);

function countdown(){
    currentDate = new Date();
    const newYearDate = new Date(newYear);
    const totalSeconds = (newYearDate-currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);
    
    daysId.innerText = days;
    hoursId.innerText = formatTime(hours);
    minsId.innerText = formatTime(minutes);
    secondsId.innerText = formatTime(seconds);


    now_day.innerText = week[currentDate.getDay()] + ', ' + currentDate.getDate(); 
    now_month.innerText = month[currentDate.getMonth()];
    now_year.innerText = currentDate.getFullYear()+ ' year';
    now_hh.innerText = currentDate.getHours()+':'+ currentDate.getMinutes() +':'+ currentDate.getSeconds();
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

let input = document.getElementById('input')

btnGet.onclick = function(e) {
    newYear = input.value;
    console.log(input.value);

}

countdown();
setInterval(countdown, 1000);


