var d = require('./sass/index.scss')
// 3 120
// 4 90
// 5 72
// 6 60

// 5，6边形生成器
let power = [100,100,100,100,100]
let max = 100

const ctx = document.getElementById('c').getContext('2d');
const sin54 = Math.sin(54 / 180 * Math.PI)
const cos54 = Math.cos(54 / 180 * Math.PI)
const sin18 = Math.sin(18 / 180 * Math.PI)
const cos18 = Math.cos(18 / 180 * Math.PI)

ctx.fillStyle = 'rgba(74,201,140,.4)';
ctx.beginPath();
ctx.moveTo(max, max - power[0])
ctx.lineTo(max + Math.abs(cos18 * power[1]), max - Math.abs(sin18 * power[1]));
ctx.lineTo(max + Math.abs(cos54 * power[2]), max + Math.abs(sin54 * power[2]));
ctx.lineTo(max - Math.abs(cos54 * power[3]), max + Math.abs(sin54 * power[3]));
ctx.lineTo(max - Math.abs(cos18 * power[4]), max - Math.abs(sin18 * power[4]));
ctx.closePath();
ctx.fill();
