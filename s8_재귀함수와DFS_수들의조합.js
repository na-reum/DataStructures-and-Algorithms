function solution(n, k, arr, m){         
    let answer=0;
    function DFS(L, s, sum){
      if(L===n||s===k){
        if(sum%m===0){
            answer++
        }
      }else{
        DFS(L+1,s+1,sum+arr[L]);
        DFS(L+1,s,sum);
      }
    }

    DFS(0, 0, 0);
    return answer;
}

let arr=[2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));