// 尾递归优化
// node版本8 报错
function factorial(n) {
  if (n === 1) return 1;
  return n + factorial(n - 1);
}

//34449150
console.log('-----------------fn1-----------------')
console.log(factorial(7000))  


function factorial2(n,total = 0) {
  if (n === 0) return total;
  return factorial2(n - 1,n+total);
}
// Uncaught RangeError: Maximum call stack size exceeded
console.log('-----------------fn2-----------------')
console.log(factorial2(7000))  