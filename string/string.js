var str = "1 2 3 4 5 6 7 8 9 AA a";
var strCamelCase = " CcamelCase camelCase camelcase";
var strPascalCase = " pascal_case PascalCase pascal_Case Pascal_Case";

console.log("Original string: " + str);
var strRev = reverseString(str);
console.log("Reverce string: " + strRev);

//check if string begins with 
console.log("Original string begins with: 1 2 -->" + str.startsWith('1 2'));
console.log("Original string begins with: 2 -->" + str.startsWith('2'));

//check if string ends with 
console.log("Original string ends with: a -->" + str.endsWith('a'));   
console.log("Original string ends with: 2 -->" + str.endsWith('2'));     

//Check if string is in camelCase
console.log("String is in camelCase: " + strCamelCase);   
var isCamelCase = strCamelCase.search(/([a-z\d])([A-Z])/) != -1;
console.log("String is in camelCase: " + isCamelCase );   

//Check if string is in Pascal_Case (pascal_case_to)
console.log("String is in PascalCase: " + strPascalCase ); 
var isPascalCase = strPascalCase.search(/([a-z])(_)([a-z])/g) != -1;
console.log("String is in PascalCase: " + isPascalCase );   

//function take string and return reverse string
function reverseString(st) {
	var arrStr = st.split(' ');
	arrStr.reverse();
	return arrStr.join(" ");
}
