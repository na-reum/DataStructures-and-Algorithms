function solution(data){
    const DP = new Array(data + 1).fill(0);

    for (let i = 2; i <= data; i++) {
        DP[i] = DP[i - 1] + 1;
    
        if (i % 2 === 0) {
          DP[i] = Math.min(DP[i], DP[i / 2] + 1);
        }
    
        if (i % 3 === 0) {
          DP[i] = Math.min(DP[i], DP[i / 3] + 1);	
        }
    }
    
        
    
    return DP[data];
}


    const data = parseInt('10');
    console.log(solution(data))
