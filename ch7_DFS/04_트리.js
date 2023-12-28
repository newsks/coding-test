// 문제
// 깊이  우선  탐색, 그래프  내  사이클  판별, 트리(Tree)
// 그래프는 정점과 간선으로 이루어져 있다. 두 정점 사이에 경로가 있다면, 두 정점은 연결되어 있다고 한다. 연결 요소는 모든 정점이 서로 연결되어 있는 정점의 부분집합이다. 그래프는 하나 또는 그 이상의 연결 요소로 이루어져 있다.

// 트리는 사이클이 없는 연결 요소이다. 트리에는 여러 성질이 있다. 예를 들어, 트리는 정점이 n개, 간선이 n-1개 있다. 또, 임의의 두 정점에 대해서 경로가 유일하다.

// 그래프가 주어졌을 때, 트리의 개수를 세는 프로그램을 작성하시오.

// 입력
// 입력은 여러 개의 테스트 케이스로 이루어져 있다. 각 테스트 케이스의 첫째 줄에는 n ≤ 500과 m ≤ n(n-1)/2을 만족하는 정점의 개수 n과 간선의 개수 m이 주어진다. 다음 m개의 줄에는 간선을 나타내는 두 개의 정수가 주어진다. 같은 간선은 여러 번 주어지지 않는다. 정점은 1번부터 n번까지 번호가 매겨져 있다. 입력의 마지막 줄에는 0이 두 개 주어진다.

// 출력
// 입력으로 주어진 그래프에 트리가 없다면 "No trees."를, 한 개라면 "There is one tree."를, T개(T > 1)라면 "A forest of T trees."를 테스트 케이스 번호와 함께 출력한다.

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let line = 0;
let testCase = 1;

while (true) {
  let [n, m] = input[line].split(" ").map(Number);
  if (n == 0 && m == 0) break; // 노드의 개수(N)와 간선의 개수(M)
  graph = []; // 트리 정보 입력받기
  for (let i = 1; i <= n; i++) graph[i] = [];
  for (let i = 1; i <= m; i++) {
    let [x, y] = input[line + i].split(" ").map(Number);
    graph[x].push(y);
    graph[y].push(x);
  }

  visited = new Array(n + 1).fill(false); // 방문처리 배열

  let cnt = 0; // 그래프 내 트리의 개수
  for (let i = 1; i <= n; i++) {
    // 하나씩 노드를 확인하며
    if (!visited[i]) {
      // 연결요소이면서
    }
    if (!isCycle(i, 0)) cnt++; // 사이클이 아니라면 트리이므로, 카운트하기
  }
}

if (cnt == 0) console.log(`Case ${testCase}: No trees.`);
else if (cnt == 1) console.log(`Case ${testCase}: There is one tree.`);
else console.log(`Case ${testCase}: A forest of ${cnt} trees.`);
line += m + 1; // 다음 테스트 케이스로 이동
testCase++;
