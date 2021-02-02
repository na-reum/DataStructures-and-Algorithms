const limit = 50;
let count = 0;
let total = 0;
const kg = '20\n20\n20\n20\n20\n20\n';

const kgsplit = kg.split('\n');


for(let i = 1; i<=kgsplit.length; i++){
    total += kgsplit[i-1]
    if(total > limit){
        count = i;
        break;
    }
}

console.log(count)