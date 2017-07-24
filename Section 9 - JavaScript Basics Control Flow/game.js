var secretNumber = 7;


var guess = Number(prompt("Guess a number"));
// alert(guess);

if(guess === secretNumber) {
	alert("Very nice! Correctomundo!!");
} 
else if(guess < secretNumber) {
	alert("Your number is too low. Guess again bruh!")
}
else if(guess > secretNumber){
	alert("Your number is too high. Guess again bruh!");
}
else {
	alert("Not a valid input")
}