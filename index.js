const d = document.getElementById("day");
const h = document.getElementById("hour");
const m = document.getElementById("minute");
const s = document.getElementById("second");
const newYearTime = new Date("Jan 1, 2025 00:00:00").getTime();
function updateCountDown() {
    const now = new Date().getTime();
    const gap = newYearTime - now;
    const sec = 1000;
    const min = sec*60;
    const hour = min*60;
    const day = hour*24;
    const d1 = Math.floor(gap/day);
    const h1 = Math.floor((gap%day)/hour);
    const m1 = Math.floor((gap%hour)/min);
    const s1 = Math.floor((gap%min)/sec);
    d.innerText = d1;
    h.innerText = h1;
    m.innerText = m1;
    s.innerText = s1;
}
updateCountDown();
setInterval(updateCountDown,1000);