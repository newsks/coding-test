// ## 문제
// N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.
// ## 입력
// 첫째 줄에 숫자의 개수 N (1 ≤ N ≤ 100)이 주어진다. 둘째 줄에 숫자 N개가 공백없이 주어진다.
// ## 출력
// 입력으로 주어진 숫자 N개의 합을 출력한다.
// 예제 입력 1

// ```
// 5
// 54321
// ```
// 예제 출력 2

// `15`
// 문제 풀이 핵심 아이디어
// •      문자열에서 각 문자(원소)를 하나씩 확인하여 정수로 변환한다.
// •      정수로  변환된 각  값을 모두  더하여  정답을 계산할  수  있다.

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let string = input[1];

let answer = 0;
for (let x of string) {
  answer += Number(x);
}
console.log(answer);
