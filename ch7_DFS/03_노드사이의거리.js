// 문제
//
// $N$개의 노드로 이루어진 트리가 주어지고 M개의 두 노드 쌍을 입력받을 때 두 노드 사이의 거리를 출력하라.

// 입력
// 첫째 줄에 노드의 개수
// $N$과 거리를 알고 싶은 노드 쌍의 개수
// $M$이 입력되고 다음
// $N-1$개의 줄에 트리 상에 연결된 두 점과 거리를 입력받는다. 그 다음 줄에는 거리를 알고 싶은
// $M$개의 노드 쌍이 한 줄에 한 쌍씩 입력된다.

// 출력
//
// $M$개의 줄에 차례대로 입력받은 두 노드 사이의 거리를 출력한다.

// 제한
//
// $2≤N≤1\,000$
//
// $1≤M≤1\,000$
// 트리 상에 연결된 두 점과 거리는
// $10\,000$ 이하인 자연수이다.
// 트리 노드의 번호는
// $1$부터
// $N$까지 자연수이며, 두 노드가 같은 번호를 갖는 경우는 없다.

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let [n, m] = input[0].split(" ").map(Number); // 노드의 개수(N), 쿼리의 개수(M)
let graph = []; // 트리   정보   입력받기
for (let i = 1; i <= n; i++) graph[i] = [];
for (let i = 1; i < n; i++) {
  // 노드 X와 노드 Y는 서로 연결
  let [x, y, cost] = input[i].split(" ").map(Number);
  graph[x].push([y, cost]);
  graph[y].push([x, cost]);
}
function dfs(x, dist) {
  // 깊이 우선 탐색(DFS) 함수 구현
  if (visited[x]) return; // 각 노드는 한번만 방문
  visited[x] = true; // 방문처리
  distance[x] = dist;
  for (let [y, cost] of graph[x]) dfs(y, dist + cost);
}
for (let i = 0; i < m; i++) {
  // 각 쿼리(query)마다 매번 DFS를 수행
  let [x, y] = input[n + i].split(" ").map(Number);
  visited = new Array(n + 1).fill(false);
  distance = new Array(n + 1).fill(-1);
  dfs(x, 0); // 노드 X에서 출발했을 때의 모든 노드까지의 거리 계산
  console.log(distance[y]); // Y까지의 최단 거리
}
