function add(number){
	if(number == ""){
		return 0;
	}

	if(number.includes(",") || number.includes("\\n")){
		var numArray = number.split(/[\n,]/);
		var sum = 0;
		const neg = []
		for(var i = 0; i < numArray.length; i++){
			if(parseInt(numArray[i]) < 0){
				neg.push(parseInt(numArray[i]));
			}
			if(!(parseInt(numArray[i]) > 1000)){
				sum += parseInt(numArray[i]);
			}
		}
		if(neg.length > 0){
			throw "Negatives not allowed: $[negatives.join(', ')}";
		}else{
			return sum;
		}
	}

}

module.exports = add;