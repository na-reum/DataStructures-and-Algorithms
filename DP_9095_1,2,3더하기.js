const solution = (data) => {
    const DP = new Array(data + 1).fill(1);
     DP[2]=2;
     DP[3]=4;
     for (let i = 3; i <= data+1; i++) {
         DP[i] = DP[i-1] + DP[i-2] + DP[i-3];
     }
     
         
     
     return DP[data];
 };
 
 const readline = require('readline');
 const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
 });
 
 let T = null;
 let countT = 0;
 
 rl.on('line', function (line) {
   if (!T) {
     T = +line;
   } else {
    console.log( solution(parseInt(line))); 
 
     countT += 1; // data를 입력받으면 countN을 증가시켜주고
   }
   if (countT === T) {
     // 입력받은 T 만큼 테스트 케이스를 통과하게되면
     rl.close(); // rl.close()를 호출하고
   }
 }).on('close', function () {
   process.exit(); // 종료한다.
 });