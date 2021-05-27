var currentMillis = new Date().getTime();
var currentYear = Math.floor(currentMillis / (1000 * 60 * 60 * 24 * 30 * 12)) + 1969;
var birthYear = "";
var validBirthYear = false;
while (birthYear === "" || birthYear === null || validBirthYear === false) {
				birthYear = prompt("Enter your birth year:");
				if (birthYear === null) {
								alert("Please proceed!");
				}
				else if (birthYear === "") {
								alert("You entered nothing!");
				}
				else if (birthYear != Number(birthYear)) {
								alert("This isn't a number!");
				}
				else if (birthYear.indexOf(".") !== -1) {
								alert("Year must be an integer!")
				}
				else if (birthYear.length !== 4) {
								alert("Input should contain 4 digits!");
				}
				else if (birthYear > currentYear) {
								alert("Given year has yet to come!");
				}
				else if (birthYear < 0) {
								alert("Negative year is not possible!")
				}
				else {
								validBirthYear = true;
				}
}

var age = currentYear - birthYear;

document.write("<div class='page'>");
document.write("<h1>Age Calculator</h1>");
document.write("<p><span class='sub-heading'>Your Birth Year: </span>" + birthYear + "</p>");
document.write("<p><span class='sub-heading'>Current Year: </span>" + currentYear + "</p>");
document.write("<h2>Result</h2>");
if (currentYear == birthYear) {
				document.write("<p>You are less than a year old.</p>")
}
else if (birthYear < 1870) {
				document.write("<p>You are WAY too old.</p>")
}
else {
   document.write("<p>You've been on Earth for " + age + " years.</p>");
}
