var k = 1;
var a = 3;

function H(x) {
  var sum = 0;
  for (let i = 1; i <= x; i++) {
    sum += 1 / i;
  }
  return sum;
}

while (H(k) <= a) {
  k++;
}

console.log(k);
