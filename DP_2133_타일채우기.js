function solution(data){
    let answer = 0;
    const dp = Array(31).fill(0);
    dp[0]=1
    for(let i = 2; i<data+1; i++){
        dp[i] = dp[i-2]*3;
        for(let j = 0; j<i-2; j++){
            dp[i] += dp[j]*2
        }
    }
    return dp[data]
}


const data = 2;

console.log(solution(data))
