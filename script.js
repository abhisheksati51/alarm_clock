// create  a function to convert time to string

const getTimeString = ({hours,minutes,seconds,zone})=>
{
    // here this condition is check if minutes/10 is less than 1 than add 0 before the number
    if(minutes/10<1)
    {
        minutes ="0"+minutes;
    }
  // here this condition is check if seconds/10 is less than 1 than add 0 before the number
    
  if(seconds/10 < 1)
    {
        seconds ="0"+seconds;
    }

    return `${hours}:${minutes}:${seconds} ${zone}`;
};
  
// function to display curren time on screen

const renderTime =() =>
{
    var currentTime = document.getElementById("current-time");

    // create a new object

    const curretDate = new Date();

    var hours = curretDate.getHours();
    var minutes = curretDate.getMinutes();
    var seconds = curretDate.getSeconds();

    // We determine if it's "AM" or "PM" based on whether the hours are greater than or equal to 12.
  
    var zone = hours >=12 ? "PM":"AM";

     // If the hours are greater than 12, we convert them to a 12-hour format.

    if(hours>=12)
    {
        hours = hours%12;
    }
    // We're calling another function called "getTimeString" to create a formatted time string
    const timeString = getTimeString({hours,minutes,seconds,zone});
    currentTime.innerHTML = timeString;


};

// We're setting the content of the "currentTime" element to the formatted time string.
setInterval(renderTime,1000);