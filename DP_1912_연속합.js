const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let arr = input[1].split(' ').map(x => +x);
let dp = Array.from(Array(arr.length), () => new Array());
dp[0] = arr[0];
for(let i=1; i<arr.length; i++){
    dp[i] = arr[i]+Math.max(dp[i-1],0);
}
console.log(Math.max(...dp));

    