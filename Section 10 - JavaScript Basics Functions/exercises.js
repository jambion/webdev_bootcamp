console.log("isEven(): ");

function isEven(num) {
	if(num % 2 === 0){
		return true;
	} else {
		return false;
	}
}
isEven(4);
isEven(21);
isEven(68);
isEven(333);

console.log("factorial()");

function factorial(num) {
	// var fact = num;
	console.log(num);
	if(num === 0){
		return 1;
	}	 
	for(var i = num; i > 0; i--){
		console.log(num);
		num = num * (i - 1);
	}
	console.log(num);
	return num;
}

console.log("kebabToSnake()");

function kebabToSnake(kebab){
	var snake = kebab.replace("-", "_");
	console.log(snake);
	return snake;
}