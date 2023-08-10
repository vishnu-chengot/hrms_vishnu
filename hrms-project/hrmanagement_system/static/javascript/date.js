
today = document.getElementById("today")

date =  new Date()
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
correct_month = months[date.getMonth()]
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
new_day = days[date.getDay()]
curent_date = new_day+' '+date.getDate()+' '+correct_month+' '+date.getFullYear()
today.innerHTML = curent_date

// var hr_span = document.querySelector('#hr');
// var min_span = document.querySelector('#min');
// var sec_span = document.querySelector('#sec');

// var hr = 0;
// var min = 0;
// var sec = 0;

// var stopTime = true;

// function startTimer(){

//     if(stopTime == true){
//         stopTime =false;
//         timerCycle();
//     }

// }

// function stopTimer(){
//     if(stopTime == false){
//         stopTime = true;
//     }
// }

// function timerCycle(){
//     if(stopTime == false){
//         sec = parseInt(sec);
//         min = parseInt(min);
//         hr = parseInt(hr);

//         sec = sec + 1;

//         if (sec == 60 ){
//             min = min + 1;
//             sec = 0 ;

//         }

//         if (min == 60 ){
//             hr = hr +1;
//             min = 0;
//             sec = 0;

//         }

//         if ( sec < 10 ){
//             sec = '0'+ sec;

//         }

//         if (min < 10 ){
//             min = '0'+ min;
//         }

//         if (hr < 10 ){
//             hr = '0'+hr;
//         }

//         hr_span.innerHTML = hr;
//         min_span.innerHTML = min;
//         sec_span.innerHTML =sec;

//         setTimeout('timerCycle()',1000);
//     }
// }

var hr_span = document.querySelector('#hr');
var min_span = document.querySelector('#min');
var sec_span = document.querySelector('#sec');
var start_button = document.querySelector('#startTimer');
var hr = 0;
var min = 0;
var sec = 0;

var stopTime = true;

// Check if timer is already running
if (localStorage.getItem('startTime')) {
  var startTime = parseInt(localStorage.getItem('startTime'));
  var currentTime = Math.floor(Date.now() / 1000);
  var elapsedTime = currentTime - startTime;

  hr = Math.floor(elapsedTime / 3600);
  min = Math.floor((elapsedTime % 3600) / 60);
  sec = elapsedTime % 60;

  stopTime = false;
  timerCycle();
  start_button.classList.remove('btn-outline-success')
  start_button.innerHTML ='<i class="fa-solid fa-pause me-3 fs-4"></i>Pause';
  start_button.classList.add('btn-outline-warning')
  start_button.setAttribute('onclick','timerpause()')
}



function timerpause() {
    if (stopTime == false) {
      stopTime = true;
      // Store the timer values in localStorage
      storedValues = { hr: hr, min: min, sec: sec };
      localStorage.setItem('storedValues', JSON.stringify(storedValues));
      start_button.innerHTML = '<i class="fa-solid fa-play me-3 fs-4"></i>Restart';
      start_button.setAttribute('onclick', 'timerRestart()');
    }
  }
  
  function timerRestart() {
    if (storedValues) {
      hr = storedValues.hr;
      min = storedValues.min;
      sec = storedValues.sec;
      stopTime = false;
      localStorage.removeItem('storedValues');
      timerCycle();
      start_button.innerHTML = '<i class="fa-solid fa-pause me-3 fs-4"></i>Pause';
      start_button.setAttribute('onclick', 'timerpause()');
    }
  }


function startTimer() {
  if (stopTime == true) {
    stopTime = false;
    var startTime = Math.floor(Date.now() / 1000);
    localStorage.setItem('startTime', startTime.toString());
    timerCycle();
    start_button.innerHTML ='<i class="fa-solid fa-pause me-3 fs-4"></i>Pause';
    start_button.classList.add('btn-outline-warning')
    start_button.setAttribute('onclick','timerpause()')
  }
}

function stopTimer() {
  if (stopTime == false) {
    stopTime = true;
    localStorage.removeItem('startTime');
    start_button.innerHTML ='<i class="fa-solid fa-clock me-3 fs-4"></i>clock In';
    start_button.classList.remove('btn-outline-warning')
    start_button.classList.add('btn-outline-success')
    start_button.setAttribute('onclick','startTimer()')
    hr = '00';
    min = '00';
    sec ='00';
  }
}

function timerCycle() {
  if (stopTime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }

    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10) {
      sec = '0' + sec;
    }

    if (min < 10) {
      min = '0' + min;
    }

    if (hr < 10) {
      hr = '0' + hr;
    }

    hr_span.innerHTML = hr;
    min_span.innerHTML = min;
    sec_span.innerHTML = sec;

    setTimeout(timerCycle, 1000);
  }
}