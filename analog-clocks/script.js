const $ = (selector) => {
	return document.querySelector(selector);
};

function update() {
	const date = new Date();
	const seconds = date.getSeconds();
	const mins = date.getMinutes();
	const hour = date.getHours();

	const secondsDeg = ((seconds / 60) * 360) + 90;
	$('.sec-pointer').style.transform = `rotate(${secondsDeg}deg)`;

	const minsDeg = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
	$('.min-pointer').style.transform = `rotate(${minsDeg}deg)`;

	const hourDeg = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
	$('.hour-pointer').style.transform = `rotate(${hourDeg}deg)`;

	$('.digital-clock').innerHTML = hour+":"+mins+":"+seconds;
};

setInterval(update,1000);