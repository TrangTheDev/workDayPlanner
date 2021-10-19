/*TO DO*/
//when i open the day planner the current day is displayed at the top of the calendar
//The date should have a ticking clock, every second the clock should update

let clockEl = document.getElementById ("current-day");
const timeblocksContainerEl = document.getElementById ("timeblocks-container");
let currentHour = moment().hour();
console.log(currentHour);

setInterval(function(){
clockEl.textContent = moment().format('DD-MMM-YYYY HH:mm:ss')
},1000);


let times = [
"9:00",
"10:00",
"11:00",
"12:00",
"13:00",
"14:00",
"15:00",
"16:00",
"17:00"];


function createTimeblock (time) {
  //a timeblock contain 3 col
  const row = document.createElement('div');
  row.setAttribute('class', 'row');
  
  //col 1 is the time
  const colTime = document.createElement('div');
  colTime.setAttribute('class', 'col-2 col-time time-block');
  colTime.textContent = time;
  row.appendChild(colTime);

  //col 2 is the text area
  const colTextArea = document.createElement('div');
  colTextArea.setAttribute('class', 'col-8 col-text-area textarea');
  const textArea = document.createElement('textArea');
  textArea.setAttribute('rows', "2, 13")
  textArea.setAttribute('id', time)
  //input text should show next time when the user revisit the page
  let saveItem = localStorage.getItem(time);
  if (saveItem !== null){
    //if local storafe is not empty then save the item inside the local storage on the text area
    textArea.value = saveItem
  }
  
  colTextArea.appendChild(textArea);
  row.appendChild(colTextArea)

  //col 3 is the button
  const colBtn = document.createElement('div');
  colBtn.setAttribute('class', 'col-2 col-button');
  const button = document.createElement('button');
  button.setAttribute('class','btn btn primary saveBtn')
  button.textContent = '+';
  colBtn.appendChild(button);
  row.appendChild(colBtn);

  //create a save function
  function saveInput(){
    const textarea = button.parentNode.previousSibling.children[0].value;
    console.log(button.parentNode.previousSibling.children[0].value);

    const userInput = textArea.value;
    console.log(userInput)
   //we want to grab the user input from the text area (DOM manipulation)
  
   //save it to local storage
  localStorage.setItem(time,userInput);
  }

  //what would happen if user click on the button
  button.addEventListener('click',function(event){
    event.preventDefault();
    //we want to save the text in the current time block
    const button = event.target;
    saveInput();
  });
  //what would happen if the user hit enter in the  text area
    //do the same thing with the button 
  textArea.addEventListener('keyup',function(e){
    e.preventDefault();
    if (e.key === 13) {
      saveInput();
      console.log("this is keyup");
    }
  });

  return row;
}


//we want to see a list of timeclock
//for every hour 12am-12am we want a timeblock
for (let i = 0; i < times.length; i++) {
  const time = times[i];
  const timeblock = createTimeblock(time);
  timeblocksContainerEl.appendChild(timeblock);
  //when i am presented with timeblocks each time block is color coded to indicate 
  //If time block is passed we want to give background color CSS class
  const timeCompare = i + 9;
  console.log(timeCompare);
  console.log(currentHour);
  if (timeCompare < currentHour) {
    console.log("this is the past");
    timeblock.classList.add('past');
  }
  //if the timeblock is current we want to give background color CSS class
  else if (timeCompare === currentHour) {
    console.log("this is the present");
    timeblock.classList.add('present');
  }
  //If the timeblock is future we want to give background color CSS class
  else if (timeCompare > currentHour) {
    console.log("this is the future");
    timeblock.classList.add('future');
  }
};


  










