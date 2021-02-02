const input = '10 9 8 7 6 5 4 3 2 1';

const inputsplit = input.split(' ').sort((a,b)=>{
    return b-a;
})

console.log(inputsplit[0])