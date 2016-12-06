var obj1 = { a: 2, c: 3, d: 3};
var obj2 = { a: 1 };
var obj3 = { a: 2, c: 3};
var arOfObj = [obj1, obj2, obj3];
var arOfObj2 = [obj1, obj2, obj3];

console.log(arOfObj);
// asc - ascending
var res = objSort(arOfObj.sort(sortFunction), 'asc');
console.log(res);

console.log(arOfObj2);
// des - descending
var res = objSort(arOfObj2.sort(sortFunction), 'des');
console.log(res);

function sortFunction(a, b){
	var count = 0;
	var count1 = 0;
	for (var i in a) {
		{count++;}	
	}
	for (var j in b) {
		{count1++;}	
	}
	if(count<count1)
		 return -1 
	if(count>count1)
		 return 1  
	return 0
}

// asc - ascending
// des - descending
function objSort(arOgObjF, order) {
	if (order === "asc") {
		return arOgObjF;
	} if (order === "des") {
		return arOgObjF.reverse();
	} else  {
		return arOgObjF;
	}
}
