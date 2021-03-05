// 동적프로그래밍
// 문제를 그 문제보다 더 작은 부분 문제들로 쪼개는 과정이 포함 
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

const cache = {};
function fiboBest(n){
    if(n<=1){
        return n;
    }
    if(cache[n]){
        return cache[n];
    }
    return cache[n] = fiboBest(n-1) + fiboBest(n-2);
}

// 중복 부분 문제 *

// 동적 프로그래밍을 규칙
// 중복 부분 문제
// 재귀의 분할 정복과 마찬가지로 동적 프로그래밍을 부분 문제들의 해결책을 결합한다. 
// 동일한 부분 문제에 대한 해결책이 여러 번 사용되는 경우에 동적 프로그래밍을 사용한다. 

// 최적 부분 구조
// 어떤 문제의 최적 해결책을 해당 문제의 부분 문제들의 최적 해결책들을 사용해 찾을 수 있을 때 이를 최적 부분 구조라 한다. 
// ex 걸음 수 를 채우는 법 1,2,3 걸음을 가지고 n걸음을 채우는 법
function waysToCoverStep(step){
    if(step<0) return 0;
    if(step===0) return 1;
    
    return waysToCoverStep(step-1)+waysToCoverStep(step-2)+waysToCoverStep(step-3);
}

// console.log(waysToCoverStep(4))

function waysToCoverStepDP(step){
    const cache = {};
    if(step<0) return 0;
    if(step===0) return 1;
    // 결과가 캐시에 존재하는지 확인
    if(cache[step]){
        return cache[step];
    }else{
        cache[step] = waysToCoverStep(step-1)+waysToCoverStep(step-2)+waysToCoverStep(step-3);
        return cache[step];
    }
}
// console.log(waysToCoverStepDP(4))

