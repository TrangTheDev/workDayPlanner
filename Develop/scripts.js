var today =[],
today = moment().format('MMMM Do YYYY');
var currentDay = document.getElementById ("currentDay");
currentDay.textContent = "Today's Date: " + (today);
console.log(today);



timeSlots = [
time = "12:00",
"1:00", 
"2:00", 
"3:00", 
"4:00",
"5:00",
"6:00",
"7:00",
"8:00",
"9:00",
"10:00",
"11:00",
"12:00",
"13:00",
"14:00",
"15:00",
"16:00",
"17:00",
"18:00",
"19:00",
"20:00",
"21:00"];
var timeSlots = $("<p></p>").text(time);
console.log(time);
$("body").append(time);
var timeValue = $("<p></p>").text(time.length-1);
$("body").append[time.length-1];
console.log(time.length-1);






/*var addSlots = document.getElementById ("time-col");
addSlots.textContent = (timeSlots.time)
console.log(timeSlots.time);

$(timeSlots).append("some appended text.");*/




