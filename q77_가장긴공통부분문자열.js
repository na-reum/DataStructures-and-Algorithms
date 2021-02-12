function sol(string){
    let result = [];
    for(let i = 1; i < string.length +1 ; i++){
        for(let j=0; j<i; j++){
            result.push(string.slice(j, j+ string.length +1 - i))
        }
    }
    return result;
}

console.log(sol('ABCDEF'))
const inputOne = 'ABCDEF';
const inputTwo = 'BCE';
const ArrayOne = sol(inputOne);
const ArrayTwo = sol(inputTwo);

const inter = ArrayOne.filter(x => ArrayTwo.includes(x));

inter.sort((a,b)=>{
    return b.length - a.length;
})

console.log(inter[0].length)