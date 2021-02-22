function solution(arr1, arr2){
    let answer=[];
    for(let i=0; i<arr1.length; i++){
        if(arr2.includes(a[i])){
            answer.push(a[i])
        }
    }
    answer.sort((a,b)=> a-b);
    return answer;
}

let a=[1, 3, 9, 5, 2];
let b=[3, 2, 5, 7, 8];
console.log(solution(a, b));

function solution(arr1, arr2){
    let answer=[];
    arr1.sort();
    arr2.sort();
    let p1=p2=0;
    while(p1<arr1.length && p2<arr2.length){
        if(arr1[p1]==arr2[p2]){
            answer.push(arr1[p1++]);
            p2++;
        }
        else if(arr1[p1]<arr2[p2]) p1++;
        else p2++;
    }              
    return answer;
}

let a=[1, 3, 9, 5, 2];
let b=[3, 2, 5, 7, 8];
console.log(solution(a, b));