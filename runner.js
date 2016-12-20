function factorial(n) {
	var res = 1;
	while(n !== 1) {
		res *= n--;
	}
    return res;
}
function insertionSort(A) {
    var n = A.length;
    for (var i = 0; i < n; i++) {
		var v = A[ i ], j = i-1;
		while (j >= 0 && A[j] > v) {
			A[j+1] = A[j];
			j--;
		}
       A[j+1] = v;
	}
	return A;
}
function reverseString(st) {
	var arrStr = st.split(' ');
	arrStr.reverse();
	return arrStr.join(" ");
}
function isArrayObject(ar) {
	var n = ar.length;
	var count = 0;
	for (var i = 0; i < n; i++) {
		if (typeof (ar[i]) === "object") {
			count++;
		}
	}
	if (count == n) {
		return true;
	} else {
		return false;
	}
}

var STKit = require('./js/stkit');

//task memoizer
var insertionSortMemo = STKit.memoizer(insertionSort);
console.log(insertionSortMemo([2, 34, 4, 0, 234, 5, -5]));
console.log(insertionSortMemo([1, 15, 4, 0, 234, 5, -5]));

var factorialMemo = STKit.memoizer(factorial);
console.log(factorialMemo(5));
console.log(factorialMemo(5));
console.log(factorialMemo(6));
console.log(factorialMemo(7));
console.log(factorialMemo(2));

var stringMemo = STKit.memoizer(reverseString);
console.log(stringMemo("1 2 3 4 5"));
console.log(stringMemo("1 2 3 4 5"));
console.log(stringMemo("1 2 3 4"));

var ii = [1,2,4,5];
var obj1 = [{ a: 2, c: 3, d: 3}, { a: 5, c: 6, d: 8}];
var obj2 = [{ a: 2, c: 3, d: 3}, 1 ];

var arrMemo = STKit.memoizer(isArrayObject);
console.log("this array is of objects: " + arrMemo(ii));
console.log("this array is of objects: " + arrMemo(obj1));
console.log("this array is of objects: " + arrMemo(obj2));

console.log(" ");
//task debehaviorizer
obj = {
	'one':1, 
	'two':2, 
	getOne: function(){
		return this.one;
		}, 
	getTwo: function(){
		return this.two;
		}, 
	mass:['a', 10]
	};

console.log('Object: ');
		
console.log(obj);	

//Object.freeze(obj.getOne);
try {
	console.log('Removed functions');	
	var array = STKit.debehaviorizer(obj, true);
	console.log(obj);	
	console.log('Add functions');
	console.log(STKit.debehaviorizer(obj, array));	
}catch (e) {
	console.log(e);
}


