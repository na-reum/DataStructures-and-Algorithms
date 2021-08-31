const input = require("fs").readFileSync("/dev/stdin").toString().split('\n')[0];
const len = input.length;
const dp = new Array(len + 1).fill(0);
const mod = 1000000;

dp[0] = 1;
dp[1] = 1;

if(input[0] === '0') {
    console.log(0);
    return;
}

for (let now = 2; now <= len; ++now) {
    if(input[now - 1] > '0') dp[now] = dp[now-1];
    
    const num = parseInt(input[now - 2] + input[now - 1]);
    
    if (num < 27 && num >= 10) {
        dp[now] = (dp[now] + dp[now - 2]) % mod;
    }
}
console.log(dp[len]);