///// 闭包基本用法

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

///// 闭包常见错误

function count() {
    var arr = [];
    // 把 var 改成 let，变量 => 常量：bug解除
    for (var i=1; i<=3; i++) {
        arr.push(function () {
            return i * i;
        });
    }
    return arr;
}
// 每次循环产生一组函数，存在数组中了。但此时还不会调用函数体里面的运算
var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];
// 当调用数组中的每个函数时，才会执行运算。但此时已经循环完了，所有的i都为4
f1(); // 16
f2(); // 16
f3(); // 16

///// bug解法之加一层匿名函数立即执行
function count() {
    var arr = [];
    for (var i=1; i<=3; i++) {
        // 注意这里一定要加一层括号
        arr.push((function (n) {
            // 如果不加入这一层函数，则相当于给数组push了立即执行匿名函数的结果
            // 返回的就不再是一个等待执行的函数，失去了闭包的意义
            return function () { // 这里的函数也不能写个参数n，否则n就是外部传入参数，而非我们期望的循环变量了
                return n * n;
            }
        })(i)); //这里(i)表示匿名函数立即执行
    }
    return arr;
}

var obj = {
    birth: 1990,
    getAge: function () {
        var b = this.birth; // 1990
        // 这里定义一个Lambda函数
        var fn = (y) => y - this.birth; // this指向obj对象
        return fn(new Date().getFullYear());
    }
};
console.log(obj.getAge()); // 25