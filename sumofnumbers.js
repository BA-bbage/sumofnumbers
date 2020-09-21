const sample = [1, 2, 3];
function sumFor(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
}

function sumWhile(array) {
  let result = 0;
  let i = 0;
  while (i < array.length) {
    result += array[i];
    i++;
  }
  return result;
}

function sumRecursion(array) {
  if (array.length === 0) {
    return 0;
  }
  return array[0] + sumRecursion(array.slice(1, array.length));
}

function sumTheSimpleWay(array) {
  return _.reduce(array, function (memo, num) { return memo + num; }, 0);
}

console.log(sumFor(sample));
console.log(sumWhile(sample));
console.log(sumRecursion(sample));
console.log(sumTheSimpleWay(sample));
