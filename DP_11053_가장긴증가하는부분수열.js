function solution(data){
    const DP = new Array(6).fill(1);
    let answer = 0;
    for(let i = 1; i<6; i++){
        let stack = 0;
        for(let j = 0;j<i;j++){
            if(data[i]>data[j]){
                stack = Math.max(DP[j],stack) 
            }
        }
        DP[i] += stack;
        answer = Math.max(answer, DP[i])

    }
    return answer
}


const data = [10,20,10,30,20,50];

console.log(solution(data))

