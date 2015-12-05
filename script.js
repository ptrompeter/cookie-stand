console.log('Loaded');
var pikePlace = {
	minCust: 17,
	maxCust: 88,
	avg: 5.2,
	randCust: function(max, min){
		console.log(max);
		console.log(min);
		var seed = Math.random();
		console.log(seed);
		return Math.floor(seed * (max - min) + min);
	}
};

function arrayMaker(hours, max, min, avg){
	array = [];
	for(var i=0; i < hours; i++){
		array.push(Math.ceil(pikePlace.randCust(max, min) * avg));
	}
	return array;
}
