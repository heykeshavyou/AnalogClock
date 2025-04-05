let clock = document.getElementById("clock");
let countOfHour = 12;
//Angle Difference in hour
let AngleDiff = 360 / countOfHour;
let angle = AngleDiff + 45;
//loop the the count of hour for the UI
for (let i = 1; i <= countOfHour; i++) {
  clock.innerHTML += `<div class="fs-1 fw-bold position-absolute " style="transform: rotate(${angle}deg); height:290px;width:290px;"><span class="position-absolute text-center" style="transform: rotate(${-angle}deg);height:50px;width:50px;" >${i}</span></div>`;
  angle += AngleDiff;
}
//Setting the current time
function setCurrentTime() {
  let currentTime = new Date();
  let miliSecond = currentTime.getMilliseconds();
  let Second = currentTime.getSeconds() + miliSecond / 1000;
  let Minutes = currentTime.getMinutes() + Second / 60;
  let Hours = currentTime.getHours() + Minutes / 60;
  document.getElementById("SecondNeddle").style.transform = `rotate(${
    Second * 6 - 90
  }deg)`;
  document.getElementById("MinutesNeedle").style.transform = `rotate(${
    Minutes * 6 - 90
  }deg)`;
  document.getElementById("HourNeedle").style.transform = `rotate(${
    Hours * AngleDiff - 90
  }deg)`;
}
//Set Intervel for clock
window.onload = function (e) {
  let clockinterval = window.setInterval(function () {
    setCurrentTime();
  }, 1);
};
