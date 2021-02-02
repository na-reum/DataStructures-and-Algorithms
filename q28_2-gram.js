const input = 'Javascript';

const inputspit = input.split('');

for(let i = 0; i < inputspit.length-1; i++){
    console.log(inputspit[i]+" "+inputspit[i+1])
}