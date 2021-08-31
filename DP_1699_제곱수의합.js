function solution(data){
    let answer = 0;
    const dp = Array(data+1).fill(10000);
    for(let i=1; i*i<=data;i++){
        dp[i*i] = 1;
    }
    for(let i=2; i<=data; i++){
        let left = 1;
        let right = i-1;
        while(left <= right){
            if(dp[i]>dp[left] + dp[right]){
                dp[i] = dp[left] + dp[right];
            }
            left += 1;
            right += 1;
        }
    }
    return answer
}


const data = 7;

console.log(solution(data))

let fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString();
const data = +input