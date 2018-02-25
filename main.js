const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const clockInfo = document.querySelector('.clock-info');

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondDegrees = ((seconds/60) * 360)+90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    
    const mins = now.getMinutes();
    const minDegrees = ((mins/60) * 360)+90;
    minHand.style.transform = `rotate(${minDegrees}deg)`;

    const hours = now.getHours();
    const hourDegrees = ((hours/12) * 360)+90 + (360/12)*(mins/60);
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    console.log("hour "+hourDegrees);
    console.log("second "+secondDegrees);

    clockInfo.innerHTML = hours + ": " + mins + ": " + seconds;
}


setInterval(setDate, 1000);
