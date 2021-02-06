// 재귀함수 사례 -2진수 변환

let result = '';
let x = 'leejaehoon';
while(true){
    if(x.length === 1){
        // result = "0" + result;
        result += x;
        break;

    }
    const y = x.split('')
    console.log(y)

    result += String(y.pop());
    x = y.join('');
    console.log(x)
}

console.log(result);
// console.log(result.split("").reverse().join(""));

const 문자열역순 = 문자 =>{
    if(문자.length === 1){
        return 문자
    }
    return 문자[문자.length-1] + 문자열역순(문자.slice(0, 문자.length-1));
}
 
console.log(문자열역순('leejaehoon'))
