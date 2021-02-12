const l = [10, 20, 25, 27, 34, 35, 39]; //기존 입력 값
const n = parseInt(2);

function rotate(inL, inN){
    const array = inL.slice()
    const result = [];
    for(let i = 0; i < inN; i++){
        array.unshift(array.pop());
    }
    for(let j = 0; j < inL.length; j++){
        result.push(Math.abs(l[j]-array[j]))
    }
    const min = Math.min.apply(null,result);
    const minIndex = result.indexOf(min);
    console.log(`index : ${minIndex}`);
    console.log(`value : ${l[minIndex]} ${array[minIndex]}`)
}

rotate(l, n)