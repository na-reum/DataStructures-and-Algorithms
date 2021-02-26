function solution(m, arr){
    let answer=Number.MAX_SAFE_INTEGER;
    const n = arr.length;
    const DFS = (L,sum) => {
        if(L=== n+1||L>=answer||sum>m) return;
        if(sum === m ){
            answer = Math.min(answer,L)
        }else{
            for(let i=0; i<n; i++){
                DFS(L+1,sum+arr[i])
            }
        }

    }
    DFS(0, 0);
    return answer;
}

let arr=[1, 2, 5];
console.log(solution(15, arr));