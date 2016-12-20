var debehaviorizer = function(data) {
	var args = Array.prototype.slice.call(arguments);
	var isBehavior = typeof args[1] === 'boolean';
	var isReverse = typeof args[1] === 'object';
	var index = -1;

	function isFunction() {
		index++;
		if(index >= args[1].length || !isReverse) {
			return;
		}
		isReverse = (typeof args[1][index] === 'function');

		isFunction();
	}
	function setFunctions() {
		var newMethod = "newMethod_";
		index--;
		if(index < 0) {
			return;
		}
		var key = newMethod + index;
		var func = args[1][index];
		data[key] = func;
		setFunctions();
	}
	function deleteFunctions() {
		indexProp++;
		var key = prop[indexProp];
		if(!!data[key] && typeof data[key] === 'function') {
			if(Object.isFrozen(data[key]) || Object.isSealed(data[key])) {
				throw 'This function is frozen';
			}
			if(isBehavior) {
				arrayFunc[++indexFunc] = data[key];
			}
			delete data[key];
		}

		if(!!prop[indexProp + 1]) {
			deleteFunctions();
		}
	}

	isFunction();
	
	var prop = Object.getOwnPropertyNames(data);
	var arrayFunc = [];
	var indexFunc = -1;
	var indexProp = -1;

	return (function () {
		if(typeof data !== 'object') {
			throw 'Error: It is not an object';
		}
		if(Object.isFrozen(data) || Object.isSealed(data)) {
			throw 'This object is frozen';
		}
		if(isReverse) {
			setFunctions();
		}else {
			deleteFunctions();
		}
		return isBehavior ? arrayFunc : data;
	})();
};

module.exports = debehaviorizer;