function lazy_sum(arr) {
    var sum = function () {
        return arr.reduce(function (x, y) {
            return x + y;
        });
    }
    return sum;
}

var f1 = lazy_sum([1, 2, 3, 4, 5]);
var f2 = lazy_sum([1, 2, 3, 4, 5]);
console.log(f1 === f2); // false
console.log(f1); //[Function: sum]
console.log(f1()); // 15
console.log(f1() === f2()); // true (15)