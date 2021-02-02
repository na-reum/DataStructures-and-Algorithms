const input = '18234';
const inputsplit = input.split("").map((n)=>{
    return parseInt(n)
})

let total = 0;

for(let i = 0 ; i<inputsplit.length;i++){
    total+=inputsplit[i]
}

console.log(total)