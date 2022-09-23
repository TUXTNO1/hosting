const horaEl= document.getElementById("horas");
const minutosEl= document.getElementById("minutos");
const segundosEl= document.getElementById("segundos");
const ampmEl= document.getElementById("ampm");

function actualReloj(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm="AM";

    h = h<10 ? "0"+ h: h;
    m = m<10 ? "0"+ m: m;
    s = s<10 ? "0"+ s: s;

    if (h>12){
        h = h- 12;
        ampm="PM";
    }
    horaEl.innerText = h;
    minutosEl.innerText = m;
    segundosEl.innerText = s;
    ampmEl.innerText = ampm;

    setTimeout(()=>{
        actualReloj()
    },1000)
}
actualReloj();