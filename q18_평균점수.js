const input = '20 30 40'

const score = input.split(" ");

let total = 0
for(let i = 0; i< score.length; i++){
    total += parseInt(score[i])
}

console.log(Math.floor(total/score.length))