//Find the current hour
var hourNow = today.getHours();
var greeting;

//Display the appropriate greeting base on the current time
if (hourNow > 18){
  greeting = "Good Evening!";
} else if (hourNow > 11){
  greeting = "Good Afternoon!";
} else if (hourNow > 0){
  greeting = "Good Morning!";
} else {
  greeting = "Welcome";
}

document.write(`<h3>` + greeting + `</h3>`);
