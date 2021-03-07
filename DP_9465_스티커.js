let input = require('fs').readFileSync('dev/stdin').toString().split('\n').map((x) => x.trim());
let n = Number(input[0]);
let lineIndex = 1;

for(let i = 0; i < n; i++) {
    let row = Number(input[lineIndex++]);
    let way = [];
    let DP = [[], []];
    way[0] = input[lineIndex++].split(' ').map((x) => Number(x));
    way[1] = input[lineIndex++].split(' ').map((x) => Number(x));
    DP[0][0] = way[0][0];
    DP[1][0] = way[1][0];
    DP[0][1] = DP[1][0] + way[0][1];
    DP[1][1] = DP[0][0] + way[1][1];
    for(let j = 2; j < row; j++) {
        DP[0][j] = way[0][j] + Math.max(DP[1][j-1], DP[1][j-2]);
        DP[1][j] = way[1][j] + Math.max(DP[0][j-1], DP[0][j-2]);
    }
    console.log(Math.max(DP[0][row-1], DP[1][row-1]));
}