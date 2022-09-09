let kullanici = prompt("Adınız: ")
document.querySelector("#myName").innerHTML = kullanici
document.querySelector("#myName").classList.add("yellow")



function showTime(){
    const weekday = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

    const d = new Date();
    let day = weekday[d.getDay()];
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    
    document.querySelector("#myClock").innerHTML = hours + ":" + minutes + ":" + seconds + " " + day;
    document.querySelector("#myClock").classList.add("yellow");
    setTimeout(showTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }