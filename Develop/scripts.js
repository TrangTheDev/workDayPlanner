/*TO DO*/
//when i open the day planner the current day is displayed at the top of the calendar
//The date should have a ticking clock, every second the clock should update

let clockEl = document.getElementById ("current-day");
const timeblocksContainerEl = document.getElementById ("timeblocks-container");

setInterval(function(){
clockEl.textContent = moment().format('DD-MMM-YYYY HH:mm:ss')
},1000);


let times = [
"24:00",
"1:00", 
"2:00", 
"3:00", 
"4:00",
"5:00",
"6:00",
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
"21:00",
"22:00",
"23:00"];


function createTimeblock (time) {
  //a timeblock contian 3 col
  const row = document.createElement('div');
  row.setAttribute('class', 'row');
  
  //col 1 is the time
  const colTime = document.createElement('div');
  colTime.setAttribute('class', 'col-2 col-time');
  colTime.textContent = time;
  row.appendChild(colTime);

  //col 2 is the text area
  const colTextArea = document.createElement('div');
  colTextArea.setAttribute('class', 'col-8 col-text-area');
  const textArea = document.createElement('textArea');
  textArea.setAttribute('rows', "3, 13")
  textArea.setAttribute('id', time)
  colTextArea.appendChild(textArea);
  row.appendChild(colTextArea)

  //col 3 is the button
  const colBtn = document.createElement('div');
  colBtn.setAttribute('class', 'col-2 col-button');
  const button = document.createElement('button');
  button.setAttribute('class','btn btn primary')
  button.textContent = '+';
  colBtn.appendChild(button);
  row.appendChild(colBtn);

  //what would happen if user click on the button
  button.addEventListener('click',function(event){
    event.preventDefault();
    //we want to save the text in the current time block
    const button = event.target;
    const textarea = button.parentNode.previousSibling.children[0].value;
    console.log(button.parentNode.previousSibling.children[0].value);


    const userInput = textArea.value;
    console.log(userInput)
   //we want to grab the user input from the text area (DOM manipulation)
  
   //save it to local storage
  localStorage.setItem(time,userInput);

  })
  

  //this text should show next time when the user revisit the page

  //what would happen if the user hit enter in the  text area
  //do the same thing with the button 
    

  return row;
}


//we want to see a list of timeclock
//for every hour 12am-12am we want a timeblock
for (let index = 0; index < times.length; index++) {
  const time = times[index];
  const timeblock = createTimeblock(time);
  timeblocksContainerEl.appendChild(timeblock)
}



//when i scroll down i am presented with timeblocks for that day



//when i am presented with timeblocks each time block is color coded to indicate 
//If time block is passed we want to give background color CSS class

//if the timeblock is current we want to give background color CSS class

//If the timeblock is future we want to give background color CSS class




