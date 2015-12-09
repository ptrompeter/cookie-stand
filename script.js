console.log('Loaded');

// Element grabbers

var elForm = document.getElementById("storeForm");
var elName = document.getElementById('subBut');

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
	return Math.floor(seed * (max - min + 1) + min);
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
	var sum = 0;
	var trEl = document.createElement("tr");
	for (var i=0; i < cByHour.length + 2; i++){
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

fullTbl(stores);
elForm.addEventListener('submit', function(e){
	e.preventDefault();
	var newStore = new Store(e.target.sName.value, parseInt(e.target.min.value), parseInt(e.target.max.value), parseInt(e.target.avg.value), hours1);
	tblRow(stores[stores.length - 1]);
});


