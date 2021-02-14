const input = 7;

function sol(input){
    let answer = '1';
    if(input === 1){
        return 1;
    }
    for(let i = 1; i< input; i++ ){
        answer = pre(answer)
    }

    return answer;
}

function pre(answer){
    const answerSplit = answer.split('').map(x => parseInt(x));
    const max = Math.max.apply(null, answerSplit);
    let result = ''

    for(let i = 1; i<=max; i++){
        const number = new RegExp(i, 'g');
        const count = (answer.match(number) || []).length;
        if(count >=1){
            result= result + String(i)+ String(count);
        }
    }
    return result;
}

console.log(sol(input))