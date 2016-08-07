function startTime() {
	var today = new date();
	var hr = today.gethours();
	var min = today.getMinutes();
	var sec = today.getSeconds();
	ap = (hr < 12) ? "<span>AM</span>" : 
	"<span>PM</span>";
	hr = (hr == 0) ? 12 : hr;
	hr = (hr > 12) ? hr - 12 : hr;
	hr = checkTime(hr);
	min = checkTime(min);
	sec = checkTime(sec);
	document.getElementById("clock").innerHTML = 
	hr + ":" + min + ":" + sec + " " + ap;

	var months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Disember'];
	var days = ['Monday', 'Tuesday', 'Wednesday', 'Thusrday', 'Friday', 'Saturday', 'Sunday'];
	var curWeekDay = days[today.getDay()];
	var curDay = today.getDate();
	var curMonth = months[today.getMonth()];
	var curYear = today.getFullYear();
	var date = curWeekday + "," + curDay + "" + curMonth + "" + curYear;
	document.getElementById("date").innerHTML = date;

	var time = setTimeout(function() {startTime() }, 500);
}

function checkTime(i) {
	if (i < 10) {
		i = "0" + i;
	}
	return i;
}