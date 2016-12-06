var  arr1 =[2, 34, 4, 0, 234, 5, -5];
var  arr2 =[2, 34, 4, 0, 234, 5, -5];
var  arr3 =[2, 34, 4, 0, 234, 5, -5];
var  arr4 =[2, 34, 4, 0, 234, 5, -5];
var  arr5 =[2, 34, 4, 0, 234, 5, -5];
var  arr6 =[2, 34, 4, 0, 234, 5, -5];

console.log("Arr before sort InsertionSort: " + arr1);
insertionSort(arr1);
console.log(arr1);

console.log("Arr before sort QuickSort: " + arr2);
insertionSort(arr2);
console.log(arr2);

console.log("Arr before sort MergeSort: " + arr3);
mergeSort(arr3);
console.log(arr3);

console.log("Arr before sort BubbleSort: " + arr4);
bubbleSort(arr4);
console.log(arr4);

console.log("Arr before sort ShellSort: " + arr5);
shellSort(arr5);
console.log(arr5);

console.log("Arr before sort CountingSort: " + arr6);
countingSort(arr6);
console.log(arr6);

Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

Array.prototype.min = function() {
  return Math.min.apply(null, this);
};

console.log("Max value is: "+ arr1.max());
console.log("Min value is: "+ arr1.min());
console.log("Average: " + avg(arr1));

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
function quickSort(A) {
    var a = [], b = [], p = A[0];
    for (var i = 1; i < A.length; i++) { 
		if (A[ i ] < p) {
			a[a.length] = A[ i ];
		} else {
		    b[b.length] = A[ i ]; 
	    }
	}
    return quickSort(a).concat( p,quickSort(b) );
}
function merge(a,low,mid,high) {
    var b = new Array(high+1-low), h, i, j = mid+1, k, h = low, i = 0;
    while (h <= mid && j <= high ) { 
		if (a[h] <= a[j]){ 
			b[ i ]=a[h]; h++; 
		} else { 
			b[ i ]=a[j]; 
			j++; 
		}
        i++;
    }
    if (h > mid){ 
		for (k = j; k <= high; k++){ 
			b[ i ]=a[k]; i++; 
		} 
	} else { 
		for (k = h; k <= mid; k++){  
			b[ i ]=a[k]; i++; 
		} 
	}    
    for (k=0; k<=high-low; k++) {
		a[k+low]=b[k];
	}
    return a;
}
function mergeSort(A) {
    function merge_sort(a,low,high) { 
		if (low < high) { 
			var mid = Math.floor((low+high)/2);
			merge_sort(a, low, mid);
			merge_sort(a, mid+1, high);
			merge(a, low, mid, high);
        }
    }
    var n = A.length;
    merge_sort(A, 0, n-1);
    return A;
}
function bubbleSort(A) {                        
    var n = A.length;
    for (var i = 0; i < n-1; i++) { 
		for (var j = 0; j < n-1-i; j++) { 
			if (A[j+1] < A[j]) { 
				var t = A[j+1]; 
				A[j+1] = A[j]; 
				A[j] = t; 
			}
        }
     }                     
    return A;  
}
function shellSort(A){ 
    var n = A.length, i = Math.floor(n/2);
    while (i > 0) { 
		for (var j = 0; j < n; j++) { 
			var k = j, t = A[j];
			while (k >= i && A[k-i] > t) { 
				A[k] = A[k-i]; 
				k -= i; 
			}
			A[k] = t;
        }
		i = (i==2) ? 1 : Math.floor(i*5/11);
    }
    return A;
}
function countingSort(A){   
    var n = A.length, Count = [], B = [];
    for (var i = 0; i < n; i++)
		Count[ i ] = 0;
		for (var i = 0; i < n-1; i++) { 
			for (var j = i+1; j < n; j++){
				if (A[ i ] < A[j])
					Count[j]++;
				else Count[ i ]++;
			}
		}
	for (var i = 0; i < n; i++) 
		B[Count[ i ]] = A[ i ];
    return B;
}
function avg(arr) {
    var arrLen = arr.length,
        result = 0;
    for (var i = 0; i < arrLen; i++) {
      result += arr[i];
    }
    var division = result / arrLen;
    return division;
}