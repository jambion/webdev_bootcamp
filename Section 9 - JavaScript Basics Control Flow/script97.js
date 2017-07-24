var age = Number(prompt("How old are you?"));

if(age < 0){
	console.log("No negatives!")
}
else if(age < 18){
	console.log("Sorry, you are not old enough to enter the venue");
}
else if(age < 21){
	console.log("You may enter, but you cannot drink");
} 
else if(age === 21){
	console.log("Happy 21st birthday! You can also turn up!")
}
else {
	console.log("You can turn up");
}

if((age % 2) !== 0){
	console.log("Your age is odd");
} 

if(age % Math.sqrt(age) === 0) {
	console.log("Perfect square");
}