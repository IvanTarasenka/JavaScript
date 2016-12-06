var str1 = '123x1z13';
var str2 = 'a123';

var arr1 = str1.split(/[^0-9A-Fa-f]/);
var arr2 = str2.split(/[^0-9A-Fa-f]/);

console.log("Total    " + parseStr(arr1, arr2));
console.log("Total    " + parseStr(arr2, arr1));

function parseStr(ar1, ar2) {
	var count = "";
	var count2 = "";
	
	for (var i in ar1) {
		if (parseInt(ar1[i], 10)) {
			count += ar1[i];
		} else
		if (parseInt(ar1[i], 16)) {
			count += parseInt(ar1[i], 16) ;
		} 
	}
	for (var i in ar2) {
		if (parseInt(ar2[i], 10)) {
			count2 += ar2[i];
		} else
		if (parseInt(ar2[i], 16)) {
			count2 += parseInt(ar2[i], 16) ;
		} 
	}
	return (parseInt(count, 10)) + (parseInt(count2, 10));
}
