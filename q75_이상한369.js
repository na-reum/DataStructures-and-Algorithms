const input = parseInt('993');
const totalNumber = [];
for(let i=1; i<=input; i++){
    totalNumber.push(i);
}

let claps = 0;

for(let number of totalNumber){
    let clap = 0;
    const numberArray = String(number).split('');
    for(let i = 0; i<numberArray.length; i++){
        const oneNumber = numberArray[i];
        if(oneNumber === '3' || oneNumber === '6'||oneNumber === '9'){
            clap++;
        }
    }
    if(clap === numberArray.length){
        claps++;
    }
}

console.log(claps)

function sol(n){
    let answer = 0;
    let count = 1;
    const d = {3 : 1, 6 : 2, 9 : 3};
    
    while (n.length !== 0){
        answer += d[parseInt(n.pop(), 10)] * count;
        count *= 3;
    }       
    return answer;
}

const user_input = '993'.split('');
console.log(sol(user_input));