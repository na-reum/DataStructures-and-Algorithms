function mathBrackets(arr){
    const m = {
        ')':'(',
        '}':'{'
    }
    
    const stack = []

    for(let i in arr){
        if(arr[i] === '(' || arr[i] === '{'){
            stack.push(arr[i]);
        }else if(m[arr[i]]){
            if(stack.length === 0){
                return false;
            }else{
                const t = m[arr[i]];
                if(t !== stack.pop()){
                    return false
                }
            }
        }
    }
    return stack.length === 0;
}

const n = '(((())))'.split("");
if (mathBrackets(n) === true) {
    console.log('YES');
} else {
    console.log('NO');
}