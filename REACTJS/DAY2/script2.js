const displaySeconds=document.querySelector('#seconds');
const displayMinutes=document.querySelector('#minutes');
const displayHours=document.querySelector('#hours');
let s=0,m=0,h=0;
var interval;
function startTimer(){
    interval=setInterval(() => {
        s+=1
        displaySeconds.innerHTML=s
        if(s=59)
        {
            s=0
            m+=1
            displayMinutes.innerHTML=m
            if(m=59)
            {
                m=0
                h+=1
                 displayHours.innerHTML=h
            }
        }
    }, 1000);
}

function stopTimer(){
    clearInterval(interval)
}


const startButton=document.querySelector(".start-button")
startButton.addEventListener("click",startTimer)
const stopbutton=document.querySelector(".stop-button")
stopbutton.addEventListener("click",stopTimer);
