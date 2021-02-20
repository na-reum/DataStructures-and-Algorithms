// my solution
function solution(arr){  
    const arr2 = arr.slice();
    const arrSort = arr2.sort((a,b) => b-a)
    const set = Array.from(new Set(arrSort));
    const answer = [];
    for(let i of arr){
        answer.push(set.indexOf(i)+1)
    }

    return answer;
}

let arr=[87, 89, 92, 100, 76 , 100];
console.log(solution(arr));

// --
function solution(arr){  
    let n=arr.length;
    let answer=Array.from({length:n}, ()=>1);
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(arr[j]>arr[i]) answer[i]++;
        }
    }             
    return answer;
}

let arr=[87, 89, 92, 100, 76];
console.log(solution(arr));