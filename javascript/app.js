
/*counter*/
const countdown=()=>{
const upperDate=new Date('feb 11 , 2022 00:00:00').getTime();
const currentDate=new Date().getTime();
const diffDate=upperDate-currentDate;
const second=1000;
const minutes =second * 60;
const hours = minutes * 60;
const days =hours * 24;


const m_days=Math.floor(diffDate/days);
const m_hours=Math.floor((diffDate%days)/hours);
const m_minutes=Math.floor((diffDate%hours)/minutes);
const m_seconds=Math.floor((diffDate%minutes)/second);
var d=document.getElementById('days');
var h=document.getElementById('hours');
var m=document.getElementById('minutes');
var s=document.getElementById('seconds');
d.innerHTML=m_days +"days";
h.innerHTML=m_hours+"hours";
m.innerHTML=m_minutes +"minutes";
s.innerHTML=m_seconds +"second";
}
setInterval(countdown,1000);
/*************** */

// Get the modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("modlesign");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("creat_ac");
var btn3 = document.getElementById("sigbtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

btn2.onclick = function() {
    modlesign.style.display = "block";
}
btn3.onclick = function() {
    modlesign.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
