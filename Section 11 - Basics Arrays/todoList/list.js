var choice = prompt("What would you like to do?");
var todos = ["Buy New Turtle"];
var newTodo;

function createNewTodo(){
	newTodo = prompt("Enter new todo:");
	todos.push(newTodo);
	console.log("New Todo Added! :D");
}

function listTodos(){
	console.log("********");
	todos.forEach(function(todo, i){
		console.log(i + ": " + todo);
	});
	console.log("********");
}

function deleteTodo(){
	// ask for index of todo to be deleted
	var index = prompt("Enter index of todo to delete");
	//delete that todo
	//splice()
	todos.splice(index, 1);
	console.log("Deleted Todo");

}

while(choice !== "quit"){
	if(choice === "new") {
		createNewTodo();
	} else if(choice === "list"){ 
		listTodos();
	} else if(choice === "delete"){
		deleteTodo();
	} else {
		alert("Not a valid input. Please try again")
	}
	choice = prompt("What would you like to do?");
}


console.log("Thank you for using the app my friend :D");