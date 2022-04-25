
setInterval(() => {
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let ampm = document.getElementById('ampm');

let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');

let hr_dot = document.querySelector('.hr-dot');
let min_dot = document.querySelector('.min-dot');
let sec_dot = document.querySelector('.sec-dot');

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();
let am = h >= 12 ? "PM" : "AM";

// конвертировать 24ч часы в 12ч часы:
if (h > 12){
	h = h - 12;
}

// добавить 0 перед однозначным числом:
h = (h < 10) ? "0" + h : h;
m = (m < 10) ? "0" + m : m;
s = (s < 10) ? "0" + s : s;

hours.innerHTML = h + "<br><span>"+getCorrectHours(h)+"</span>";
minutes.innerHTML = m + "<br><span>"+getCorrectMinutes(m)+"</span>";
seconds.innerHTML = s + "<br><span>"+getCorrectSeconds(s)+"</span>";
ampm.innerHTML = am;

hh.style.strokeDashoffset = 440 - (440 * h) / 12;
// 12 hrs clock
mm.style.strokeDashoffset = 440 - (440 * m) / 60;
// 60 minutes
ss.style.strokeDashoffset = 440 - (440 * s) / 60;
// 60 seconds

hr_dot.style.transform = `rotate(${h * 30}deg)`;
// 360 / 12 = 30
min_dot.style.transform = `rotate(${m * 6}deg)`;
// 360 / 60 = 6
sec_dot.style.transform = `rotate(${s * 6}deg)`;
// 360 / 60 = 6
})

function getCorrectSeconds(second) {
	if (second.toString().substr(second.toString().length - 1, 1) == 1) {
		return "Секунда"
	}	else if (second.toString().substr(second.toString().length - 1, 1) > 1 && second.toString().substr(second.toString().length - 1, 1) < 5) {
		return "Секунды"
	}	else {
		return "Секунд"
	}
}

function getCorrectMinutes(minute) {
	if (minute.toString().substr(minute.toString().length - 1, 1) == 1) {
		return "Минута"
	}	else if (minute.toString().substr(minute.toString().length - 1, 1) > 1 && minute.toString().substr(minute.toString().length - 1, 1) < 5) {
		return "Минуты"
	}	else {
		return "Минут"
	}
}

function getCorrectHours(hours) {
	if (hours == 1) {
		return "Час"
	}	else if (hours > 1 && hours < 5) {
		return "Часа"
	}	else {
		return "Часов"
	}
}
