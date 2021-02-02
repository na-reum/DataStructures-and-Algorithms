const arr = [];

for (let i=0; i<20; i++){
  arr[i] = i+1;
}

const join = arr.join('').split('')
let total = 0;

for(let i = 0; i < join.length; i++){
    total += parseInt(join[i])
}
console.log(total)
