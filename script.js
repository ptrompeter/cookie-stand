console.log('Loaded');

// Element grabbers

var dBox = document.getElementById("dataBox");

//variables I need above the store elements

var hours1 = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];

//Building a store constructor
var StoreMaker = function(name, min, max, avg, hours) {
	this.name = name;
	this.minCust = min;
	this.maxCust = max;
	this.avg = avg;
	this.hours = hours;
};

// Prototyping a randCust method
StoreMaker.prototype.randCust = function(max, min){
	var seed = Math.random();
	return Math.floor(seed * (max - min) + min);
};
StoreMaker.prototype.storePush = function(){
	stores.push(this);
};
// Hard Coded store elements.

var pikePl = {
	name: "Pike Place Market",
	minCust: 17,
	maxCust: 88,
	avg: 5.2,
	hours: hours1,
	randCust: function(max, min){
		var seed = Math.random();
		return Math.floor(seed * (max - min) + min);
	}
};

var seaTac = {
	name: "SeaTac Airport",
	minCust: 6,
	maxCust: 44,
	avg: 1.2,
	hours: hours1,
	randCust: function(max, min){
		var seed = Math.random();
		return Math.floor(seed * (max - min) + min);
	}
};

var southC = {
	name: "Southcenter Mall",
	minCust: 11,
	maxCust: 44,
	avg: 1.9,
	hours: hours1,
	randCust: function(max, min){
		var seed = Math.random();
		return Math.floor(seed * (max - min) + min);
	}
};

var bellSq = {
	name: "Bellevue Square",
	minCust: 20,
	maxCust: 48,
	avg: 3.3,
	hours: hours1,
	randCust: function(max, min){
		var seed = Math.random();
		return Math.floor(seed * (max - min) + min);
	}
};

var alki = {
	name: "Alki",
	minCust: 3,
	maxCust: 24,
	avg: 2.6,
	hours: hours1,
	randCust: function(max, min){
		var seed = Math.random();
		return Math.floor(seed * (max - min) + min);
	}
};

//need an array of all of the stores.  When we use a construtor we'll need a function to push the stores to this array.

var stores = [pikePl, seaTac, southC, bellSq, alki];

//Function Declarations

//This array generates an array of hourly cookies. Imput the number of hours the store is open, the hourly maxCust, minCust, and avg of the store, and hit it. The pikePl randCust method is a bit of a red herring - I'm using it because the method is identical for each store.

function arrayMaker(hours, max, min, avg){
	array = [];
	for(var i=0; i < hours; i++){
		array.push(Math.ceil(pikePl.randCust(max, min) * avg));
	}
	return array;
}

//makes a new list printing out a day's sales at a single store
function storeDay(store){
	var cByHour = arrayMaker(store.hours.length, store.maxCust, store.minCust, store.avg);
	var sum = 0;

	//adds new ul with name of store
	var ulEl = document.createElement("ul");
	ulEl.innerHTML = store.name;
	dBox.appendChild(ulEl);

	//adds list elements to ul with report by hours.
	for (i = 0; i < store.hours.length ; i++){
		var liEl = document.createElement("li");
		liEl.innerHTML = store.hours[i] + ": " + cByHour[i] + " cookies";
		dBox.lastChild.appendChild(liEl);
		sum += cByHour[i];
	}
	liEl.innerHTML = "Total: " + sum + " cookies";
	dBox.lastChild.appendChild(liEl);
}

//prints out the data for every store!
function allStores(stores){
	for (var j = 0; j < stores.length; j++){
		storeDay(stores[j]);
	}
}

//function calls
allStores(stores);


