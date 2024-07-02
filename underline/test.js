// let a = [1, 2, 2, 2, 4, 4, 5, 6, 7, 7, 7];
// let res = [];
// for (let i = 0; i < a.length; i++) {
//   if (res.indexOf(a[i]) === -1) {
//     res.push(a[i]);
//     console.log(res + ` =  ${i}th time`);
//   } else {
//     console.log('Duplicate ');
//   }
// }
// console.log(res);

// var res = [2, 3];
// if (res.indexOf(1 == -1)) {
//   res.push(1);
// }
// console.log(res);

var player = { name: 'tamim', age: 24 };
var player1 = { age: 23 };
var player2 = {};
for (let key in player1) {
  player[key] = player1[key];
}
console.log(player2);
if (player.hasOwnProperty) {
  console.log(true);
} else {
  console.log(false);
}
