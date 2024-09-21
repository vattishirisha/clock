
setInterval(()=>{let hours =document.querySelector("#hours")
let minutes =document.querySelector("#min")
let seconds =document.querySelector("#sec")

let currentHour=new Date().getHours();
let currentMin=new Date().getMinutes();
let currentSec=new Date().getSeconds();

if(currentHour>12)
{
    hours.innerHTML=currentHour-12
}
else
{
hours.innerHTML=currentHour
}
if(currentMin<10)
{
    min.innerHTML=$0;{currentMin}
}
else{
min.innerHTML=currentMin
}
if(currentMin<10)
    {
        secinnerHTML=$0;{currentSec}
    }
    else{
        sec.innerHTML=currentSec

    }

},1000)