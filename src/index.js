
// You should implement your task here.

module.exports = function towelSort(matrix) {
	let result = (matrix !== undefined) ? matrix.reduce((prev, item, i) => {
		return prev.concat((i % 2) ? item.reverse() : item)
	}, []) : [];
	return result;
}
