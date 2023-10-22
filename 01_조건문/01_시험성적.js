// A 학점: 90점 이상 100점 이하
// B 학점: 80점  이상  89점 이하
// C 학점: 70점 이상  79점 이하
// D 학점: 60점  이상 69점  이하
// F 학점: 59점 이하

// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// data = Number(input[0]);
// function check(a) {
//   if (90 <= a && a <= 100) console.log("A");
//   else if (80 <= a && a <= 89) console.log("B");
//   else if (70 <= a && a <= 79) console.log("C");
//   else if (60 <= a && a <= 69) console.log("D");
//   else console.log("F");
// }
// check(data);

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

data = Number(input[0]);
function check(a) {
  if (90 <= a && a <= 100) console.log("A");
  else if (80 <= a && a <= 89) console.log("B");
  else if (70 <= a && a <= 79) console.log("C");
  else if (60 <= a && a <= 69) console.log("D");
  else console.log("F");
}
check(data);
