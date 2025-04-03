let clock = document.getElementById("clock");
function setCurrentTime() {
  let currentTime = new Date();
  let miliSecond = currentTime.getMilliseconds();
  let Second = currentTime.getSeconds() + miliSecond / 1000;
  let Minutes = currentTime.getMinutes() + Second / 60;
  let Hours = currentTime.getHours() + Minutes / 60;
  document.getElementById("SecondNeddle").style.transform = `rotate(${
    Second * 6 -90
  }deg)`;
  document.getElementById("MinutesNeedle").style.transform = `rotate(${
    Minutes * 6 -90
  }deg)`;
  document.getElementById("HourNeedle").style.transform = `rotate(${
    Hours * 30 -90
  }deg)`;
}
window.onload = function (e) {
  let clockinterval = window.setInterval(function () {
    setCurrentTime();
  }, 1);
};
