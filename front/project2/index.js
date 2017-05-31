var d = require('./sass/index.scss')
// console.log(d)

console.log('z')
// 3 120
// 4 90
// 5 72
// 6 60

const ctx = document.getElementById('c').getContext('2d');
const sin54 = Math.sin(54 / 180 * Math.PI)
const cos54 = Math.cos(54 / 180 * Math.PI)
const sin18 = Math.sin(18 / 180 * Math.PI)
const cos18 = Math.cos(18 / 180 * Math.PI)

let power = {
  a:100,
  b:100,
  c:100,
  d:100,
  e:100
}
let max = 100
ctx.fillStyle = 'rgba(74,201,140,.4)';
ctx.beginPath();
ctx.moveTo(max, max - power.a)
ctx.lineTo(max + Math.abs(cos18 * power.b), max - Math.abs(sin18 * power.b));
ctx.lineTo(max + Math.abs(cos54 * power.c), max + Math.abs(sin54 * power.c));
ctx.lineTo(max - Math.abs(cos54 * power.d), max + Math.abs(sin54 * power.d));
ctx.lineTo(max - Math.abs(cos18 * power.e), max - Math.abs(sin18 * power.e));
ctx.closePath();
ctx.fill();
