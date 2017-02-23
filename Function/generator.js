'use strict';
function* next_id(y) {

    var x = 1;
    while (x <= y) {
        yield(x++);
    };
    return x;

}
var f = next_id(5);
console.log(f.next()); // {value: 1, done: false}
console.log(f.next()); // {value: 2, done: false}
console.log(f.next()); // {value: 3, done: false}
console.log(f.next()); // {value: 4, done: false}
console.log(f.next()); // {value: 5, done: true}

for (var x of next_id(5)) {
    console.log(x); // 依次输出1, 2, 3, 4, 5
}