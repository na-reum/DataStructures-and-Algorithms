function solution(data){
    let answer = 0;
    const dp = Array(31).fill(1);
    dp[0]=1
    for(let i = 3; i<data+1; i++){
        dp[i] = dp[i-2]+dp[i-3];
    }
    return dp[data-1]
}


const data = 12;

console.log(solution(data))