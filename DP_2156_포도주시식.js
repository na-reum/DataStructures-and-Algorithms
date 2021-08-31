var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');    
for(var j=0; j<input.length; j++){
    input[j] = parseInt(input[j])
}
var n = input[0]
var wines = [...input]
var dp = new Array(n+1).fill(0)
dp[0] = 0
dp[1] = wines[1]
dp[2] = wines[1]+wines[2]
for(var i=3; i<=n; i++){
    dp[i] = Math.max(dp[i-2]+wines[i], dp[i-3]+wines[i-1]+wines[i], dp[i-1])
}
console.log(dp[n])