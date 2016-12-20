var memoizer = function memoizer(func) {
	var cache = {};
	return function() {
				var key = arguments.length + Array.prototype.join.call(arguments,",");
			if (key in cache)
				return cache[key];
			else
				cache[key] = func.apply(this, arguments);
				return cache[key];
			};
};
module.exports = memoizer;