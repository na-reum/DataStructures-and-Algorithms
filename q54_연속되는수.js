const input = '1 2 3 4 5';
const arr = input.split(' ').map((n)=>{
    return parseInt(n)
})

function checkNumber(arr){
    for(let i = 0; i<arr.length-1;i++){
        if(arr[i]+1 !== arr[i+1]){
            return 'NO';
        }
    }
    return 'YES';
}

console.log(checkNumber(arr))