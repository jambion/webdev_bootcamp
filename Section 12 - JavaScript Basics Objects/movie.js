movieDB = [
	{ movieName: "Star Wars: The Empire Strikes Back",
	 haveSeen: true,
	 rating: 5 },
	{ movieName: "Wayne's World",
	 haveSeen: true,
	 rating: 5 },
	{ movieName: "Baby Driver",
	 haveSeen: false,
	 rating: 5 },
	 { movieName: "Dunkirk",
	 haveSeen: false,
	 rating: 5 }
]

for(var i = 0; i < movieDB.length; i++){
	if(movieDB[i].haveSeen === true){
		console.log("You have seen \"" + movieDB[i].movieName + "\" - " + 
			movieDB[i].rating + " stars");
	} else {
		console.log("You have not seen \"" + movieDB[i].movieName + "\" - " + 
			movieDB[i].rating + " stars");
	}
	
}