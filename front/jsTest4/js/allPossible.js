function C(arr, num) {
  var r = [];
  (function f(t, a, n) {
    if (n == 0) {
      return r.push(t);
    }
    for (var i = 0, l = a.length; i <= l - n; i++) {
      f(t.concat(a[i]), a.slice(i + 1), n - 1);
    }
  })([], arr, num);
  return r;
}

var result = C([55, 56, 58, 60, 70, 90, 200],3)

console.log(result)


// 笛卡尔积