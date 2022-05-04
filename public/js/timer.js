//date and time to count down
const Countdate = new Date("jul 25,2024 16:37:52").getTime();
 
let timer = setInterval(function(){
let now = new Date().getTime();
let timeleft = Countdate - now ;

let days = Math.floor(timeleft/(1000*60*60*24));
let hours = Math.floor((timeleft%(1000*60*60*24))/(1000*60*60));
let minutes  = Math.floor((timeleft%(1000*60*60))/(1000*60));
let seconds = Math.floor((timeleft%(1000*60))/(1000));

document.getElementById("day").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

if(timeleft<0){
    clearInterval(timer);
    document.getElementById("day").innerHTML =  "0";
document.getElementById("hours").innerHTML =  "0";
document.getElementById("minutes").innerHTML =  "0";
document.getElementById("seconds").innerHTML =  "0";
document.getElementById("end").innerHTML = "TIME UP!";
}

},1000);

 