// 재귀함수 : 자기 자신을 호출하는 함수 

// 재귀의 규칙
// 1. 기저조건(종료조건)

const countDownToZero = (n) => {
    // 기저조건. 0에서 중단한다.
    if(n<0){
        return; // 함수를 중단
    }else{
        console.log(n);
        countDownToZero(n-1); // 1만큼 감수한다
    }
}

// countDownToZero(12);

// 2. 분할 정복방식
// 어떤 문제를 작은 단위로 나눠서 해당 작은 단위의 문제들을 모두 해결함으로써 문제를 해경하는 것을 말한다. 

// 피보나치수열
// for
const getNthFiboOfFor=(n)=>{
    if(n <= 1) return n;
    let sum = 0;
    let last = 1;
    let lastlast = 0;

    for(let i = 1; i<n; i++){
        sum = lastlast + last;
        lastlast = last;
        last = sum;
    }
    return sum;
}
// console.log(getNthFiboOfFor(4))

// 재귀
const getNthFiboOfLoop = (n) => {
    if(n<=1){
        return n;
    }else{
        return getNthFiboOfLoop(n-1) + getNthFiboOfLoop(n-2);
    }
}

// 꼬리재귀
const getNthFiboOfTail = (n,lastlast,last) => {
    if(n===0){
        return lastlast;
    }
    if(n===1){
        return last;
    }
    return getNthFiboOfTail(n-1,last,lastlast+last);
}
// console.log(getNthFiboOfTail(5,1,1));

// 파스칼의 삼각형
const pascalTriangle = (row,col) => {
    if(col === 0){
        return 1;
    }else if(row === 0){
        return 0;
    }else{
        return pascalTriangle(row - 1, col) + pascalTriangle(row - 1, col -1);
    }
}

// console.log(pascalTriangle(5,2));