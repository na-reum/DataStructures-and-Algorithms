function solution(data){
    const DP = new Array(data + 1).fill(1);

    for (let i = 3; i <= data; i++) {
        DP[i] = (DP[i - 1] + DP[i-2]);
    }
    
        
    
    return DP[data];
}


const data = parseInt('5');
console.log(solution(data))

// 피보나치로 해결