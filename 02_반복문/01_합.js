// 문제
// n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 n (1 ≤ n ≤ 10,000)이 주어진다.

// 출력
// 1부터 n까지 합을 출력한다.

// • 자연수  𝑁의 최대  값은 10,000이다.
// • 따라서, 단순히 1부터 10,000까지의 값을 차례대로 더해도 괜찮다.
// • 이 경우  시간  복잡도 𝑂(𝑁)  이다.

/*
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let sum = 0;

for (let i = 0; i <= n; i++) {
  sum += i;
}

console.log(sum);
*/

// 방식2
//   혹은  단순히 등차수열의 합  공식을 이용할  수  있다.
// • 등차수열의 제 1항부터 제 𝑁항까지의 합을 𝑆𝑁 이라고 하자.
// • 첫째  항이 𝑎, 마지막 항이  𝑙 일  때: 𝑆𝑁   =  𝑁(𝑎 + 𝑙 )/2

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);

console.log((n * (n + 1)) / 2);
