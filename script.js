console.log('Loaded');
var pikePl = {
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

var seaTac = {
	minCust: 6,
	maxCust: 44,
	avg: 1.2,
	randCust: function(max, min){
		console.log(max);
		console.log(min);
		var seed = Math.random();
		console.log(seed);
		return Math.floor(seed * (max - min) + min);
	}
};

var southC = {
	minCust: 11,
	maxCust: 44,
	avg: 1.9,
	randCust: function(max, min){
		console.log(max);
		console.log(min);
		var seed = Math.random();
		console.log(seed);
		return Math.floor(seed * (max - min) + min);
	}
};

var bellSq = {
	minCust: 20,
	maxCust: 48,
	avg: 3.3,
	randCust: function(max, min){
		console.log(max);
		console.log(min);
		var seed = Math.random();
		console.log(seed);
		return Math.floor(seed * (max - min) + min);
	}
};

var alki = {
	minCust: 3,
	maxCust: 24,
	avg: 2.6,
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
		array.push(Math.ceil(pikePl.randCust(max, min) * avg));
	}
	return array;
}
