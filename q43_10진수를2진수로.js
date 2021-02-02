const input = '13';

const 이진법 = (숫자) =>{
    if(숫자 === 1 || 숫자 === 0){
        return String(숫자)
    }
    return 이진법(Math.floor(숫자/2)) + String(숫자%2)
}

console.log(이진법(input))