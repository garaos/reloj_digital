function fClock() {
    var dateHour = new Date();
    var hour = dateHour.getHours();
    var minute = dateHour.getMinutes();
    var second = dateHour.getSeconds();
    var meridiem = "AM";

    if (hour == 0) {
        hour = 12;
    }
    if (hour > 12) {
        hour = hour - 12;
        meridiem = "PM";
    }

    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;

    var time = hour + ":" + minute + ":" + second + " " + meridiem;
    document.getElementById("nClock").innerText = time;
    setTimeout(fClock, 500);
}

fClock();