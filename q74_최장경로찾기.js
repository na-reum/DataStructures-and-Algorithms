const graph = {1: [2, 3, 4],
    2: [1, 3, 4, 5, 6],
    3: [1, 2, 7],
    4: [1, 2, 5, 6],
    5: [2, 4, 6, 7],
    6: [2, 4, 5, 7],
    7: [3, 5, 6]}


const user_input = "1 7".split(" ");

const start = parseInt(user_input[0]);
const end = parseInt(user_input[1]);

const queue = [start];
const visited = [];


function solution(n,visited){
    let node = n[n.length -1];
    let length = 0;


    if(node == end){
        return visited.length;
    }
    if(visited.includes(node)){
        return visited.length;
    }else{
        visited.push(node)
    }

    const max = [];

    for(let next_node in graph[node]){
        n.push(graph[node][next_node]);
        max.push(length,solution(n,visited));
        length = Math.max.apply(null,max)
        queue.pop();
    }
    return length;
}

console.log(solution(queue,visited))