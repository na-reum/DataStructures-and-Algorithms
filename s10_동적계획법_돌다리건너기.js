function solution(n){  
    let answer=0;
    function DFS(L,sum){
        if(sum>=n){
            return answer+=1;
        }else{
            DFS(L+1,sum+1);
            DFS(L+1,sum+2);
        }
    }

    DFS(0,0)
    return answer;
}

console.log(solution(7));