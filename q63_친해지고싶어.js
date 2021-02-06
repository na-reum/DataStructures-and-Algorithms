const input = '복잡한 세상 편하게 살자';
const inputsplit = input.split(" ");
let result = '';

for (let i=0; i<inputsplit.length; i++){
    result += inputsplit[i].slice(0,1)
}

console.log(result);