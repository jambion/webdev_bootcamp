var choice = prompt("What would you like to do?");
var myList = [];
var newTodo;

while(choice !== "quit"){
	if(choice === "new") {
		newTodo = prompt("What would you like to add to the list?");
		myList.push(newTodo);
	} else if(choice === "list"){ 
		for(var i = 0; i < myList.length; i++){
			console.log(myList[i]);
		}
	} else {
		alert("Not a valid input. Please try again")
	}
	choice = prompt("What would you like to do?");
}