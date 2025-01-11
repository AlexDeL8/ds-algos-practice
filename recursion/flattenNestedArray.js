// levels to flatten = n
const nested1 = [1, 2, 3, [4,5], 6, [7,8]] // n = 1
const nested2 = [1, 2, 3, [4, [5, 6, [7, 8]]], [9, 10, [11, [12]]]] // n = 2

var flat = function (arr, n) {
    debugger;
	if(n === 0) {
		return arr
	}

	let flattened = []
	arr.forEach((element, idx) => {
		if(Array.isArray(element) && n > 0) {
			flattened.push(...flat(arr[idx], n-1))
		} else {
			flattened.push(element)
		}
	})
	return flattened
};

const flattened1 = flat(nested1, 1)
console.log(flattened1)

const flattened2 = flat(nested2, 2)
console.log(flattened2)
