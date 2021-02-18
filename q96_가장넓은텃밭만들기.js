

// console.log(텃밭)

/* 
재귀함수
Memoization
DP(Dynamic Programming)
*/

// 피보나치 
// 재귀함수
function j(n){
    if(n===1 || n===2){
        return 1
    }else{
        return j(n-2) + j(n-1)
    }
}

console.log(j(6)) 

// Memoization
let N = 8;
let memo = Array(N-1).fill(0);
function M(n){
    if(n===1 || n===2){
        memo[n] = 1;
        return 1
    } else if(memo[n] !== 0){
        return memo[n]
    }else{
        memo[n] =  M(n-2) + M(n-1);
        return  memo[n] ;
    }
}

console.log(M(6))

// 팩토리얼
function factorial(n){
    if(n < 2){
        return 1;
    }else{
        return factorial(n-1)*n;
    }
}

console.log(factorial(5));

// DP 팩토리얼
let answer = 1;
for(let i = 1; i < 6; i++){
    answer *= i;
}

console.log(answer)

// DP 피보나치 
let answerP = [];
answerP[1] = 1;
answerP[2] = 1;

for(let i = 3; i < 8; i++){
    answerP[i] = answerP[i-2] + answerP[i - 1];
}

console.log(answerP)

/* 
재귀 : 중복의 가능성이 있으며, 탑다운 방식
메모리제이션 : 탑다운방식
DP : 버텀업, 중복을 하지 않는다. 
*/

// dp문제
let 텃밭 = `0 0 0 0 0
0 1 0 0 0
0 1 0 0 0
0 0 1 0 0
0 0 0 1 0`.replace(/1/g, '!').replace(/0/g, '1').replace(/!/g, '0');

// console.log(텃밭.split('\n'));
let 역전된텃밭 = [];
for(let row of 텃밭.split('\n')){
    역전된텃밭.push(row.split(' '))
}

// console.log(역전된텃밭[1][2])
function solution(역전된텃밭){
    const 높이 = 역전된텃밭.length;
    const 넓이 = 역전된텃밭[0].length;

    for(let i = 0; i < 높이; i++){
        for(let j = 0; j < 넓이; j++){
            역전된텃밭[i][j] = parseInt(역전된텃밭[i][j])
        }
    }

    let max = 0;

    for(let i = 1; i<높이; i++){       
        for(let j = 1; j<넓이; j++){
            if(역전된텃밭[i][j]===1){
                let min;
                if(역전된텃밭[i-1][j]>=역전된텃밭[i][j-1]){
                    min = 역전된텃밭[i][j-1]
                }else if(역전된텃밭[i-1][j]<역전된텃밭[i][j-1]){
                    min = 역전된텃밭[i-1][j]
                }
                if(min > 역전된텃밭[i-1][j-1]){
                    min = 역전된텃밭[i-1][j-1]
                }
                역전된텃밭[i][j] = min + 1;
                if(역전된텃밭[i][j] > max){
                    max = 역전된텃밭[i][j];
                    x = i
                    y = j
                }
            }
            
        } 
    }
    console.log(max + ' X ' +max);

    for(let i of 역전된텃밭){
        console.log(i)
    }
    for(let i = x-(max-1); i < x+1; i++){
        for(let j = y-(max-1); j < y+1; j++){
            역전된텃밭[i][j] ="#"
        }
    }

    console.log(역전된텃밭);

}

console.log(solution(역전된텃밭))