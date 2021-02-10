// let 소수 = [];
// let 소수판별 = true;

// for(let i=2; i<100;i++){
//     for(let j=2; j<i; j++){
//         if(i%j === 0){
//             소수판별 = false;
//         }
//     }
//     if(소수판별){
//         소수.push(i);
//     }
//     소수판별 = true;
// }

// console.log(소수);
let 숫자 = 10000;
let 소수 = prime_list(숫자+1);
let 순회 = 0;
const 골드바흐파티션 = [];
for(let n of 소수){
    // console.log(n)
    if(소수.includes(숫자-n)){
        골드바흐파티션.push([n, 숫자-n]);
    }

    if(순회 > parseInt(소수.length/2)){
        break;
    }
    순회++;
}

console.log(골드바흐파티션);

const 차 = 골드바흐파티션.map(e => e[1]-e[0]);
const 차의인덱스 = 차.indexOf(Math.min.apply(null,차));

console.log(골드바흐파티션[차의인덱스])

// 에라토스테네스의 체
function prime_list(n){
    //  에라토스테네스의 체 초기화: n개 요소에 True 설정(소수로 간주)
    let sieve = []
    for(let i = 2; i < n; i++){
        sieve.push(true)
    }
    //  n의 최대 약수가 sqrt(n) 이하이므로 i=sqrt(n)까지 검사
    let m = parseInt(n ** 0.5)
    for (let i ; i <  m+1; i++){
        //  i가 소수인 경우
        if(sieve[i]==true){
            for(let j = i+i; j < n; j +=i){
                //  i이후 i의 배수들을 False 판정
                sieve[j] = false;
            }
        }
    }

    //  소수 목록 산출
    const 소수목록 = [];
    for(let i = 2; i < n; i++){
        if(sieve[i] == true){
            소수목록.push(i);
        }
    }
    return 소수목록;
}

// console.log(prime_list(100))