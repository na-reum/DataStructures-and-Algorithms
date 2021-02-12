function combination(charsArray,user_input_n){
    const combi = [];
    const f = (pre, charsArray) => {
        for(let i=0; i< charsArray.length;i++){
            combi.push(pre+charsArray[i]);
            f(pre+charsArray[i],charsArray.slice(i+1))
        }
    }
    f('',charsArray)
    const countArray = combi.filter(x => x.length===3)
    const count = countArray.length;
    return `${countArray}\n${count}`
}

const arr = 'A,B,C,D'.split(',')
const user_input_n = 3;
console.log(combination(arr,user_input_n))