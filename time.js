//Find the current hour
var d = new Date();
var time = d.getHours();


//Display the appropriate greeting base on the current time
if (time < 12) {
  document.write("<h3>Good Morning!</h3>");
}
if (time > 12) {
  document.write("<h3>Good afternoon!</h3>");
}
if (time == 12) {
  document.write("<h3>Good Evening!</h3>");
}

document.write(`<h3>` + greeting + `</h3>`);
