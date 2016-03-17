var testArr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, "nothing"]
];

var findMatrixValue = function(matrixSize, n) {
    n = n + 1;
    var limit = Math.pow(matrixSize, 2);
    if (n > limit) {
        return ["Out of Bounds", "Out of Bounds"];
    } else {
        if (n <= matrixSize) {
            return [0, (n - 1)];
        } else {
            var numberOfRows = Math.ceil(n / matrixSize) - 1;
            var colPosition = (n - (matrixSize * numberOfRows)) - 1;
            var results = [numberOfRows, colPosition];
            return results;
        }
    }
};

var position = findMatrixValue(4, 17);
console.log(position);
console.log(testArr[position[0]][position[1]]);
