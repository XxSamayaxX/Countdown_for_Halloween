// the wanted Date
var halloweenDate = new Date("2022 10 31").getTime();
var currentYear = new Date().getFullYear();

var x = setInterval(function() {

// the Date this exact moment
var currentDate = new Date().getTime();

// getting the "left until" time
var totalSecounds = (halloweenDate - currentDate) / 1000;
var days = Math.floor(totalSecounds / 3600 / 24);
var hours = Math.floor(totalSecounds / 3600) % 24;
var minutes = minutes = Math.floor(totalSecounds / 60) % 60;
var secounds = Math.floor(totalSecounds) % 60;

// adding a 0 befor 1-9 (ps. i need to make it shorter)
if (days < 10) {days = "0" + days};
if (hours < 10) {hours = "0" + hours};
if (minutes < 10) {minutes = "0" + minutes};
if (secounds < 10) {secounds = "0" + secounds};

// repeating the years
if (currentDate > halloweenDate) {halloweenDate = new Date(`Oct 31 ${currentYear + 1} 00:00:00`)};

// fusing HTML ID with the script 
document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("secounds").innerHTML = secounds;
    
}, 1000);

// fusing HTML ID with the script
const langEL =document.querySelector('.langWrap');
const link =document.querySelectorAll('a');
const oneEL =document.querySelector('.one');
const twoEL =document.querySelector('.two');
const treeEL =document.querySelector('.tree');
const fourEL =document.querySelector('.four');

// adding the language change possebillety
link.forEach(el => {
el.addEventListener('click', () => {
    langEL.querySelector('.active').classList.remove('active');
    el.classList.add('active');

    const attr = el.getAttribute('language');
    oneEL.textContent = data[attr].one;
    twoEL.textContent = data[attr].two;
    treeEL.textContent = data[attr].tree;
    fourEL.textContent = data[attr].four;
});
});

// the information in different languages
var data = {
    "english":
    {
        "one": "Days",
        "two" : "Hours",
        "tree" : "Minutes",
        "four" : "Secounds"
    },
    "german":
    {
        "one" : "Tage",
        "two" : "Stunden",
        "tree" : "Minuten",
        "four" : "Sekunden"
    }
}
// i need to add a translator (finished)
// i need to add the possebility to restart every year new (finished)