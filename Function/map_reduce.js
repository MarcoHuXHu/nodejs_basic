'use strict';

function string2int(s) {

    var arr = Array.prototype.map.call(s, function(x) {
        return x - '0';
    });
    return arr.reduce(function(x,y) {
        return x*10+y;
    });

}

var input = '12345';
console.log(string2int(input));

function nameNormalize(x) {
    return x[0].toUpperCase() + x.slice(1, x.length-1).toLowerCase();
}

var name = 'aDAme';
//console.log(nameNormalize(name));

'use strict';

var arr = ['1', '2', '3', 'F'];
var r;

function toInt(x) {
    return parseInt(x, 16);
}

r = arr.map(toInt);

console.log(r);