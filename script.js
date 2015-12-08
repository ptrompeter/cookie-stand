console.log('Loaded');

// Element grabbers

var dBox = document.getElementById("dataBox");
var tBox = document.getElementById("table");
var thBox = document.getElementById("tHead");
var tbBox = document.getElementById("tBody");
var bfBox = document.getElementById("tFoot");

//variables I need above the store elements

var hours1 = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
var stores = [];
//Building a store constructor
var Store = function(name, min, max, avg, hours) {
	this.name = name;
	this.minCust = min;
	this.maxCust = max;
	this.avg = avg;
	this.hours = hours;
	stores.push(this);
};

// Prototyping a randCust method
Store.prototype.randCust = function(max, min){
	var seed = Math.random();
	return Math.floor(seed * (max - min) + min);
};

var pikePl = new Store("Pike Place Market", 17, 88, 5.2, hours1);

var seaTac = new Store("SeaTac Airport", 6, 44, 1.2, hours1);

var southC = new Store("Southcenter Mall", 11, 44, 1.9, hours1);

var bellSq = new Store("Bellevue Square", 20, 48, 3.3, hours1);

var alki = new Store("Alki", 3, 24, 2.6, hours1);

function arrayMaker(hours, max, min, avg){
	array = [];
	for(var i=0; i < hours; i++){
		array.push(Math.ceil(pikePl.randCust(max, min) * avg));
	}
	return array;
}

//This function makes a table row for a store.
function tblRow(store){
	//makes an array of a day at a store
	var cByHour = arrayMaker(store.hours.length, store.maxCust, store.minCust, store.avg);
	console.log(cByHour);
	var sum = 0;
	var trEl = document.createElement("tr");
	for (i=0; i < cByHour.length + 2; i++){
		var tdEl = document.createElement("td");
		if (i === 0) {
			tdEl.innerHTML = store.name; 
		} else if (i < cByHour.length + 1){
			tdEl.innerHTML = cByHour[i-1];
			sum += cByHour[i-1];
		} else {
			tdEl.innerHTML = sum;
		}
		// console.log(tdEl);
		trEl.appendChild(tdEl);
	}
	tbBox.appendChild(trEl);
}

//this function renders a full table of daily sales data.
function fullTbl(stores){
		//this generates the top line of my table
	var topLineArray = arrayMaker(stores[0].hours.length, stores[0].maxCust, stores[0].minCust, stores[0].avg);
	var sum = 0;
	var trEl = document.createElement("tr");

	for (var i=0; i < topLineArray.length + 2; i++){
		var thEl = document.createElement("th");
		if (i === 0) {
			thEl.innerHTML = "Location"; 
		} else if (i === topLineArray.length + 1){
			thEl.innerHTML = "Total";
		} else {
			thEl.innerHTML = stores[0].hours[i-1];
		}

		trEl.appendChild(thEl);
	}
	thBox.appendChild(trEl);
	for (var i=0 ; i < stores.length ; i++){
		tblRow(stores[i]);
	}
}

//makes a new list printing out a day's sales at a single store
// function storeDay(store){
// 	var cByHour = arrayMaker(store.hours.length, store.maxCust, store.minCust, store.avg);
// 	var sum = 0;


// 	//adds new ul with name of store
// 	var ulEl = document.createElement("ul");
// 	ulEl.innerHTML = store.name;
// 	dBox.appendChild(ulEl);

// 	//adds list elements to ul with report by hours.
// 	for (i = 0; i < store.hours.length ; i++){
// 		var liEl = document.createElement("li");
// 		liEl.innerHTML = store.hours[i] + ": " + cByHour[i] + " cookies";
// 		dBox.lastChild.appendChild(liEl);
// 		sum += cByHour[i];
// 	}
// 	liEl.innerHTML = "Total: " + sum + " cookies";
// 	dBox.lastChild.appendChild(liEl);
// }

// //prints out the data for every store!
// function allStores(stores){
// 	for (var j = 0; j < stores.length; j++){
// 		storeDay(stores[j]);
// 	}
// }

// //function calls
// allStores(stores);
// salesTbl(pikePl);
// for (key in stores[0]){
// 	console.log(key);
fullTbl(stores);


