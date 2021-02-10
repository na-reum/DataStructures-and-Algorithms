const graph = {'E': ['D', 'A'],
         'F': ['D'],
         'A': ['E', 'C', 'B'],
         'B': ['A'],
         'C': ['A'],
         'D': ['E','F']}

function dfs(graph,start){
    const visited = [];
    const stack = [start];
    while(stack.length !== 0){
        let n = stack.pop();
        if(!visited.includes(n)){
            visited.push(n);
            let sub = graph[n].filter(x=> !visited.includes(x));
            for(let i of sub){
                stack.push(i);
            }
        }
    }
    return visited
}

console.log(dfs(graph,'E'))