// 재귀함수
// 내가 나를 호출하는 함수
// 반복문과 호환이 된다. 

// O(n)
let s = 0;
for(let i = 1; i < 101; i++){
    s+=i;
}

console.log(s)

// O(1)
let n = 100;
console.log(n*(n+1)/2);



let m = 1;
for(let i = 1; i < 6; i++){
    m *= i;
}
console.log(m);
 
// 재귀함수를 이용한 합
function f(n){
    if (n <=1){
        return 1 
    }else{
        return n + f(n-1)
    }
}

console.log(`재귀: ${f(100)}`)

function d(n){
    if (n <=1){
        return 1 
    }else{
        return n * d(n-1)
    }
}

console.log(`재귀: ${d(5)}`)