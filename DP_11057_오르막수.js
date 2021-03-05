function solution(data){
    const DP = Array.from(Array(1001),()=>Array(10).fill(0));
    for(let i=0; i<=9; i++){
        DP[1][i] = 1;
    }
    for(let i=2; i<=data; i++){
        // 1~9까지의 값
        for(let j=0; j<=9; j++){
            for (let k = j; k < 10; k++) {
                DP[i][j] = (DP[i][j] + DP[i-1][k]) % 10007;
            }
    }
}
let ans = 0
for (let i = 0; i <= 9; i++) {
    ans = (ans + DP[data][i]) % 10007;
}
    return ans
}


const data = parseInt('2');
console.log(solution(data));
