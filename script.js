

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('minutes');
const secsEl = document.getElementById('seconds');
const newYear = "1 Jan 2022";

function countdown(){
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearDate-currentDate)/1000;
    

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600)% 24;
    const mins = Math.floor(totalSeconds / 36)% 60;
    const secs = Math.floor(totalSeconds) % 60;
    console.log(days , hours , mins ,secs);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML =formatTime(mins);
    secsEl.innerHTML =formatTime(secs);

}

function formatTime(time){
    return time < 10 ?`0${time}` : time;
}
countdown();

setInterval(countdown , 1000);