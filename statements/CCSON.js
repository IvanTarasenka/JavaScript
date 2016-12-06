var data = ";key,value;key1,value;key3,value3;";
var output = {};

var arr=data.split(";");

for (var i = 0; i < arr.length; i++) {
	if (arr[i] != "") {
		var keyValue = arr[i].split(",");
		output[keyValue[0]] = keyValue[1];
	}
}
console.log(output);
