// 문제
// 문자열 S를 입력받은 후에, 각 문자를 R번 반복해 새 문자열 P를 만든 후 출력하는 프로그램을 작성하시오. 즉, 첫 번째 문자를 R번 반복하고, 두 번째 문자를 R번 반복하는 식으로 P를 만들면 된다. S에는 QR Code "alphanumeric" 문자만 들어있다.

// QR Code "alphanumeric" 문자는 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ\$%*+-./: 이다.

// 입력
// 첫째 줄에 테스트 케이스의 개수 T(1 ≤ T ≤ 1,000)가 주어진다. 각 테스트 케이스는 반복 횟수 R(1 ≤ R ≤ 8), 문자열 S가 공백으로 구분되어 주어진다. S의 길이는 적어도 1이며, 20글자를 넘지 않는다.

// 출력
// 각 테스트 케이스에 대해 P를 출력한다.
// 예제 입력 1
// 2
// 3 ABC
// 5 /HTP
// 예제 출력 1
// AAABBBCCC
// /////HHHHHTTTTTPPPPP

// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// let testCase = Number(input[0]);

// for (let i = 1; i <= testCase; i++) {
//   // 한줄(line)씩 입력받기
//   let [r, s] = input[i].split(" ");
//   let result = "";
//   // 현재 문자열의 각 문자를 하나씩 확인하며
//   for (let j = 0; j <= s.length; j++) {
//     // r번 반복한 문자열을 뒤에 이어붙이기
//     result += s.charAt(j).repeat(r);
//   }
//   console.log(result);
// }

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let testCase = Number(input[0]);

for (let i = 1; i <= testCase; i++) {
  let [r, s] = input[i].split(" ");
  let result = "";
  for (let j = 0; j <= s.length; j++) {
    result += s.charAt(j).repeat(r);
  }
  console.log(result);
}
