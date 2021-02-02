const input = '20 2'

const score = input.split(" ");
let answer = 1;
for(let i = 0; i<parseInt(score[1]);i++){
    answer *= parseInt(score[0])
}

console.log(answer)

console.log(Math.pow(parseInt(score[0]),parseInt(score[1])))