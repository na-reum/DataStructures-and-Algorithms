function solution(n, arr){  
    let answer = 0;
    const graph = Array.from(Array(n+1),()=>Array(n+1).fill(0));
    const ch = Array.from({length:n+1},()=>0);
    // 방향그래프 생성
    for(let [a,b] of arr){
        graph[a][b] = 1;
        // graph[b][a] = 1  //이것까지 하면 무방향그래프
    }
    const DFS = (v) => {
        if(v===n){
            return answer++;
        }else{
            for(let i=1;i<=n;i++){
                if(graph[v][i]===1 && ch[i]===0){
                    ch[i] = 1;
                    DFS(i);

                    // 뒤로 백하면서 체크 풀기
                    ch[i] = 0;
                }
            }
        }
    }
    ch[1] = 1;
    DFS(1)
    return answer;
}

let arr=[[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
console.log(solution(5, arr));