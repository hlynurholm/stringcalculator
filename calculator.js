function add(number){
	if(number == ""){
		return 0;
	}

	if(number.includes(",") || number.includes("\\n")){
		var numArray = number.split(/[\n,]/);
		var sum = 0;
		for(var i = 0; i < numArray.length; i++){
			sum += parseInt(numArray[i]);
		}
		return sum;
	}

}

module.exports = add;