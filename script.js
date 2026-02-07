const clock = document.getElementById("clock");
const sw = document.getElementById("stopwatch");
const timer = document.getElementById("timer");
const min = document.getElementById("min");

setInterval(() => {
  const d = new Date();
  clock.textContent =
    d.toLocaleTimeString("en-GB");
}, 1000);

/* STOPWATCH */
let s = 0, swInt;
function swStart() {
  if (swInt) return;
  swInt = setInterval(() => {
    s++;
    sw.textContent =
      new Date(s * 1000).toISOString().substr(11, 8);
  }, 1000);
}
function swStop() { clearInterval(swInt); swInt = null; }
function swReset() { swStop(); s = 0; sw.textContent = "00:00:00"; }

/* TIMER */
let t = 0, tInt;
function tStart() {
  if (tInt) return;
  if (!t) t = min.value * 60;
  tInt = setInterval(() => {
    if (t <= 0) return tStop();
    t--;
    timer.textContent =
      String(Math.floor(t / 60)).padStart(2,"0") + ":" +
      String(t % 60).padStart(2,"0");
  }, 1000);
}
function tStop() { clearInterval(tInt); tInt = null; }
function tReset(){
  t.stop;
  timer.textContent="00:00";
}
