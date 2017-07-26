function printReverse(arrayGiven){
	var arraylength = arrayGiven.length;
	// console.log(arraylength);
	for(var i = arraylength - 1; i >= 0; i--){
		console.log(arrayGiven[i]);
	}
}

function isUniform(arrayGiven){
	uniform = false;
	for(var i = 0; i <= (arrayGiven.length - 2); i++){
		// console.log("interation" + i);
		if(arrayGiven[i] === arrayGiven[i+1]){
			// console.log(arrayGiven[i] + ", " + arrayGiven[i+1]);
			uniform = true;
		} else {
			// console.log(arrayGiven[i] + ", " + arrayGiven[i+1]);
			uniform = false;
			return uniform;
		}
	}
	console.log(uniform);
}

function sumArray(arrayGiven) {
	var sum = 0;
	arrayGiven.forEach(function(numberGiven){
		sum += numberGiven;
	});
	console.log(sum);
	return sum;
}

function max(arrayGiven) {
	var maxNum = arrayGiven[0];
	arrayGiven.forEach(function(numberGiven){
		if(numberGiven > maxNum){
			maxNum = numberGiven;
		}
	});
	console.log(maxNum);
	return maxNum;
}