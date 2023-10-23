// 문제
// N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 정수의 개수 N (1 ≤ N ≤ 1,000,000)이 주어진다. 둘째 줄에는 N개의 정수를 공백으로 구분해서 주어진다.
//모든 정수는 -1,000,000보다 크거나 같고, 1,000,000보다 작거나 같은 정수이다.

// 출력
// 첫째 줄에 주어진 정수 N개의 최솟값과 최댓값을 공백으로 구분해 출력한다.

// 배열의 원소를 하나씩 확인하여, 최댓값과 최솟값을 찾는 문제다.
// • 최댓값(max value)과 최솟값(min value) 정보를 업데이트한다.
// 원소를 차례대로 하나씩 확인한다는 점에서 시간 복잡도 𝑂 𝑁 로 해결할 수 있다.

/* 방법1
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);


// 모든 정수는 -1,000,000보다 크거나 같고, 
// 1,000,000보다 작거나 같은 정수이다.

let minValue = 1000001;
let maxValue = -1000001;
for (let i = 0; i < n; i++) {
  if (minValue > arr[i]) minValue = arr[i]; // 일단 큰수로 초기화
  if (maxValue < arr[i]) maxValue = arr[i]; // 일단 작은수로 초기화
}
console.log(minValue, maxValue);
*/

// 방법2
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("");

let n = Number(input[0]);
let data = input[1].split(" ").map((x) => Number(x));

let minValue = data.reduce((a, b) => Math.min(a, b));
let maxValue = data.reduce((a, b) => Math.max(a, b));

console.log(minValue + " " + maxValue);
