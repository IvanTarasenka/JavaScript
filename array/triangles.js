var table = new Array(5);	
var table2 = new Array(5);

//variant 1
for(var i = 0; i < table.length; i++)
	table[i] = new Array(5);
for(var row = 0, str = ''; row < table.length; row++) {
	for(var col = 0; col < table[row].length; col++) {
		if (row >=col && row+col<table[row].length  ) {
			table[row][col] = (1);
		} else {
			table[row][col] = (0);
		}	
		str += table[row][col] + '  ';
	}
	console.log(str + '\n');
	str = '';
}
console.log('\n');

//variant 2
for(var i = 0; i < table2.length; i++)
	table2[i] = new Array(5);	
for(var row = 0, str = ''; row < table2.length; row++) {
	for(var col = 0; col < table2[row].length; col++) {
		if (row <col && row+col>table2[row].length-1) {
			table2[row][col] = (0);
		} else
		if (row <=col || row+col>=table2[row].length-1) {
			table2[row][col] = (1);
		} else {
			table2[row][col] = (0);
		}	
		str += table2[row][col] + '  ';
	}
	console.log(str + '\n');
	str = '';
}
