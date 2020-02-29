const p = 0.9;

function fn(x) {
    return Math.pow(p, x) - (1 / x);
}

var n = 1;

while (fn(n + 1) > fn(n)) {
    n++;
}

console.log(n);