function solution(data){
    const DP = Array.from(Array(101),()=>Array(10).fill(0));
    for(let i=1; i<=9; i++){
        DP[1][i] = 1;
    }
    for(let i=2; i<=data; i++){
        // 1~9까지의 값
        for(let j=0; j<=9; j++){
            DP[i][j] = 0;
            // n-1의 경우
            if(j-1 >= 0){
                DP[i][j] += DP[i-1][j-1];
            }
            // n+1의 경우
            if(j+1 < 10){
                DP[i][j] += DP[i-1][j+1];
            }
            // mod로 나눈 경우
            DP[i][j] %= 1000000000;
        }
    }
    let ans = 0;
    for(let i=0; i<=9; i++){
        ans += DP[data][i];        // 1~n까지의 수중에 계단수의 개수를 뽑아내기위해.
    }
    ans %= 1000000000;
    return ans
}


const data = parseInt('2');
console.log(solution(data))

