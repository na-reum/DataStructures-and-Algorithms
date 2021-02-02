const input = 'AAABBBcccddd';

const inputsplit = input.split('');

const result = [];
for(let i = 0; i < inputsplit.length; i++){
    if(inputsplit[i]===inputsplit[i].toUpperCase()){
        result.push(inputsplit[i].toLowerCase());
    }else{
        result.push(inputsplit[i].toUpperCase());

    }
}

console.log(result.join(''))