// accept a single parameter of type string.  return the reverse of the string.  e.g. Hello = olleH;

function reverse(s1){
	if(typeof s1 !== "string") {
		console.log("Please enter a string");
		break;
	}
	var s2 = "";
	for (var i = 0; i < s1.length; i++) {
		s2 = s2 + s1[s1.length - i];
	}
	return s2;
}

// accept an array of numbers and return true if the sum of all the positive numbers is greater than the sum of the absolute value of all negative numbers

function calculateSums(a1) {
	var pos = 0;
	var neg = 0;
	var counter = 0;
	while (counter < a1.length) {
		if(a1[counter] < 0){
			neg = neg + abs(a1[counter]);
		} else {
			pos = pos + a1[counter];
		}
		counter++;
	}
	return (pos > neg);
}