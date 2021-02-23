function solution(arr){
    let answer=arr;
    const mArray = [];
    const pArray = [];
    for(let x of arr){
        if(x>0){
            pArray.push(x);
        }else{
            mArray.push(x);
        }
    }
    answer= mArray.concat(pArray)
    return answer;
}

let arr=[1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));