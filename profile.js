const hourE1 = document.getElementById("hour");
const minuteE1 = document.getElementById("minutes");
const secondE1 = document.getElementById("seconds");
const ampmE1 = document.getElementById("ampm");

function updateClock(){  
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if(h > 12){
        
        h= h-12
        ampm = "PM"
    }

    h = h<10 ? "0" + h: h;
    m = m<10 ? "0" + m: m;
    s = s<10 ? "0" + s: s; 

    hourE1.innerText = h;
    minuteE1.innerText = m;
    secondE1.innerText = s;
    ampmE1, (innerText = ampm);
    setTimeout(()=>{
        updateClock()
    }, 1000)
}

updateClock()

//date

const dateElement = document.querySelector(".date");
function formatDate (date) {
    const DAYS = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    const MONTHS = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];

      return `${DAYS[date.getDay()]}, ${MONTHS[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
 }
 
 setInterval(() =>{
    const now = new Date();

 setInterval(() =>{
    const now = new Date();

    dateElement.textContent = formatDate(now);
  }, 200);

  document.addEventListener("DOMContentLoaded", function () {
    // Function to get current UTC milliseconds
    function getCurrentUTCMilliseconds() {
        return Date.now();
    }

    const utcMillisecondsElement = document.getElementById("utc-milliseconds");

    function updateUTCMilliseconds() {
        const currentUTCMilliseconds = getCurrentUTCMilliseconds();
        utcMillisecondsElement.textContent = `Current UTC Milliseconds: ${currentUTCMilliseconds}`;
    }

    updateUTCMilliseconds();
    setInterval(updateUTCMilliseconds, 1000); 
});     

    dateElement.textContent = formatDate(now);
  }, 200);
